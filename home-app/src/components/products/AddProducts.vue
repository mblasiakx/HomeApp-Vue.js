<template>
   <div class="add-panel">
       <input type="text" placeholder="Add product to list" v-model="productList.productName" @keyup.enter="AddProductHendler()">
       <button v-bind:disabled="!productList.productName" @click="AddProductHendler">Add</button>
   </div> 
</template>

<script>

import axios from 'axios'
export default{
    data() {
        return{
                    
            productList:
                {
                id:1,
                productName:'',
                }
             

        }
        
    },

    methods:{
          async AddProductHendler(){
         const loadedFlatId =  localStorage.getItem('flatIdStore')
            
            const addProduct={
            flatId: loadedFlatId,
            productName: this.productList.productName,

            }
            
            let resp = await axios.post('http://localhost:4000/app/products', addProduct)
            if(resp.status == 200){
                this.$emit('toParent', resp.data);
                this.productList.productName = "";
               
            }else {
                console.log("some error during add");
                console.log(resp);
            }
          }
    },

    
}
</script>

<style scoped>
.add-panel{
    height: 50%;
    display: flex;
    justify-content:center;

}

.add-panel input{
    width: 18rem;
}

.add-panel button{
    width: 4.5rem;
    border-radius: 5px;
    background: rgba(110, 20, 255, 0.4);
    color: rgba(255, 245, 245, 0.918);
}

.add-panel button:hover{
    width: 4.5rem;
    background: rgba(2, 243, 251, 0.4);
    color: rgba(255, 245, 245, 0.918);
    transition: 1s;
}
</style>

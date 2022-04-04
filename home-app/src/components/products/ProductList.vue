<template>
    <div class="product-list-panel">
    <li v-for="(newItem,index) in modelValue" :key="index">
     <div class="one-element"> {{index +1 + "."}} {{newItem.productName }}  <button @click="deleteItem(index)">X</button></div>
    </li>
 
   
    </div>
</template>



<script>
import axios from 'axios'
export default{
     props: ['modelValue'],
    

    methods: {
       async deleteItem(newItem){
           let item = this.$props.modelValue[newItem];
          await   axios.delete(`http://localhost:4000/app/products/${item._id}`);
         this.$props.modelValue.splice(newItem,1);
       },
    },

  
}
</script>


<style scoped>

.product-list-panel{
    list-style: none;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    color:white;
    display:flex;
    flex-direction: column;
  
}

.one-element{
    margin: 0 10px;
    font-size: 1.5em;
    font-weight: bold;
}

.one-element button{
  background: rgba(110, 20, 255, 0.4);
    color: rgba(255, 245, 245, 0.918);
}
.one-element button:hover{
   background: rgba(2, 243, 251, 0.4);
    color: rgba(255, 245, 245, 0.918);
}
</style>
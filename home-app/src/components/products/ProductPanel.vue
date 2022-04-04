<template>

    <div class="ProductPanel">
      
        <div class="add-products">
            <AddProducts @toParent="GetNewProduct"/>
        </div>

        <div class="product-panel-title">
        <h1>Product panel</h1>
        </div>

        <div class="bglogo">
        </div>

         <div class="products-list">
            <ProductList :model-value="NewProductToSend" />
        </div>
       
    </div>
</template>

<script>
import axios from 'axios'
import AddProducts from './AddProducts.vue'
import ProductList from './ProductList.vue'
export default{
    components:{
        AddProducts,
        ProductList
    },
    data(){
       return{
           NewProduct:[],
           NewProductToSend:[],
       }
        
    },

    methods:{
        GetNewProduct(NewProduct){
           
            this.NewProductToSend = this.NewProductToSend.concat(NewProduct)
        },


        
       async loadItem(){
            const response = await axios.get('http://localhost:4000/app/productsGet');
            const loadedFlatId =  localStorage.getItem('flatIdStore')
         
        let dbProducts = response.data.filter(e => e.flatId === loadedFlatId)
      
        this.NewProductToSend = this.NewProductToSend.concat(dbProducts)

       
       }
    },

      mounted(){
        this.loadItem()
    }
}
</script>


<style scoped>


.ProductPanel{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content:center;
    align-items: center;
    background:linear-gradient(rgb(78, 142, 163),rgb(100, 66, 128),rgb(67, 35, 93));
   
}

.logo{
    position: relative;
    top:10%;
    height: 200px;
    width: 200px;
    background-image: url('/logo3.png');
    background-size: cover;
}

.bglogo{
    background-image: url('/wozek2.png') ;
    position:absolute;
    top:30%;
    height: 500px;
    width: 500px;
    background-size: cover;
}

.add-products{
    height: 10%;
    width: 50%;  
    display: flex;
    flex-direction: column;
    justify-content:center;
    
   
}

.products-list{ 
    height:60%;
    width: 90%;
    position: relative;
    top:10%;
}

.product-panel-title {
     width: 100%;
}

.product-panel-title h1{
    color: white;
    background: rgba(61, 20, 95, 0.281);
    width: 100%;
    text-align: center;
}
</style>
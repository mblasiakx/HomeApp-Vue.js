<template >
<div>
  <div class="active-bills-to-give-back-panel">
     
      <li v-for="(bill,index) in BillsListToPay" :key="bill">
        <div class="one-bill-to-give-back" :class="{avtive: activeBill, 'one-bill-to-give-back-not-active' : payedBill}">
        <ul><li><span>{{index+1 + "."}} {{bill.title }} {{bill.billDate}} : </span>  <span>{{bill.price}} zł - </span> <span>{{(bill.price/bill.members).toFixed(2)}}/member</span></li><!-- <button @click="changeStatus()">Change status</button>v--></ul>
        </div>
      </li>
    
  </div>

</div>
</template>

<script>


export default{
    props:["BillsListToPay"],

    data() {
        return{
            activeBill:true,
            payedBill:false
        }
    },

    methods:{
         changeStatus(){
           this.activeBill = !this.activeBill
          this.payedBill = !this.payedBill
    },    
  
    }

}
</script>

<style scoped>
.active-bills-to-give-back-panel{
  list-style: none;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content:flex-start;
  align-items: flex-start;
  
 
}

.all-bils-count{
  font-size: 1.2rem;
  font-weight: bold;
}




.one-bill-to-give-back {
  margin: 0 10px;
  display: flex;
  flex-direction: row;
}

.one-bill-to-give-back button{
background: rgba(110, 20, 255, 0.4);
   color: white;
}

.one-bill-to-give-back ul {
  list-style: none;
    display: flex;
 flex-direction: row;
 }

 .one-bill-to-give-back ul li {
   margin: 0 10px;
 }

.one-bill-to-give-back span:nth-of-type(1){
   color:white;
   font-size: 1.5em;
  font-weight: bold;
}
.one-bill-to-give-back-not-active span:nth-of-type(1){
  color: rgb(68, 65, 65);
   font-size: 1.5em;
  font-weight: bold;
  text-decoration: line-through;
}

.one-bill-to-give-back span:nth-of-type(2){
  color:white;
   font-size: 1.5em;
  font-weight: bold;
}

.one-bill-to-give-back-not-active span:nth-of-type(2){
   color: rgb(68, 65, 65);
   font-size: 1.5em;
  font-weight: bold;
    text-decoration: line-through;
}


.one-bill-to-give-back span:nth-of-type(3){
  color: rgb(255, 179, 66);
   font-size: 1.5em;
  font-weight: bold;
}

.one-bill-to-give-back-not-active span:nth-of-type(3){
   color: rgb(68, 65, 65);
   font-size: 1.5em;
  font-weight: bold;
   text-decoration: line-through;
}



</style>
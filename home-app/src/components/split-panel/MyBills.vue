<template>
<div>
    <div class="showDebtors"> <button @click="showDebtorshendler">Debtors list</button></div>
  <div class="active-bills-panel">
      <li v-for="(bill,index) in BillsList" :key="bill"> 

        <div class="one-bill">
        <ul>
        <li><span> {{index +1 + "."}} {{bill.title }} {{bill.billDate}} : </span>  <span>{{bill.price}} zł - 
        </span> <span>{{(bill.price/bill.members).toFixed(2)}}/member</span>
       <div class="debtorsList">
       <span v-if="!showDebtors"> 
       <li v-for="members in bill.membersValues[0]" :key="members" >
       {{members}}
       </li>
       </span>
       </div> 
        <button @click="deleteBill(index)">X</button></li>
        </ul>
        </div>
      </li>
    
  </div>

  <div class="all-bils-count">
    All members ow me : {{this.$props.debtToMe.toFixed(2)}} zł
  </div>
</div>
</template>

<script>

import axios from 'axios'
export default{
    props:["BillsList", "debtToMe"],

        data() {
        return{
        showDebtors: true
        }
 
    },

    methods:{
         async deleteBill(bill) {
          let oneBill = this.$props.BillsList[bill];
         await axios.delete(`http://localhost:4000/app/split/${oneBill._id}`);
          this.$props.BillsList.splice(bill,1);
        
        this.$emit('updateValueofBills', oneBill.owMeCount);
       //this.$props.debtToMe = this.$props.debtToMe - oneBill.owMeCount
    },
    showDebtorshendler(){
      this.showDebtors = !this.showDebtors
    }  
  
    },
}
</script>


<style scoped>
.active-bills-panel{
  list-style: none;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;

  
}
.all-bils-count{
  font-size: 1.2rem;
  font-weight: bold;
  color: rgb(14, 188, 231);
 
}

.one-bill {
  margin: 0 10px;
   display: flex;
  flex-direction:column;
 justify-content: space-between;
 align-items: flex-start;

}

.one-bill button {
  margin: 0 10px;
   background: rgba(110, 20, 255, 0.4);
   color: white;
}

.one-bill button:hover {
  margin: 0 10px;
   background: rgba(2, 243, 251, 0.4);
   color: white;
}

.one-bill ul{
    display: flex;
  flex-direction: row;
  justify-content: space-between;

  
}
.one-bill ul li{
  list-style: none;
  display:flex;
  flex-direction: row;
  padding: 0 10px;
 
  

}



.one-bill  ul li span{
  color: rgb(248, 248, 248);
   font-size: 1.5em;
  font-weight: bold;
  display: flex;
  flex-direction: row;
    
  
  
}






.one-bill span:nth-of-type(2){
  color: rgb(255, 255, 255);
   font-size: 1.5em;
  font-weight: bold;
}


.one-bill span:nth-of-type(3){
  color: rgb(255, 179, 66);
   font-size: 1.5em;
  font-weight: bold;
}

.showDebtors button{
   background: rgba(110, 20, 255, 0.4);
   color: white;
}


</style>
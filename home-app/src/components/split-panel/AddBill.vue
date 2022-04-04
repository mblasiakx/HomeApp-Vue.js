<template>
  <div class="add-bill-panel">
    
    <div class="bill-input">
      <input type="text" placeholder="title" v-model="Bill.title"/>
    </div>
    <div class="bill-input">
      <input type="number" placeholder="price" v-model="Bill.price" min="0" onkeyup="if(this.value<0){this.value= this.value * -1}"/>
    </div>
    <div class="bill-input" >
      <input type="date" v-model="Bill.billDate" name="billDate" :not-after="disableDateAfter"/>
      
    </div>

    <div class="button-list">
  
    <button @click="ShowMembers" >Members</button>
    <button @click="AddBill" :disabled="!Bill.title || !Bill.price || !Bill.billDate">Add</button>
    </div>
  </div>


</template>


<script>
import axios from 'axios'

export default{
  props:['MembersToSplit','MembersCountValue'],
  data() {
    return{
      Bill:{
        id:"",
        email:"",
        title:"",
        price:"",
        billDate:"",
        members:"",
        owMeCount: "",
        membersValues:[]

      },
      debt:0,
      showMembers:true,
      hiddenMembers:false,
     disableDateAfter: new Date()
    }
  },

  methods:{
    async AddBill(){
         const loadedEmail =  localStorage.getItem('emailStore')
            this.Bill.email = loadedEmail
            this.Bill.members = this.MembersToSplit
            this.Bill.membersValues.push(this.MembersCountValue)
          if(this.MembersCountValue.includes(loadedEmail)){
            this.Bill.owMeCount = (this.Bill.price/(this.Bill.members)) *(this.Bill.members - 1)
          }else{
          this.Bill.owMeCount = this.Bill.price
          }

           
            let resp = await axios.post('http://localhost:4000/app/split', this.Bill)
             this.$emit('GetBill', resp.data);
              this.Bill={
                  title:"",
                  price:"",
                  billDate:"",
              }

    },

    ShowMembers(){
        this.$emit("ShowMembers");
    },

    
  },

  

}
</script>





<style scoped>

.Panel{
display: flex;
align-content: center;
align-items: center;
}


.add-bill-panel{
  width: 100%;
  height: 80%;
  display: flex;
  justify-content: space-between;
  align-items:flex-end;
  

}

.add-bill-panel input{
 margin: 0 15px;
  width: 10rem;
  height: 2.2rem;
}

.button-list{
    width: 15%;
    display: flex;
    justify-content: space-between;
}

.button-list button{
   width: 4.5rem;
   height: 2.5rem;
    border-radius: 5px;
    background: rgba(110, 20, 255, 0.4);
    color: rgba(255, 245, 245, 0.918);
}

.button-list button:hover{
    width: 4.5rem;
    background: rgba(2, 243, 251, 0.4);
    color: rgba(255, 245, 245, 0.918);
    transition: 1s;
}

.MembersPanel{
  height: 25rem;
  width: 20rem;
  z-index: 2;

  
}



</style>
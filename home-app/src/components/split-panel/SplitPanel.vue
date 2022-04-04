<template>

    <div class="SplitPanel">
       <div class="bglogo"></div>
            
        <div class="add-bills">
            <AddBill @GetBill="GetBill" @ShowMembers="ShowMembers" :MembersToSplit="MembersToSplit" :MembersCountValue="MembersCountValue"/>
        </div>

        <div class="members-details">
            <MembersDetails @GetMembers="GetMembers" ref='MembersDetails' :FlatUsersToSend="FlatUsersToSend"/>
        </div>

         <div class="bills-list">
            <h2> New Bills </h2>
         <MyBills @updateValueofBills="updateValueofBills"  @RemoveBill="RemoveBill"  :BillsList="NewBillsToSend" :debtToMe="debtToMe" ref='MyBills'/>
        </div>

        <div class="bills-to-pay">
            <h2> Bills to pay </h2>
         <BillsToGiveBack  :BillsListToPay="BillsToPay" />
        </div>

       
    </div>
</template>

<script>
import axios from 'axios'
import AddBill from './AddBill.vue'
import MyBills from './MyBills.vue'
import MembersDetails from './MembersDetails.vue'
import BillsToGiveBack from './BillsToGiveBack.vue'
export default{

    components:{
        AddBill,
        MyBills,
        MembersDetails,
        BillsToGiveBack,
       
    },
    data() {
        return{
       BillsList:[],
       NewBillsToSend:[],
       BillsToPay:[],
       FlatUsersToSend:[],
       debtToMe:0,
       MembersToSplit: null,
       MembersCountValue:""
        }
 
    },
 
    methods:{
        GetBill(Bill){
    
       this.NewBillsToSend = this.NewBillsToSend.concat(Bill)
   let sum = this.NewBillsToSend
    .map(x => parseFloat( x.owMeCount))
    .filter(x => !isNaN(x))
    .reduce((x, y) => x + y, 0); //sum

   this.debtToMe = sum
  
       
        },

        GetMembers(MembersCount,MembersCountValue){
        this.MembersToSplit = MembersCount;
        this.MembersCountValue= MembersCountValue
        },

        ShowMembers(){
            this.$refs.MembersDetails.ShowMembers()
        },

        /*RemoveBill(bill){
         const loadedEmail =  localStorage.getItem('emailStore')
         
            if(bill.membersValues.includes(loadedEmail))
            {
                this.debtToMe = this.debtToMe - ((bill.price/bill.members) * (bill.members-1))
            }

            else{
                this.debtToMe = this.debtToMe - bill.price
            }
           
            this.BillsList.splice(this.BillsList.indexOf(bill), 1);

        },*/

       async updateValueofBills(deletedValue){
            this.debtToMe = this.debtToMe - deletedValue
            //console.log(deletedValue + 'wynik')
        },

        async loadDuty(){
            const response = await axios.get('http://localhost:4000/app/splitGet');
          
            const loadedEmail =  localStorage.getItem('emailStore')
          
        let dbBills = response.data.filter(e => e.email === loadedEmail)
        this.NewBillsToSend = this.NewBillsToSend.concat(dbBills)
   
   let sum = this.NewBillsToSend.map(x => parseFloat( x.owMeCount)).filter(x => !isNaN(x)).reduce((x, y) => x + y, 0);
 
   this.debtToMe = sum
             
       },





        async loadUsers(){
            const response = await axios.get('http://localhost:4000/app/signupGet');
            const loadedFlatId =  localStorage.getItem('flatIdStore')
          
   
        let array = [...response.data]
        let dbFlats = array.filter(e => e.flatId === loadedFlatId)
  
        
        this.FlatUsersToSend = this.FlatUsersToSend.concat(dbFlats)

  
       },


        // my bills to send to other users
            async loadMyBillsToPay(){
            const response = await axios.get('http://localhost:4000/app/splitGet');
          
            const loadedEmail=localStorage.getItem('emailStore')
          
        let dbBillsToPay = response.data.filter(e => e.email !== loadedEmail)  //all bills created by other users
        
      


        for(let i=0; i<dbBillsToPay.length;i++ ){
            if(dbBillsToPay[i].membersValues[0].includes(loadedEmail)){
               
                this.BillsToPay = this.BillsToPay.concat(dbBillsToPay[i])
             
                 
            }
        }

             
       },


    },

      mounted(){
        
        this.loadDuty()
        this.loadUsers()
        this.loadMyBillsToPay()
    }

    }

</script>
 

<style scoped>
.SplitPanel{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    background:linear-gradient(rgb(78, 142, 163),rgb(100, 66, 128),rgb(67, 35, 93));

}


.bglogo{
    background-image: url('/money2.png') ;
    position:absolute;
    top:30%;
    height: 500px;
    width: 500px;
    background-size: cover;
}

.add-bills{
 height: 20%;
 width: 60%;
 position: relative;
 top:3%;

}

.bills-list{
    height:40%;
    width: 90%;
    text-align: center;
    position: relative;
    margin-top: 2%;
  
}

.bills-list h2{
     color:white;
    background: rgba(61, 20, 95, 0.281);
   
}


.bills-to-pay{
height:40%;
width: 90%;
text-align: center;
 color: white;

}

.bills-to-pay h2{
 background: rgba(61, 20, 95, 0.281);
}

</style>
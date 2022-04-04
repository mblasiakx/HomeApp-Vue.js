<template>

    <div class="Schedule">
      <div class="bglogo"></div>
        <div class="add-schedule">
           <AddDuty @toParent="GetNewTask"/>
        </div>

         <div class="schedule-list">
            <h2> Active Schedule </h2>
            <ActiveSchedule :taskList="NewDutiesToSend" @GetActiveTask="GetActiveTask" />
        </div>

       
    </div>
</template>

<script>

import AddDuty from './AddDuty.vue'
import ActiveSchedule from './ActiveSchedule.vue'
import axios from 'axios'
export default{
     components:{
        AddDuty,
        ActiveSchedule,
   
       
    },

    data(){
        return{
           Tasks:[],
            NewDutiesToSend:[]
          
        }
        
    },

    methods:{
        GetNewTask(Tasks){
            this.NewDutiesToSend = this.NewDutiesToSend.concat(Tasks)
        },

             async loadDuties(){
            const response = await axios.get('http://localhost:4000/app/dutiesGet');
            const loadedFlatId =  localStorage.getItem('flatIdStore')
  
        let dbDuties = response.data.filter(e => e.flatId === loadedFlatId)
        console.log(dbDuties)
        this.NewDutiesToSend = this.NewDutiesToSend.concat(dbDuties)

       }

        
    },


       mounted(){
        this.loadDuties()
    }
}
</script>

<style scoped>
.Schedule{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    background:linear-gradient(rgb(78, 142, 163),rgb(100, 66, 128),rgb(67, 35, 93));
}



.bglogo{
    background-image: url('/bmiotla.png') ;
    position:absolute;
    top:30%;
    height: 500px;
    width: 500px;
   background-size: cover;
}
.add-schedule{
 height: 10%;
 width: 50%;
position: relative;
 top:20%;
}

.schedule-list{
    position: relative;
    height:40%;
    width: 90%;
    top:20%;
    margin-top: 2%;
    text-align: center;
    
}
.schedule-list h2{
    align-items: center;
    color:white;
background: rgba(61, 20, 95, 0.281);

}

.done-schedule-list{
    height:20%;
    width: 90%;
    margin-top: 2%;
  
    text-align: center;
}

</style>

<template>
  <div class="active-schedule-panel">
      <li v-for="(task,index) in taskList" :key="task">
        <div class="one-element">
        <ul><li> {{index +1 + '.'}} {{task.StartDate}}  <span>{{ task.Member }}</span>  <span>{{ task.TaskName  }}</span> until: {{task.UntilDate}} <button @click="deleteItem(index)">X</button></li></ul>
        </div>
      </li>
    
  </div>
</template>


<script>
import axios from 'axios'
export default {
  props: ["taskList"],

  data() {
    return {};
  },

  methods: {
  

       async deleteItem(task){
          let duty = this.$props.taskList[task];
          console.log(duty)
          await axios.delete(`http://localhost:4000/app/duties/${duty._id}`);
         this.$props.taskList.splice(task,1);
         
       },


  
  },
};
</script>

<style scoped>
.active-schedule-panel {
  list-style: none;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
}

.one-element {
  margin: 0 10px;
  font-size: 1.5em;
  font-weight: bold;
  color: white;
 
}

.one-element button {
background: rgba(110, 20, 255, 0.4);
color: white;
}

.one-element button:hover {
background: rgba(2, 243, 251, 0.4);
  color: white;
 
}
.one-element ul li{
  list-style: none;
  
 
}

.one-element span{
  color: rgb(61, 2, 73);
}
.one-element span:nth-of-type(2){
  color: rgb(236, 117, 47);
  
}
</style>
<template>
  <div class="add-duty-panel">
    <div class="duty-input">
      <input type="date" v-model="NewTask.StartDate" />
    </div>
    <div class="duty-input">
      <input type="text" placeholder="member" v-model="NewTask.Member" />
    </div>
    <div class="duty-input">
      <input type="text" placeholder="duty" v-model="NewTask.TaskName" />
    </div>
    <div class="duty-input">
      <input type="date" v-model="NewTask.UntilDate"/>
    </div>
  
    <button @click="AddTask" :disabled="(NewTask.Member==='' || NewTask.TaskName==='' ||NewTask.UntilDate==='' || NewTask.StartDate==='' )">Add</button>
   
  </div>
</template>


<script>
import axios from 'axios'
export default {
  data() {
    return {
      NewTask: {
        id: 1,
        flatId:"",
        TaskName: "",
        Member: "",
        StartDate: "",
        UntilDate: "",
      },
    };
  },

  methods: {
    AddTask() {
      this.$emit("toParent", this.NewTask);
      const loadedFlatId =  localStorage.getItem('flatIdStore') 
      this.NewTask.flatId = loadedFlatId

        axios.post('http://localhost:4000/app/duties', this.NewTask)
            
        this.NewTask = {
        TaskName: "",
        Member: "",
        StartDate: "",
        UntilDate: "",
      }


    },
  },


};
</script>

<style scoped>
.add-duty-panel {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;

  align-items: center;
}
.add-duty-panel input {
  margin: 0 15px;
  width: 10rem;
  height: 2rem;
}
.add-duty-panel button {
    width: 5.5rem;
    height: 2.5rem;
    border-radius: 5px;
    background: rgba(110, 20, 255, 0.4);
    color: rgba(255, 245, 245, 0.918);
}

.add-duty-panel button:hover {
    width: 5.5rem;
    height: 2.5rem;
    border-radius: 5px;
    background: rgba(2, 243, 251, 0.4);
    color: rgba(255, 245, 245, 0.918);
}


</style>

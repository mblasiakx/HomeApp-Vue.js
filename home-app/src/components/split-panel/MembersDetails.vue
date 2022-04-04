<template>
    <div class="MembersList" :class="{avtive: showMembersList, 'hiddenMembersList' : hiddenMembersList}">
    <div class="Members">
        <li v-for="(user,index) in FlatUsersToSend" :key="index">
      <input type="checkbox" v-model="MembersCount" :value=user.email>
            <label>{{user.email}}</label>
        </li>
    </div>

    <div class="buttonList">
    <button @click="AddMembersToList">Add</button>
    {{MembersCount.length}}
    </div>

    </div>
</template>

<script>


export default{
    props: ['FlatUsersToSend'],
    data() {
        return{
            MembersCount:[],
            showMembersList: false,
            hiddenMembersList: true,
        }
    },

    methods:{
        AddMembersToList(){
             this.$emit("GetMembers", this.MembersCount.length,this.MembersCount);
             this.showMembersList = !this.showMembersList;
             this.hiddenMembersList =!this.hiddenMembersList;
             this.MembersCount = []
        },

        ShowMembers(){
            this.showMembersList = !this.showMembersList;
             this.hiddenMembersList =!this.hiddenMembersList;
        }
    }
}
</script>





<style scoped>

.MembersList{
    height: 15rem;
    width:10rem;
    background: rgba(133, 189, 206, 0.76);
    z-index: 2;
    position: absolute;
    top:50%;
    transform: translate(-50%,-50%);
    border-radius: 3px;
    box-shadow:0px 0px 50px 25px rgba(0,0,0,0.5)
}

.hiddenMembersList{
    height: 15rem;
    width:20rem;
    background: rgb(16, 56, 68);
    z-index: 2;
    position: absolute;
    top:-250%;
    transform: translate(-50%,-50%);
    border-radius: 3px;
    box-shadow:0px 0px 50px 25px rgba(0,0,0,0.5)
}


.buttonList{
position: absolute;
left:50%;
transform: translate(-50%);
bottom: 0;
}

.buttonList button{
background: rgba(110, 20, 255, 0.4);
color: white;
}

.Members li {
     list-style-type:none;
     
}
</style>>
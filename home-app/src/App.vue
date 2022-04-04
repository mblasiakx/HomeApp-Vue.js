<template>

 
 <video-background 
    src="bg.mp4"
    style="max-height: 100%; height: 100%;"
 >
  <div>
<div class="nav" v-if="this.$route.path !== '/'">
<Navigation />
</div>
<div class="template">
<router-view @hidden="hiddenNav"></router-view>
</div>

</div>
 </video-background>



</template>

<script>

import Navigation from './components/navigation/Navigation.vue';

export default {
  name: 'App',
  components: {
 
    Navigation,
   
  },

  data(){
    return{
        show:true,
        hidden:false
    }
  },

  

}
</script>

<style>
#app {
  width: 100%;
  height: 100%;
}

body{
  height: 100vh;
  width: 100%;
  margin: 0;
  font-family: 'Poppins', sans-serif;
}

.videobg-content{
  background-image:linear-gradient(rgba(78, 142, 163, 0.829),rgba(100, 66, 128, 0.904),rgba(67, 35, 93, 0.842));
}

.template{
  display: flex;
  height: 100vh;
  align-items: center;
  justify-content: center;
}

.nav-hidden{
  display: none;
}



@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200&display=swap')
</style>



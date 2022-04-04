<template>
<div>
   
    <header>
         <div class="logo-title"></div>
       
        <nav>
            <ul class="nav-list">
                
                <router-link to="/productPanel">Product Panel</router-link>
                 <router-link to="/splitPanel">Split Panel</router-link>
                <router-link to="/Schedule">Cleaning Schedule</router-link>
                <router-link to="/">Log out</router-link>
            </ul>
        </nav>
     
    </header>
</div>
</template>

<script>



</script>

<style>
header{
  display: flex;
  justify-content:space-around;
  align-items:center;
  background: rgba(13, 3, 15, 0.178);
  width: 100%;
  height: 9%; 
  position: fixed;
  top:0;
 
}


.logo-title{
    width: 60px;
    height: 60px;
    top:0;
    left:2%;
    position:absolute;
    background-image: url('/logo3.png');
    background-size: cover;

}



nav{
     width: 50%;
     height: 100%;
     display:flex;
     flex-direction: row;
     align-items: center;
     margin-left: 55%;
     
     
}

.nav-list{
    display: flex;
    justify-content: space-around;
    list-style: none;
    width: 100%;
   
}

.nav-list a{
    text-decoration: none;
    color:whitesmoke;
   
}

.nav-list a:hover{
    color:turquoise;
    transition: 1s;
    
}

li:hover{
color:rgb(253, 236, 236);
cursor: pointer;
}



</style>

<template>

<div class="logoContent">
    <div class="logo"></div>
    <div class="container">
        <form  class="form" :class="{avtive:login, 'form-hidden' :create}" id="login">
            <h1 class="title">Login</h1>
            <div class="message message-error"></div>

                <div class="inputs">
                     <input type="password" placeholder="Flat id" class="form-input" v-model="this.flatIdLogin">
                     <div class="input-error-message"></div>
                </div>

                 <div class="inputs">
                     <input type="text" placeholder="Login" class="form-input" v-model="this.emailLogin">
                     <div class="input-error-message"></div>
                </div>
                 <div class="inputs">
                     <input type="password" placeholder="Password" class="form-input" v-model="this.passwordLogin">
                     <div class="input-error-message"></div>
                </div>
                <button class="form-button" type="submit" @click="LogIntoApp">Log in </button>
                 <p class="form-text">
                    <a href="#" class="form-link" id="linkCreateAccount" @click="GotoCreateAccount">Create Account</a>
                </p>
                 <p class="form-text-login-info" :class="{avtive:loginErrorDisable, 'form-text-login-info-eror' :loginErrorActive}">
                    <a>Can't log in. Wrong FlatId, login or password</a>
                </p>
        </form>

        <form  class="form" :class="{avtive:create, 'form-hidden' :login}" id="create-account">
            <h1 class="title">Create Account</h1>
            <div class="message message-error"></div>

                <div class="inputs">
                     <input type="password" placeholder="Flat id" class="form-input" v-model="this.flatId">
                     <div class="input-error-message"></div>
                </div>

                 <div class="inputs">
                     <input type="text" placeholder="Login" class="form-input" v-model="this.email">
                     <div class="input-error-message"></div>
                </div>
                 <div class="inputs">
                     <input type="password" placeholder="Password" class="form-input" v-model="this.password">
                     <div class="input-error-message"></div>
                </div>
                 <div class="inputs">
                     <input type="password" placeholder="Confirm password" class="form-input" v-model="this.confirmPassword">
                     <div class="input-error-message"></div>
                </div>
                <button class="form-button" type="submit" @click="SignIn">Sign up </button>
                 <p class="form-text">
                    <a href="#" class="form-link" id="linkLogin" @click="GotoCreateAccount" >Sign in if you have account</a>
                </p>
                <p class="form-text-creation-info" :class="{avtive:creationErrorDisable, 'form-text-creation-info-error' :creationErrorActive}">
                    <a>Repeated password is incorrect. Fill password again</a>
                </p>
        </form>
    </div>
</div>
</template>

<script>

import axios from 'axios'
export default{


    data() {
        return{
            login: true,
            create: false,
          


            //create account
            flatId: '',
            email: '',
            password: '',
            confirmPassword: '',
            creationErrorActive:true,
            creationErrorDisable: false,
            
            //login
            flatIdLogin: '',
            emailLogin:'',
            passwordLogin:'',
            loginErrorActive:true,
            loginErrorDisable: false,



                    
        }
        
    },

    methods:{
        GotoCreateAccount(){
           
             this.login = !this.login
             this.create = !this.create
        },

 

        async LogIntoApp(){

            let response = await axios.get('http://localhost:4000/app/signupGet');
            if(response.data.find(a=>a.flatId === this.flatIdLogin  && a.email === this.emailLogin && a.password === this.passwordLogin)){
             this.pageActivated = !this.pageActivated
            }
            else{
                this.loginErrorActive = !this.loginErrorActive 
                this.loginErrorDisable = !this.loginErrorDisable
            }
       
            if(this.pageActivated){
                 this.storeLoginData()
                this.$router.push('/productPanel'); 
             }
              

           
        },

        SignIn(){

            if(this.password ==this.confirmPassword){
            const registered={
            flatId: this.flatId,
            email: this.email,
            password: this.password,
            confirmPassword:this.confirmPassword,
            }
            axios.post('http://localhost:4000/app/signup', registered)
        
            }else{
                this.creationErrorActive = !this.creationErrorActive 
                this.creationErrorDisable = !this.creationErrorDisable
            }
            this.flatId =''
            this.email ='',
            this.password ='',
            this.confirmPassword = ''

            this.login = !this.login
             this.create = !this.create

        },

        storeLoginData(){

          const flatIdStore =  this.flatIdLogin
          const emailStore = this.emailLogin
            localStorage.setItem('flatIdStore',flatIdStore)
            localStorage.setItem('emailStore',emailStore)
        }
        
    }
}
</script>

<style scoped>
.logoContent{
    height: 90vh;
    width: 80vh;
    display: flex;
    flex-direction:column;
    align-items:center;
    justify-content:space-between;
 
}

.container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 70%;
    width: 70%;
    margin: 1rem;
    padding: 2rem;
    box-shadow: 0 50px 50px rgba(0, 0, 0, 0.2);
    border-radius: 6px;
    background: #fafafa54;
}


.logo{
   
    height:100px;
    width: 100px;
    background-image: url('/logo3.png');
    background-size: cover;
}
.form{
  
    width: 80%;
}

.title{
    text-align: center;

}



.form-hidden{
    display: none;
}

.message{
   text-align: center;
    margin-bottom: 1rem; 
}

.message-error{
   text-align: center;
    margin-bottom: 1rem; 
}

.message-success{
    color:green;
}

.inputs{
      margin-bottom: 1rem;
}

.form-input{
    display: block;
    width: 100%;
    padding: 0.75rem;
    box-sizing: border-box;
    border-radius: var(--border-radius);
    border: 1px solid #dddddd;
    background: #eeeeee;
    outline: none;
}

.input-error-message{
    margin-top: 0.5rem;
    font-size: 0.85rem;
}

.form-button{
    width: 100%;
    padding: 1rem 2rem;
    font-weight: bold;
    font-size: 1.1rem;
    color: #ffffff;
    border: none;
    border-radius:10px;
    outline: none;
    cursor: pointer;
    background: rgb(62, 3, 139)
   
}

.form-button:hover{
    background: rgba(2, 243, 251, 0.4);
    color: rgba(255, 245, 245, 0.918);
    transition: 1s;

}

.form-button:active{
    transform: scale(0.88);
}

.form-text{
      text-align: center;
}

.form-link{
    color: rgb(5, 15, 15);
    font-size: 20px;
    text-decoration: none;
    cursor: pointer;
}

.form-link:hover{
    color: rgb(2, 41, 41);  
}

.form-text-login-info{
    color:red;
    text-align: center;
}

.form-text-login-info-eror{
    display: none;
}

.form-text-creation-info{
    color:red
}

.form-text-creation-info-error{
 display: none;
}

</style>


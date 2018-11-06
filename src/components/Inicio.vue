<template>
    <b-container class="bv-example-row">    
        <b-row align-h="center">
          <b-col md="4" sm="12" >
                     <img src="../assets/images/logo_ugel.png" class="logo" fluid alt="Responsive image">
          </b-col> 
          <b-col md="1">

          </b-col>
          <b-col md="6"  sm="12"> 
            <div class="border-form"> 
            <p class="text-center text-gold-amado welcome">Bienvenido</p>
             <form>
                    <div class="form-group text-blue-miranda ">
                      <label for="exampleInputEmail1">Usuario</label>
                      <input type="email" class="form-control" id="email-login" aria-describedby="emailHelp" placeholder="abecede@correo.com">
                    </div>
                    <div class="form-group text-blue-miranda">
                      <label for="exampleInputPassword1">Contraseña</label>
                      <input type="password" class="form-control" id="password-login" placeholder="*******">
                    </div>
                   <button type="submit" class="btn btn-block" id="btn-login">
                   <router-link to="/Main">
                  Ingresar
                </router-link></button>
              </form>
            </div>
        </b-col> 
      </b-row> 
    </b-container>
    </template>

    
<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Roboto', sans-serif;
}


/*Clases generales*/

body, html, section {
  height: 100%;
}

.title-detail {
  font-size: 21px;
  color:  rgb(213, 120, 0);
}

.text-blue-miranda {
  color: rgb( 65, 85, 99);
}

.text-gold-amado {
  color: rgb(213, 120, 0)
}

.center {
  text-align: center;
}
/*Logotipo*/

.logo {
  margin: 4em 0 2em 0;
}

/*Texto de saludo*/

p.welcome {
  text-transform: uppercase;
  font-size: 1.5em;
  margin: 1em 0 1em 0;

}

.block{
  display: block
}



.btn {
  background-color: rgb(213, 120, 0);
  color: #ffffff;
}

.heigth1{
  height: 30px;

}

.rela{
  position: relative;
  bottom: 1px;
}

.btn-gmail {
  width: 100%;
  background-color:white; 
  color: rgb(213, 120, 0);
  border-radius: 5px;
  margin: 5px;
  font-size: 16px;
  vertical-align: middle;
  padding: 2px;
  border-color:rgb(213, 120, 0);
  display: flex;
  justify-content: center;
  align-items: center
}

.rela:hover{
  color: white;
}
/*Diseño para desktop*/

@media (min-width: 992px) { 

  body {
    display:flex;
    flex-direction: column;
    justify-content: space-around;
  }

  .main {
    display: flex;
    justify-content: space-between;
  }

  .flex-logo {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .logo {
    margin: 6em 0 1.5em 0;
    
  }

  .border-form {
    border: 3px solid rgb(213, 120, 0);
    border-radius: 10px;
    padding: 60px 30px;
  }

  p.welcome {
    font-size: 2.5em;
    margin: 0 0 1.5em 0;
  }

  .text-p {
    font-size: 1.3em;
  }

  .btn {
    margin: 3em 0 0em 0;
  }

  .btn-gmail {
    width: 100%;
    background-color:white; 
    color: rgb(213, 120, 0);
    border-radius: 5px;
    margin: 5px;
    font-size: 16px;
    vertical-align: middle;
    padding: 2px;
    border-color:rgb(213, 120, 0);
    display: flex;
    justify-content: center;
    align-items: center
  }

  .icon-gmail {
   background-color: white !important;
   color: rgb(213, 120, 0);
   font-size: 1.9em;
   margin-right: 10px;
   
  }

  span.line::before {
   content: '';
   width: 20%;
   height: 1px;
   background-color: rgb( 65, 85, 99);
   display: inline-flex;
   margin: 10px;
  }
  span.line::after {
   content: '';
   width: 20%;
   height: 1px;
   background-color: rgb( 65, 85, 99);
   display: inline-flex;
   margin: 10px;
  }

  /* estilos de campos del detalle */

  .detaill-campo {
    font-size: 14px;
  }

  
}
</style>
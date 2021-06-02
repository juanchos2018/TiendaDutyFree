<template>
  <div>

<div class="page-content-wrapper">
            <!-- Bread Crumb -->
<section class="breadcrumb">
    <div class="container">
        <div class="row">
            <div class="col-12">
                <nav class="breadcrumb-link">
                    <a href="#">Inicio</a>
                    <span>Iniciar Sesión</span>
                </nav>
            </div>
        </div>
    </div>
</section>
<!-- Bread Crumb -->
<!-- Page Content -->
<section class="content-page">
    <div class="container">
        <div class="row">
            <div class="col-md-6">
                <div class="form-border-box">
                   
                        <h2 class="normal"><span>Ingrese a su cuenta</span></h2>
                        <div class="form-field-wrapper ">
                            <label>Correo electrónico <span class="required">*</span></label>
                            <input type="email" name="email" class="input-md form-full-width" placeholder="Ingresa tu correo electrónico" value="" required="" autofocus="" v-model="loguerUser.email">
                                                    </div>
                        <div class="form-field-wrapper ">
                            <label>Contraseña <span class="required">*</span></label>
                            <input type="password" name="password" class="input-md form-full-width" placeholder="Ingresa tu contraseña" value="" required="" v-model="loguerUser.password">
                                                    </div>
                        <div class="form-field-wrapper">
                            <input type="hidden" name="_token" value="x0xVM09cTZ31NBaZNsV0YNdIx4rbb1EoUE6CBfWr">
                            <button type="button" class="submit btn btn-md btn-color" @click="Loguer">Iniciar Sesión</button>
                            
                        </div>
                
                </div>
            </div>
            <div class="col-md-6">
                <div class="form-border-box">
                    <div>
                        <h2 class="normal"><span>¿No estás registrado?</span></h2>
                        <p>Regístrate en nuestro sitio y descubre todas las oportunidades que tenemos para ti.</p>
                        <div class="form-field-wrapper">
                            <NuxtLink to="/account/registrar"><a class="submit btn btn-md btn-black">Crea una cuenta</a></NuxtLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<!-- End Page Content -->
</div>




  <section class="section-default section-infof py-4 border-bottom-f">
      <div class="container">
          <div class="row">
              <div class="col-12 col-sm-12 col-md-6 col-lg-4 my-3">
                  <div class="info-item">
                      <div class="info-item_icon"><i class="fa fa-calendar-check-o"></i></div>
                      <div class="info-item_content">
                          <h5 class="info-item_title mb-2">Horarios de Atención</h5>
                          <p class="info-item_description">Lunes a Viernes 09:00 - 19:00</p>
                          <p class="info-item_description">Sábados 10:00 - 18:00</p>
                      </div>
                  </div>
              </div>
              <div class="col-12 col-sm-12 col-md-6 col-lg-4 my-3">
                  <div class="info-item">
                      <div class="info-item_icon"><i class="fa fa-whatsapp"></i></div>
                      <div class="info-item_content">
                          <h5 class="info-item_title mb-2">Venta por WhatsApp</h5>
                          <p class="info-item_description">51 981513145 (Solo Whatsapp, no llamadas)</p>
                          <p class="info-item_description">Lunes a Viernes 09:00 - 19:00</p>
                      </div>
                  </div>
              </div>
              <div class="col-12 col-sm-12 col-md-6 col-lg-4 my-3">
                  <div class="info-item">
                      <div class="info-item_icon"><i class="fa fa-phone"></i></div>
                      <div class="info-item_content">
                          <h5 class="info-item_title mb-2">Servicio al Cliente</h5>
                          <p class="info-item_description">Teléfono: (052) 578214</p>
                          <p class="info-item_description">ventas@dpgdutyfree.com</p>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </section>

  </div>
</template>

<script>
import InfoProduct from '@/components/Product'
import { mapState, mapGetters, mapActions } from 'vuex'
import axios from  'axios';

export default {
    components: {
        InfoProduct,
    },
    data() {
        return{ 
            featured_products:[],
            loguerUser:{
                    email:'',
                    password:'',
            }
        }
    },
    mounted (){
      this.ListProduct();
    },
    methods: {
        ListProduct,
        
        Loguer,
        Confirmacion,
        Error,
        datos(){
          this.$router.push({path: '/account/account'});
        }
    },
    computed: {
        ...mapState(["url_base"]),
    },
    
}


function Loguer(){
     let me = this;
    let url = this.url_base +"login-web";
    axios({
        method: "POST",
        url: url,
        data:me.loguerUser
        
    }).then(function (response) { 
        if (response.data.status == 200) { 
            me.Confirmacion()
         var resp={id_client:response.data.result.id_client, token: response.data.result.token,name:response.data.result.name,email:response.data.result.email}
         localStorage.setItem("data",JSON.stringify(resp))  
         me.$store.commit('changeStatus', true);         
         me.$store.commit('addNameUser', response.data.result.name);
         me.$store.commit('changeUrl', '/account/account');                        
         me.$router.push({path: '/account/account'});
        } else if(response.data.status == 400){ 
           me.Error(response.data.response)}         
          
    }).catch((error) => {
            console.log(error);
    });
}
 function  Confirmacion() {     
        this.$swal.fire('Bienvenido !')
  }

function Error(mensaje){
     this.$swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: mensaje, 
  })
}
function ListProduct() {
    let me = this;
    let url = this.url_base +"featured-products";
    axios({
        method: "GET",
        url: url,
        
    }).then(function (response) {    
           me.featured_products = response.data.result;
    }).catch((error) => {
            console.log(error);
    });
}
</script>

<style>
.bg-newsletter{
    background: url('~assets/img/bg_7.jpg');
  
}
</style>

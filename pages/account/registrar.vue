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
                    <span>Registrar</span>
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
            <div class="col-md-8">
                <div class="form-border-box">
                    <form>
                        <h2 class="normal"><span>Crear nueva cuenta</span></h2>
                        <div class="form-field-wrapper ">
                            <div class="row">
                                <div class="col-md-6">
                                    <label>Tipo Documento <span class="required">*</span></label>
                                    <select name="document_type" class="input-md form-full-width" id="document_type" v-model="userregister.document_type">
                                        <option v-for="item in itemTipoDocumento" :value="item.id" :key="item.id" >
                                                {{ item.valor }}
                                          </option>
                                    </select>
                                </div>
                                <div class="col-md-6">
                                    <label>Nro Documento <span class="required">*</span></label>
                                    <input type="text" class="input-md form-full-width" v-model="userregister.document_number">
                                </div>
                            </div>
                        </div>
                        <div class="form-field-wrapper ">
                            <label>Nombres <span class="required">*</span></label>
                            <input type="text" name="text" autocomplete="off" class="input-md form-full-width" placeholder="Ingresa tu nombre y apellido" value="" required="" autofocus="" v-model="userregister.name">
                        </div>
                        <div class="form-field-wrapper ">
                            <label>Correo electrónico <span class="required">*</span></label>
                            <input type="email" name="email" class="input-md form-full-width" placeholder="Ingresa tu correo electrónico" value="" required="" autofocus="" v-model="userregister.email">
                        </div>
                        <div class="form-field-wrapper ">
                            <label>Contraseña <span class="required">*</span></label>
                            <input type="password" name="password" class="input-md form-full-width" placeholder="Ingresa tu contraseña" value="" required="" v-model="userregister.password">
                        </div>
                        <div class="form-field-wrapper">
                      
                            <input type="hidden" name="_token" value="x0xVM09cTZ31NBaZNsV0YNdIx4rbb1EoUE6CBfWr">
                            <button type="button" class="submit btn btn-md btn-color" @click="RegisterUser">REGISTRAR</button>
                        </div>
                    </form>
                </div>
            </div>
            <div class="col-md-4">
                <div class="form-border-box">
                    
                        <h2 class="normal"><span>Ya tienes una cuenta ?</span></h2>
                        <div class="form-field-wrapper ">
                            <label>Correo electrónico <span class="required">*</span></label>
                            <input type="email" name="email" class="input-md form-full-width" autocomplete="off" placeholder="Ingresa tu correo electrónico" v-model="loguerUser.email" required="" autofocus="">
                                                    </div>
                        <div class="form-field-wrapper ">
                            <label>Contraseña <span class="required">*</span></label>
                            <input type="password" name="password" class="input-md form-full-width" autocomplete="off" placeholder="Ingresa tu contraseña" v-model="loguerUser.password" required="">
                                                    </div>
                        <div class="form-field-wrapper">
                            <input type="hidden" name="_token" value="x0xVM09cTZ31NBaZNsV0YNdIx4rbb1EoUE6CBfWr">
                            <button type="button" class="submit btn btn-md btn-color"  @click="Loguer">Iniciar Sesión</button>
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
            itemTipoDocumento: [],
            featured_products:[],
            userregister:{          
                document_type:'',
                document_number:'',
                name:'',
                email:'',
                password:'', 
              },
             loguerUser:{
                    email:'',
                    password:'',
            }
        }
    },
    mounted (){
      this.ListProduct();
      this.Documentos()
    },
    created (){
        this.clear()
    },
    methods: {
         ListProduct,
         RegisterUser,
         clear,
         Confirmacion,
         Documentos,   
         Loguer,
         Error  
    },
    computed: {
        ...mapState(["url_base"]),
    },
    
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
function RegisterUser(){
    let me = this;
    let url = this.url_base +"register";
    axios({
        method: "POST",
        url: url,
        data:me.userregister
        
    }).then(function (response) {    
        console.log(response.data)
        me.Confirmacion("Registrado con exito !")
        me.clear()
          
    }).catch((error) => {
            console.log(error);
    });
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
            me.Confirmacion("Beinvenido !")
         var resp={id_client:response.data.result.id_client, token: response.data.result.token,name:response.data.result.name,email:response.data.result.email}
         localStorage.setItem("data",JSON.stringify(resp))  
         me.loguerUser.email="";
         me.loguerUser.password="";
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
function  clear(){
       this.userregister.name="";
       this.userregister.email="";
       this.userregister.password="";
       this.userregister.document_number="";
       this.loguerUser.email="";
       this.loguerUser.password="";
}   

function  Confirmacion(mensaje) {     
        this.$swal.fire(mensaje)
  }
function Documentos(){
    var Tipo_Documento = 1;
    var nombreDocumento = "Dni";
    var Tipo_Documento2 = 2;
    var nombreDocumento2 = "Ruc";
    this.itemTipoDocumento.push(
        { valor: nombreDocumento, id: Tipo_Documento },
        { valor: nombreDocumento2, id: Tipo_Documento2 }
    );
    this.userregister.document_type= this.itemTipoDocumento[0].id
}

function Error(mensaje){
     this.$swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: mensaje, 
  })
}

</script>

<style>
.bg-newsletter{
    background: url('~assets/img/bg_7.jpg');
  
}
</style>

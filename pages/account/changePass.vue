<template>
    <div>
      <section class="content-page">
    <div class="container">
        <div class="row">
            <div class="col-md-6">
                <div class="form-border-box">
                   
                        <h2 class="normal"><span>Editar Contraseña</span></h2>
                        <div class="form-field-wrapper ">
                            <label>Correo electrónico <span class="required">*</span></label>
                            <input type="email" name="email" class="input-md form-full-width" placeholder="Ingresa tu correo electrónico" value="" required="" autofocus="" v-model="email">
                          </div>
                     
                        <div class="form-field-wrapper">
                            <input type="hidden" name="_token" value="x0xVM09cTZ31NBaZNsV0YNdIx4rbb1EoUE6CBfWr">
                            <button type="button" class="submit btn btn-md btn-color" @click="SendMessage">Cambiar Contraseña</button>                        
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
    </div>
</template>
<script>

import { mapState, mapGetters, mapActions } from 'vuex'
import axios from "axios";

export default {
    data() {
        return{ 
             email:''
        }
    },
      computed: {
          ...mapState(["url_base","carrito","canttotal","total"]),     
        
    },
    methods: {
         SendMessage,
        Confirmacion
    }
}

function SendMessage(){
     let me = this;
    let url = this.url_base +"get-token-mail";
    var datos={email:me.email}
    axios({
        method: "POST",
        url: url,
        data:datos
        
    }).then(function (response) { 
        if (response.data.status == 200) { 
            me.Confirmacion("Se ha enviado a su correo !")
        
        } else if(response.data.status == 400){ 
           me.Error(response.data.response)}        
          
    }).catch((error) => {
            console.log(error);
    });
}
function  Confirmacion(mensae) {     
        this.$swal.fire(mensae)
  }
//https://dev.sertaads.com/api/get-token-mail
</script>
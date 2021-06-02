<template>
  <div>
        <div class="page-content-wrapper">
                    <section class="breadcrumb">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <nav class="breadcrumb-link">
                           <NuxtLink to="/">Inicio</NuxtLink>
                            <span>Contáctenos</span>
                        </nav>
                    </div>
                </div>
            </div>
        </section>
      
        <section class="w-100 py-5">
            <div class="container">
                <div class="row">
                    <div class="col-sm-12 col-md-12 col-lg-6">
                        <div class="text-center">
                            <img class="w-100" src="https://comprasentacna.com/assets/img/stores/store-1.jpg" alt="">
                        </div>
                    </div>
                    <div class="col-sm-12 col-md-12 col-lg-6 mt-3 mt-lg-0">
                        <div class="box-store-item text-left">
                            <h2 class="bs-item__title font-title font-700 mb-3">Aeropuerto Carlos Ciriani</h2>
                            <div class="bs-item__cont">
                                <h3 class="bs-item__subtitle font-500"><i class="fa fa-map-marker"></i> Dirección</h3><h3>
                                <p class="bs-item__desc">Aeropuerto Carlos Ciriani Tienda 6 - 7, Tacna - Perú</p>
                            </h3></div>
                            <div class="bs-item__cont">
                                <h3 class="bs-item__subtitle font-500"><i class="fa fa-envelope"></i> Correo electrónico</h3><h3>
                                <p class="bs-item__desc">ventas@dpgdutyfree.com</p>
                            </h3></div>
                            <div class="bs-item__cont">
                                <h3 class="bs-item__subtitle font-500"><i class="fa fa-phone"></i> Teléfono</h3><h3>
                                <p class="bs-item__desc">(052) 578214</p>
                            </h3></div>
                            <div class="bs-item__cont">
                                <h3 class="bs-item__subtitle font-500"><i class="fa fa-whatsapp"></i> Whatsapp</h3><h3>
                                <p class="bs-item__desc">51 981513145</p>
                            </h3></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>


        <section class="w-100 py-5">
            <div class="container">
                <div class="row">
                    <div class="col-sm-12 col-md-12 col-lg-6">
                        <div class="text-center">
                            <img class="w-100" src="https://comprasentacna.com/assets/img/stores/store-2.jpg" alt="">
                        </div>
                    </div>
                    <div class="col-sm-12 col-md-12 col-lg-6 mt-3 mt-lg-0">
                        <div class="box-store-item text-left">
                            <h2 class="bs-item__title font-title font-700 mb-3">Cercado de Tacna</h2>
                            <div class="bs-item__cont">
                                <h3 class="bs-item__subtitle font-500"><i class="fa fa-map-marker"></i> Dirección</h3><h3>
                                <p class="bs-item__desc">Av. San Martín 631 - 637, Tacna - Perú</p>
                            </h3></div>
                            <div class="bs-item__cont">
                                <h3 class="bs-item__subtitle font-500"><i class="fa fa-envelope"></i> Correo electrónico</h3><h3>
                                <p class="bs-item__desc">ventas@dpgdutyfree.com</p>
                            </h3></div>
                            <div class="bs-item__cont">
                                <h3 class="bs-item__subtitle font-500"><i class="fa fa-phone"></i> Teléfono</h3><h3>
                                <p class="bs-item__desc">(052) 578214</p>
                            </h3></div>
                            <div class="bs-item__cont">
                                <h3 class="bs-item__subtitle font-500"><i class="fa fa-whatsapp"></i> Whatsapp</h3><h3>
                                <p class="bs-item__desc">51 981513145</p>
                            </h3></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>


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
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'
import axios from  'axios';
export default {
    components: {

    },
    data() {
        return{ 
   
        }
    },
    mounted (){

    },
    methods: {
    hola(){
        
    }
    },
    computed: {
        ...mapState(["url_base"]),
    },
    
}

</script>

<style>
.bg-newsletter{
    background: url('~assets/img/bg_7.jpg');
  
}
</style>

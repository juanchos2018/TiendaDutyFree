<template>
  <div>
        <div class="page-content-wrapper">
                    <section class="breadcrumb">
            <div class="container-lg">
                <div class="row">
                    <div class="col-12">
                        <nav class="breadcrumb-link">
                            <a>Inicio</a>
                            <span>Contáctenos</span>
                        </nav>
                    </div>
                </div>
            </div>
        </section>
        <section class="content-page">
            <div class="container">
                <div class="row">
                    <div class="col-md-4 mb-xs-30">
                        <h2 class="normal"><span>Mantente en contacto</span></h2>
                        <p class="mb-25">Contáctenos aquí y estaremos encantados de responder sus consultas generales.</p>
                        <h6 class="text-uppercase">Nuestra dirección</h6>
                        <p class="mb-25">
                            Aeropuerto Carlos Ciriani
                            <br>
                            Tienda 6 - 7, Tacna - Perú
                        </p>
                        <h6 class="text-uppercase">Información de contacto</h6>
                        <ul class="Contact-information mb-25">
                            <li><i class="fa fa-envelope" aria-hidden="true"></i>ventas@dpgdutyfree.com</li>
                            <li><i class="fa fa-phone" aria-hidden="true"></i>(052) 578214</li>
                        </ul>
                        <hr>
                        <div class="product-share mtb-30">
                            <ul class="list-none">
                                <li><a href="" target="_blank"><i class="fa fa-facebook"></i></a></li>
                                <li><a href="" target="_blank"><i class="fa fa-twitter"></i></a></li>
                                <li><a href="" target="_blank"><i class="fa fa-instagram"></i></a></li>
                                <li><a href="https://wa.me/51981513145" target="_blank"><i class="fa fa-whatsapp"></i></a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-md-6 offset-md-2">
                        <h2 class="normal"><span>Contacta con Nosotros</span></h2>
                        <form name="FormContactUs" id="FormContactUs" class="Contact-form" action="" method="POST" onsubmit="return false">
                            <div class="form-field-wrapper">
                                <label>Tu nombre <span class="required">*</span></label>
                                <input type="text" name="name" class="input-md form-full-width" placeholder="Ingresa tu nombre" value="" required="">
                            </div>
                            <div class="form-field-wrapper">
                                <label>Tu correo electrónico <span class="required">*</span></label>
                                <input type="email" name="email" class="input-md form-full-width" placeholder="Ingresa tu correo electrónico" value="" required="">
                            </div>
                            <div class="form-field-wrapper">
                                <label>Tu Asunto <span class="required">*</span></label>
                                <input type="text" name="subject" class="input-md form-full-width" placeholder="Ingresa tu asunto" value="" required="">
                            </div>
                            <div class="form-field-wrapper">
                                <label>Tu Mensaje <span class="required">*</span></label>
                                <textarea name="message" class="form-full-width" placeholder="Ingresa tu mensaje" rows="8" required=""></textarea>
                            </div>
                            <div class="form-field-wrapper">
                                <input type="hidden" name="_token" value="x0xVM09cTZ31NBaZNsV0YNdIx4rbb1EoUE6CBfWr">
                                <button type="submit" class="submit btn btn-md btn-color">Enviar Mensaje</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>


        <section class="section-default section-infof py-4 border-bottom-f">
            <div class="container-lg">
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

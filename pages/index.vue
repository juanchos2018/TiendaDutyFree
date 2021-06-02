<template>
  <div>


<Slider></Slider>
    <section class="section-padding-sm promo">
      <div class="container-lg">
          <div class="promo-box row">
              <div class="col-md-4 mtb-sm-30 promo-item">
                  <div class="icon d-block"><i class="fa fa-truck" aria-hidden="true"></i></div>
                  <div class="info text-center">
                      <h6 class="font-title">Despacho a Todo Tacna</h6>
                      <p>Rápido y a domicilio u oficina de transporte.</p>
                  </div>
              </div>
              <div class="col-md-4 mtb-sm-30 promo-item">
                  <div class="icon d-block"><i class="fa fa-shopping-basket" aria-hidden="true"></i></div>
                  <div class="info text-center">
                      <h6 class="font-title">Retiro Sin Costo</h6>
                      <p>Compra online y retira gratis en cualquier tienda DPG Duty Free.</p>
                  </div>
              </div>
              <div class="col-md-4 mtb-sm-30 promo-item">
                  <div class="icon d-block"><i class="fa fa-smile-o" aria-hidden="true"></i></div>
                  <div class="info text-center">
                      <h6 class="font-title">Cambios Y Devoluciones</h6>
                      <p>En DPG Duty Free cambiar de opinión no es un problema.</p>
                  </div>
              </div>
          </div>
      </div>
  </section>




<section>
        <div class="container">
            <div class="row">
                <div class="col-md-3 mt-2" v-for="item in featured_products" :key="item.id_product">              
                        <InfoProduct :product="item" :stylecolumn="stylecolumn" />                   
                </div>
            </div>
        </div>

 </section>

    <section  class="container" >         
        <Categories/>        
    </section>


  <section class="section-default mt-3 py-5 dark-bg bg-image bg-position-cc text-center overlay-black60 bg-newsletter" >
      <div class="container-lg newsletter">
          <h2 class="page-title m-0">Recibe Miles de Ofertas y Descuentos Todo el Año</h2>
          <div class="mt-4">
              <form name="form-newsletter" class="newsletter-from" id="form-newsletter" action="https://comprasentacna.com/customer-subscription" method="POST" onSubmit="return false">
                  <div class="form-input">
                      <input class="input-lg" name="email" placeholder="Su dirección de correo electrónico" type="email" required>
                  </div>
                  <input type="hidden" name="_token" value="4yAYwYh4nhuPILFjHlfuHa9PguyXaU2KJ0RK0P28">
                  <button type="submit" class="btn btn-lg btn-color">Regístrate</button>
              </form>
          </div>
          <p class="italic m-0">Suscríbete ahora, recibe ofertas y descuentos.</p>
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
  
 <Modal></Modal>
  </div>
</template>

<script>
import InfoProduct from '@/components/Product'
import { mapState, mapGetters, mapActions } from 'vuex'
import axios from  'axios';
import Slider from '@/components/Slider'
import Modal from '@/components/Modal'

import Categories from '@/components/Categories'
export default {
    components: {
        InfoProduct,
        Slider,Modal,
        Categories
    },
    data() {
        return{ 
            featured_products:[],
            stylecolumn:'product-item d-flex flex-column h-100'
        }
    },
    mounted (){
      this.ListProduct();
    },
    methods: {
        ListProduct,
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
</script>

<style>
.bg-newsletter{
    background: url('~assets/img/bg_7.jpg');
  
}
</style>

<template>
<div class="">
     <section class="breadcrumb">
      <div class="container-lg">
        <div class="row">
          <div class="col-12">
            <nav class="breadcrumb-link">
              <a href="#">Inicio</a>
              <a href="#">Categorias</a>
              <span>{{category.name}}</span>
            </nav>
          </div>
        </div>
      </div>
    </section>
    <section>
        <div class="container">
            <div class="row">
                
                <div class="col-md-3 mt-2" v-for="item in products" :key="item.id_product">              
                        <InfoProduct :product="item" :stylecolumn="stylecolumn" />                   
                </div>
            </div>
        </div>
    </section>

    <section class="section-default section-infof py-4 border-bottom-f mt-3">
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
 
</template>

<script>
import InfoProduct from '@/components/Product'
import { mapState, mapGetters, mapActions } from 'vuex'
import axios from  'axios';
import Modal from '@/components/Modal'


export default {
    components: {
        InfoProduct,  
        Modal
    },
    data() {
        return{ 
            products: [],
            category: {},
            stylecolumn:'product-item d-flex flex-column h-100'
        }
    },
    mounted (){
        this.ViewCategory();
        this.ProductByCategory();
    },
    methods: {
        ProductByCategory,
        ViewCategory,
    },
    computed: {
        ...mapState(["url_base"]),
    },
    
}

function ViewCategory() {
    let me = this;
    let url = this.url_base +"view-category/"+ this.$route.params.id_category;
    axios({
        method: "GET",
        url: url,
    }).then(function (response) {    
           me.category = response.data.result;
    }).catch((error) => {
            console.log(error);
    });
}

function ProductByCategory() {
    let me = this;
    let url = this.url_base +"search-products-by-category/"+ this.$route.params.id_category;
    axios({
        method: "GET",
        url: url,
        
    }).then(function (response) {    
           me.products = response.data.result;
    }).catch((error) => {
            console.log(error);
    });
}
</script>

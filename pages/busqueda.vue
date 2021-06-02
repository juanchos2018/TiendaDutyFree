<template>
  <div>

 <section class="breadcrumb">
    <div class="container-lg">
        <div class="row">
            <div class="col-12">
                <nav class="breadcrumb-link">
                    <NuxtLink to="/"><a>Inicio</a></NuxtLink>
                    <a>Productos</a>
                    <span>{{busqueda}}</span>
                </nav>
            </div>
        </div>
    </div>
</section>

<section class="content-page">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="list-page-title">
              <h3 class="text-uppercase">
                Resultados de búsqueda 
              </h3>
            </div>
            <div class="row product-list-item">
              <div
                class="product-item-element col-sm-4 col-md-4 col-lg-3 d-flex align-items-stretch"
                 v-for="item in products" :key="item.id" >
                 <InfoProduct :product="item" :stylecolumn="stylecolumn"/>     
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
import { mapState, mapGetters, mapActions } from "vuex";
import InfoProduct from '@/components/Product'
import Modal from '@/components/Modal'
import axios from "axios";
export default {
    components: {
        InfoProduct,      
        Modal
    },
    data() {
        return{ 
            products:[],   
            stylecolumn:'product-item d-flex flex-column h-100',
            busqueda:'' 
        }
    },
  
    computed: {
      ...mapState(["url_base","search_product"])
    },
    mounted() {
        this.ProductSearch()
    },
    methods: {
        ProductSearch
    }
}
function ProductSearch() {
    let me = this;
    me.busqueda = this.search_product;
    let url = this.url_base +"search-products/"+ this.search_product;    
    //me.busqueda=this.$route.params.name
    axios({
        method: "GET",
        url: url,        
    }).then(function (response) {   
        console.log(response.data)        
           me.products = response.data.result;
    }).catch((error) => {
            console.log(error);
    });
    //alert("llega we")
}
</script>
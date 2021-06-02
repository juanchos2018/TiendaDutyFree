<template>
  <div>
        <div class="page-content-wrapper">
                    <section class="breadcrumb">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <nav class="breadcrumb-link">
                     
                              <NuxtLink to="/">Inicio</NuxtLink>
                            <span>Marcas</span>
                        </nav>
                    </div>
                </div>
            </div>
        </section>
      
        <section class="w-100 py-5">
            <div class="container">
                <div class="row">
                    <div class="col-md-2" v-for="item in brands" :key="item.id_brand">
                        <div class="w-100 border mt-2">
                            <img class="img-fluid" :src="url_base+item.photo" :alt="item.name">
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
            brands:[],
        }
    },
    mounted (){
        this.ListBrands();
    },
    methods: {
        ListBrands,
    },
    computed: {
        ...mapState(["url_base"]),
    },
    
}
function ListBrands() {
    let me = this;
    let url = this.url_base +"active-brands";
    axios({
        method: "GET",
        url: url,
        
    }).then(function (response) {    
           me.brands = response.data.result;
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

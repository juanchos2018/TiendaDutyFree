<template>
  <div>
    <section class="breadcrumb">
      <div class="container-lg">
        <div class="row">
          <div class="col-12">
            <nav class="breadcrumb-link">
              <a href="#">Inicio</a>
              <a href="#">Productos</a>
              <span>{{name_category}}</span>
            </nav>
          </div>
        </div>
      </div>
    </section>
    <div class="container">
      <div class="row">
        <!-- Product Content -->
        <div class="col-md-9 order-0 order-md-1">
          <!-- Title -->
          <div class="list-page-title">
            <h2 class="text-uppercase">{{name_category}}</h2>
          </div>
          <!-- End Title -->
          <!-- Product Filter -->
          <div class="product-filter-content">
            <div class="product-filter-content-inner">
              <div class="product-view-switcher d-flex align-items-center">
                <label class="d-none d-lg-block">Vista</label>
                <div
                  :class="active1"
                >
                  <a class="" href="#"
                    @click="modo1"><i class="fa fa-th" aria-hidden="true"></i
                  ></a>
                </div>
                <div :class="active2">
                  <a class="" href="#"
                    @click="modo2" ><i class="fa fa-th-list" aria-hidden="true"></i
                  ></a>
                </div>
              </div>              
            </div>
          </div>
          
          <div :class="stylerow"  >          
            <div
              class="product-item-element col-sm-6 col-md-6 col-lg-4 d-flex align-items-stretch"
               v-for="item in products_by_category" :key="item.id" >             
              <InfoProduct :product="item" :stylecolumn="stylecolumn"/>              
            </div>   
          </div>    

          <div class="pagination-wraper">
            <div class="text-right mb-3">Mostrando 1 - 15 de 65 resultados</div>
            <div class="pagination">
              <ul class="pagination-numbers">
                <li class="disabled">
                  <span class="next page-number"
                    ><i class="fa fa-angle-double-left"></i
                  ></span>
                </li>

                <li><span class="page-number current">1</span></li>
                <li>
                  <a
                    href="https://comprasentacna.com/products/4/relojes/c?page=2"
                    class="page-number"
                    >2</a
                  >
                </li>
                <li>
                  <a
                    href="https://comprasentacna.com/products/4/relojes/c?page=3"
                    class="page-number"
                    >3</a
                  >
                </li>
                <li>
                  <a
                    href="https://comprasentacna.com/products/4/relojes/c?page=4"
                    class="page-number"
                    >4</a
                  >
                </li>
                <li>
                  <a
                    href="https://comprasentacna.com/products/4/relojes/c?page=5"
                    class="page-number"
                    >5</a
                  >
                </li>

                <li>
                  <a
                    href="https://comprasentacna.com/products/4/relojes/c?page=2"
                    class="next page-number"
                    ><i class="fa fa-angle-double-right"></i
                  ></a>
                </li>
              </ul>
            </div>
          </div>         
        </div>
       
        <div class="sidebar-container col-md-3 order-1 order-md-0">        
          <div class="widget-sidebar">
            <h6 class="widget-title">Nuestras Categorías</h6>
            <ul class="widget-content widget-product-categories jq-accordian">
              <li  v-for="item in categories" :key="item.id_category"  @click="ProductByCategory1( item.id_category,item.name)">              
                  <a href="#"
                  >{{ item.name }}
                  </a>                  
              </li>             
            </ul>
          </div>        
        </div>        
      </div>     
    </div>
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
              categories: [],
              products_by_category:[],
              stylecolumn:'product-item d-flex flex-column h-100',
              stylerow: 'row product-list-item',
              active1:'product-view-icon product-grid-switcher product-view-icon-active',
              active2:'product-view-icon product-grid-switcher',
              name_category:'',
        }
    },
    computed: {
      ...mapState(["url_base"])
    },
    mounted() {
        this.ListCategories()
        this.ProductByCategory()
    },
    methods: {
        ListCategories,
        ProductByCategory,
        ProductByCategory1,
        modo1,
        modo2
    }
}
function ListCategories() {
  let me = this;
  let url = this.url_base + "active-categories";
  axios({
    method: "GET",
    url: url
  })
    .then(function(response) {
      me.categories = response.data.result;
    })
    .catch(error => {
      console.log(error);
    });
}

function ProductByCategory() {
    let me = this;
    let url = this.url_base +"search-products-by-category/"+ this.$route.params.id;   
    me.name_category=this.$route.params.category
    axios({
        method: "GET",
        url: url,        
    }).then(function (response) {    
          //  console.log(response.data)
           me.products_by_category = response.data.result;
    }).catch((error) => {
            console.log(error);
    });
}
function ProductByCategory1(id,name) {
    let me = this;
    let url = this.url_base +"search-products-by-category/"+ id;  
    me.name_category=name
    axios({
        method: "GET",
        url: url,        
    }).then(function (response) {    
           // console.log(response.data)
           me.products_by_category = response.data.result;
    }).catch((error) => {
            console.log(error);
    });
}

function modo1(){
   let me = this;
    me.active1='product-view-icon product-grid-switcher product-view-icon-active',
    me.active2='product-view-icon product-grid-switcher'
    me.stylerow="row product-list-item"
    me.stylecolumn="product-item d-flex flex-column h-100"
}
function modo2(){
  let me = this;
  me.stylerow="row product-list-item product-list-view"
  me.stylecolumn="product-item flex-column w-100"
  me.active1='product-view-icon product-grid-switcher',
  me.active2='product-view-icon product-grid-switcher  product-view-icon-active'
}
</script>
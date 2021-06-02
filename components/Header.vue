<template>
  <div>
    <header class="header">
      <!--Topbar-->
      <div class="header-topbar d-none d-lg-block">
        <div class="header-topbar-inner">
          <!--Topbar Left-->
          <div class="topbar-left hidden-sm-down">
            <div class="phone">
              <i class="fa fa-phone left" aria-hidden="true"></i>Fono Ventas:
              <a href="tel:51981513145"><b>51 981513145</b></a>
            </div>
          </div>      
          <div
            class="topbar-right d-flex align-items-center justify-content-end"
          >
            <ul class="list-none">
                 <li v-if="isLoguer"  class="dropdown-nav">
                    <a href="#"><i class="fa fa-user left" aria-hidden="true"></i><span class="hidden-sm-down">Mi Cuenta</span><i class="fa fa-angle-down right" aria-hidden="true"></i></a>
                    <!--Dropdown-->
                    <div class="dropdown-menu">
                        <ul>
                            <li><a href="#">Mis Pedidos</a></li>
                        </ul>
                        <span class="divider"></span>
                        <ul>
                            <li><a href="#" @click="SingOut">
                              <i class="fa fa-sign-in left" aria-hidden="true"></i>Cerrar Sesión</a></li>                               
                        </ul>
                    </div>                       
              </li>
              <li v-else>
                <NuxtLink to="/account"
                  ><a
                    ><i class="fa fa-lock left" aria-hidden="true"></i
                    ><span class="hidden-sm-down">Iniciar Sesión</span></a
                  ></NuxtLink
                >
              </li>           
              <li>
                <NuxtLink to="/account/registrar"
                  ><a
                    ><i class="fa fa-lock left" aria-hidden="true"></i
                    ><span class="hidden-sm-down">Regístrate</span></a
                  ></NuxtLink
                >
              </li>
              <li>
                <NuxtLink to="/tiendas"><a>Tiendas</a></NuxtLink>
              </li>
              <li>
                <NuxtLink to="/marcas"><a>Marcas</a></NuxtLink>
              </li>
              <li>
                <NuxtLink to="/contactenos"><a>Contáctenos</a></NuxtLink>
              </li>
            </ul>
            <ul class="list-inline ml-3">
              <li class="list-inline-item">
                <a><i class="fa fa-lg fa-facebook-f"></i></a>
              </li>
              <li class="list-inline-item">
                <a><i class="fa fa-lg fa-twitter"></i></a>
              </li>
              <li class="list-inline-item">
                <a><i class="fa fa-lg fa-instagram"></i></a>
              </li>
              <li class="list-inline-item">
                <a href="https://wa.me/51981513145" target="_blank"
                  ><i class="fa fa-lg fa-whatsapp"></i
                ></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
            <div id="header-sticky" class="header-main">
        <!-- inner -->
        <div class="header-main-inner d-flex align-items-center">
          <!-- c -->
          <div class="flex-grow-1 flex-lg-grow-0 mr-0 mr-lg-3">
            <div class="header-logo">
              <NuxtLink to="/"
                ><a>
                  <img :src="url_path+'assets/img/logoduty.png'" alt="DPGDUTYFREE" /> </a
              ></NuxtLink>
            </div>
          </div>
          <div class="flex-grow-1 d-none d-lg-block">
            <div class="header-search search-form-actives">
             
              <div   class="d-flex">

              
                <div class="w-100">
                  <div class="header-search-field">
                    <input
                      type="text"
                      value=""
                      id="ui_autocomplete"
                      name="q"
                      autocomplete="off"
                      placeholder="¿Qué producto necesitas?"
                      class="header-search-input"
                      tabindex="0"
                      v-model="search"
                      v-on:keyup="validateEnter"/>
                  </div>
                  <div id="nav-iss-attach"></div>
                </div>
                <div class="flex-shrink-1">
                  <div class="header-search-submit">
                    <button
                      type="button"
                      class="header-search-button"
                      tabindex="0"
                      @click="SearchProducto">
                      <span
                        id="spinner_loading"
                        class="spinner-border spinner-border-sm d-none"
                        role="status"
                        aria-hidden="true"
                      ></span>
                      <svg
                        id="search_icon"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        width="24px"
                        height="24px"
                        viewBox="0 0 24 24"
                      >
                        <g
                          fill="none"
                          stroke="#FFFFFF"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <circle cx="11" cy="11" r="8" />
                          <path d="M21 21l-4.35-4.35" />
                        </g>
                      </svg>
                    </button>
                  </div>
                </div>
                 </div>
            
            </div>
          </div>
          <div class="ml-3">
            <div class="header-access">
              <div class="d-flex align-items-center">
                 <NuxtLink :to="urlaccount"  class="header-access-item d-flex align-items-center noselect">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    width="32px"
                    height="32px"
                    viewBox="0 0 24 24"
                  >
                    <g
                      fill="none"
                      stroke="#FFFFFF"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                      <circle cx="12" cy="7" r="4" />
                    </g>
                  </svg>
                  <div class="my-account-block d-none d-lg-block">
                    <span class="my-account-welcome">Bienvenid@</span>
                    <span v-if="isLoguer" class="my-account-user">{{nameUser}}</span>
                    
                    <span v-else class="my-account-user">Iniciar Sesión</span>
                  </div>
                 </NuxtLink>
                <div
                  class="header-access-item d-flex align-items-center ml-2 ml-lg-4 noselect sidebar_toggle_btn"
                  id="sidebar_toggle_btn"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    width="32px"
                    height="32px"
                    viewBox="0 0 24 24"
                  >
                    <g
                      fill="none"
                      stroke="#FFFFFF"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <circle cx="9" cy="21" r="1" />
                      <circle cx="20" cy="21" r="1" />
                      <path
                        d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"
                      />
                    </g>
                  </svg>
                  <span class="my-cart-text d-none d-lg-block" @click="openMenu"
                    >Mi Carrito</span
                  >
                  <span class="my-cart-number">{{ canttotal }}</span>
                </div>
              </div>
            </div>
          </div>
          <!-- c -->
        </div>
        <!-- inner -->
      </div>
      <!-- End Header Container -->
    </header>

    <div class="header_wrap nav-main bg_dark">
      <div class="bottom_header dark_skin main_menu_uppercase bg_dark">
        <div class="container-fluid">
          <div class="row">
            <div class="col-lg-12 col-md-12 col-sm-12 col-12">
              <nav class="navbar navbar-expand-lg">
                <div class="d-block d-lg-none">
                  <div
                    class="d-flex align-items-center justify-content-between"
                  >
                    <div class="text-white">Menú</div>
                    <button
                      class="navbar-toggler side_navbar_toggler"
                      type="button"
                      data-toggle="collapse"
                      data-target="#navbarSidetoggle"
                      aria-expanded="false"
                    >
                      <span class="fa fa-bars"></span>
                    </button>
                  </div>
                </div>
                <div
                  class="collapse navbar-collapse mobile_side_menu"
                  id="navbarSidetoggle"
                >
                  <ul class="navbar-nav position-relative">
                    <div class="d-block d-lg-none">
                      <div class="bg_dark px-2 py-3">
                        <div
                          class="d-flex align-items-center justify-content-between"
                        >
                          <div class="text-white font-700 text-uppercase">
                            Menú
                          </div>
                          <div
                            class="text-white font-700 text-uppercase return_menu_side"
                          >
                            Regresar <i class="fa fa-angle-right"></i>
                          </div>
                        </div>
                      </div>
                    </div>

                    <li
                      class="dropdown dropdown-mega-menu"
                      v-for="item in categories"
                      :key="item.id_category"
                    >
                      <div class="nav-link-item d-flex align-items-center">
                        
                        <NuxtLink :to="{name: 'productos-id_category', params: {id_category: item.id_category}}"><a class="nav-link flex-grow-1">{{ item.name }}</a></NuxtLink>
                        <i class="dropdown-icon fa fa-angle-down"></i>
                      </div>
                      <div class="dropdown-menu">
                        <ul class="mega-menu d-lg-flex">
                          <li class="mega-menu-col col-lg-2">
                            <div class="menu_banners">
                              <div class="col-lg-12">
                                <div class="header-banner">
                                  <img
                                    class="img-fluid"
                                    :src="url_base + item.photo"
                                    :alt="item.name"
                                  />
                                </div>
                                <div class="w-100">{{ item.description }}</div>
                              </div>
                            </div>
                          </li>

                          <li class="mega-menu-col col-lg-10">
                            <div class="dropdown-header">
                              Productos Destacados
                            </div>
                            <div class="px-0 px-lg-3">
                              <div class="row">
                                <div
                                  v-for="subitem in item.products"
                                  :key="subitem.id_product"
                                  class="col-12 col-sm-12 col-md-6 col-lg-4 d-flex align-items-stretch"
                                >
                                  <div class="">                                 
                                      <InfoProduct :product="subitem" :stylecolumn="stylecolumn" />                                   
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>

    <vue-drawer :visible.sync="visible">
      <div class="drawebackgro" slot="header">
        <h4 class="carrito">Mi Carrito</h4>
      </div>
      <div slot="body">
        <div class="cart-widget-content pb-0">
          <div class="cart-widget-product ">
            <ul class="cart-product-item">
              <li v-for="item in carrito" :key="item.key">
                <div class="itemCarrito">
                  <a href="#" class="product-image">
                    <img
                      :src="url_base + item.photo"
                      class="img_car"
                      alt="360 RED 100 ML EDP DAMA"
                    />
                  </a>
                  <div class="product-content">
                    <a class="product-link" href="#">{{ item.Descripcion }}</a>
                    <div class="cart-collateral">
                      <span class="qty-cart">{{ item.quantity }}</span
                      ><span> x </span
                      ><span class="product-price-amount"
                        ><span class="currency-sign">S/ </span
                        >{{ parseFloat(item.unit_price).toFixed(2) }}</span
                      >
                    </div>
                  </div>
                  <div>
                    <a
                      href="#"
                      data-row="edf4e384c8436c8fc1eef8b48a960158"
                      @click="DeleteItemCar(item.id_product)"
                      class="product-remove product_remove_sidebar"
                      ><i class="fa fa-times-circle" aria-hidden="true"></i
                    ></a>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <br />
        <div class="cart-widget-footer">
          <center>
            <div class="cart-footer-inner">
              <h4 class="cart-total-hedding normal">
                <span>Total :</span
                ><span class="cart-total-price">S/ {{ TotalPagar }}</span>
              </h4>
              <div v-if="carrito.length>0"  class="cart-action-buttons">
                <NuxtLink :to="{ name: 'carrito' }">
                  <a href="#" class="view-cart btn btn-md btn-gray"
                    >Ver Carrito</a
                  >
                </NuxtLink>
                <br /><br />
                <NuxtLink  v-if="isLoguer" to="/account/Checkout">
                  <a href="#" class="checkout btn btn-md btn-color"
                    >Pasar por Caja</a
                  >
                </NuxtLink>
                <NuxtLink  v-else :to="{ name: 'caja' }">
                  <a href="#" class="checkout btn btn-md btn-color"
                    >Pasar por Caja</a
                  >
                </NuxtLink>
              </div>
              <div v-else>
                <p>No tienes productos en el carrito</p>
              </div>
            </div>
          </center>
        </div>
      </div>
    </vue-drawer>
  </div>
</template>




<script>
import InfoProduct from "@/components/Product";
import { mapState, mapGetters, mapActions } from "vuex";
import axios from "axios";
import Vue from "vue";
import VueDrawer from "vue-drawer-component";
import "vue-drawer-component/src/index.css";


Vue.component(VueDrawer.name, VueDrawer);

export default {
  components: {
    InfoProduct
  },
  data() {
    return {
      categories: [],
      TotalPagar: 0,
      CantidadTotal: 0,
      visible: false,
      botones: false,
      user_name:'',
      search:'',
      show_user:false,
      stylecolumn:'product-item d-flex flex-column h-100'
    

    };
  },
  
  mounted() {
    this.ListCategory();
    this.ViewUser();
   
  },
  created (){   
    this.calculate() 
  },
  methods: {
    SearchProducto,
    ListCategory,
    DeleteItemCar,
    ViewUser,  
    SingOut,
    calculate,
    openMenu() {
      this.visible = true;
    },
    validateEnter: function(e) {
			if (e.keyCode === 13) {
			  	this.SearchProducto();
			} else if (e.keyCode === 50) {
				//alert('@ was pressed');
			}      
			this.log += e.key;
		},
  },
  computed: {
    ...mapState(["url_base","url_path","carrito","canttotal","total","search_product"]),
     token: function () {
      let user = window.localStorage.getItem("data");
      user = JSON.parse(user);      
      return user.token;
    },
    isLoguer(){
               return this.$store.state.userLoguer;  
    },
    nameUser(){
               return this.$store.state.nameUser;  
     },
     urlaccount(){
               return this.$store.state.urlaccount;  
     },    
  }
};
function SearchProducto(){
 
  this.$store.commit('setSearhProduct', this.search);
  this.$router.replace({path: 'busqueda'});
  this.search="";
 // alert("Entrawe ")
}
function calculate(){
    this.TotalPagar = parseFloat(this.total);
   this.TotalPagar=this.TotalPagar.toFixed(2)
}
function ListCategory() {
  let me = this;
  let url = this.url_base + "menu-categories";
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
function ViewUser() {    
     let user = localStorage.getItem("data");
     if(user!=null){
      user = JSON.parse(user);
      this.$store.commit('changeStatus', true);
      this.show_user=true;
      this.user_name=user.name
      this.$store.commit('addNameUser', user.name);
      this.$store.commit('changeUrl', '/account/account');   
     }   
}

function DeleteItemCar(id) {
  let data = { id_product: id };
  this.$store.commit("deletItemCart", data);
  this.$store.commit('cantTotal', "1");
  this.$store.commit('total', "1");
}
function SingOut(){
    let me=this;
    localStorage.clear();
    var data={id:"a"}
    me.$store.commit('cleanCart', data); 
    me.$store.commit('changeStatus', false);
    me.$store.commit('changeUrl', '/account');
    me.$router.push({path: '/'});  
    this.$store.commit("cleanCart", "0");
    this.$store.commit('cantTotal', "1");
    this.$store.commit('total', "1");

}
</script>


<style>

</style>

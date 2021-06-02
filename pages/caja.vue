<template>
  <div class="container">
    <section class="content-page">
      <div class="container-lg">
        <div class="row">
          <div class="col-sm-12">
            <div class="post-8">
              <div class="product-checkout">
                <div class="row">
                  <div class="col-md-6">
                    <h3>Datos Personales</h3>
                    <!-- tabs -->
                    <nav>
                      <div class="nav nav-tabs" id="nav-tab" role="tablist">
                        <a
                          class="nav-link"
                          id="nav-login-tab"
                          data-toggle="tab"
                          href="#nav-login"
                          role="tab"
                          aria-controls="nav-login"
                          aria-selected="false"
                          >Iniciar sesión</a
                        >
                        <a
                          class="nav-link active"
                          id="nav-singup-tab"
                          data-toggle="tab"
                          href="#nav-singup"
                          role="tab"
                          aria-controls="nav-singup"
                          aria-selected="true"
                          >Crear una cuenta</a
                        >
                      </div>
                    </nav>
                    <div class="tab-content" id="nav-tabContent">
                      <div
                        class="tab-pane fade"
                        id="nav-login"
                        role="tabpanel"
                        aria-labelledby="nav-login-tab"
                      >
                        <!-- tab content -->
                        <div class="form-border-box">
                         
                            <h2 class="normal">
                              <span>Ingrese a su cuenta</span>
                            </h2>
                            <div class="form-field-wrapper ">
                              <label
                                >Correo electrónico
                                <span class="required">*</span></label
                              >
                              <input
                                type="email"
                                name="email"
                                class="input-md form-full-width"
                                placeholder="Ingresa tu correo electrónico"
                                value=""
                                required=""
                                autofocus=""
                                v-model="loguerUser.email"
                              />
                            </div>
                            <div class="form-field-wrapper ">
                              <label
                                >Contraseña
                                <span class="required">*</span></label
                              >
                              <input
                                type="password"
                                name="password"
                                class="input-md form-full-width"
                                placeholder="Ingresa tu contraseña"
                                value=""
                                required=""
                                 v-model="loguerUser.password"
                              />
                            </div>
                            <div class="form-field-wrapper">
                             
                              <button
                                type="button"
                                class="submit btn btn-md btn-color"
                               @click="Loguer" >
                                Iniciar Sesión
                              </button>
                            </div>
                      
                        </div>
                        <!-- tab content -->
                      </div>
                      <div
                        class="tab-pane fade active show"
                        id="nav-singup"
                        role="tabpanel"
                        aria-labelledby="nav-singup-tab"
                      >
                        <!-- tab content -->
                        <div class="form-border-box">
                        
                            <h2 class="normal"><span>Crear Cuenta</span></h2>
                            <div class="form-field-wrapper ">
                              <label
                                >Nombres <span class="required">*</span></label
                              >
                              <input
                                type="text"
                                name="name"
                                class="input-md form-full-width"
                                placeholder="Ingresa nombres"
                                value=""
                                required=""
                                v-model="userregister.name"
                              />
                            </div>
                            <div class="form-row">                             
                            
                            </div>
                            <div class="form-field-wrapper ">
                              <label
                                >Correo electrónico
                                <span class="required">*</span></label
                              >
                              <input
                                type="email"
                                name="email"
                                class="input-md form-full-width"
                                placeholder="Ingresa tu correo electrónico"
                                
                                required=""
                                v-model="userregister.email"
                              />
                            </div>
                            <div class="form-field-wrapper ">
                              <label
                                >Contraseña
                                <span class="required">*</span></label
                              >
                              <input
                                type="password"
                                name="password"
                                class="input-md form-full-width"
                                placeholder="Ingresa tu contraseña"
                                
                                required=""
                                v-model="userregister.password"
                              />
                            </div>
                            
                            <div class="form-field-wrapper">                             
                              <button
                                type="button"
                                class="submit btn btn-md btn-color"
                                @click="RegisterUser" >
                                Registrarme
                              </button>
                            </div>
                          
                        </div>
                        <!-- tab content -->
                      </div>
                    </div>
                 
                  </div>
                  <div class="col-md-6">
                    <div class="checkout-order-review">
                      <h3>Resumen de tu Pedido</h3>
                      <div class="product-checkout-review-order">
                        <div class="responsive-table">
                          <table class="">
                            <thead>
                              <tr>
                                <th class="product-name">Producto</th>
                                <th class="product-total">Total</th>
                              </tr>
                            </thead>
                            <tbody
                              v-for="item in carrito"
                              :key="item.id_product"
                            >
                              <tr class="cart_item">
                                <td class="product-name">
                                  {{ item.Descripcion
                                  }}<strong> x {{ item.quantity }}</strong>
                                </td>
                                <td class="product-total">
                                  <span class="product-price-amount amount"
                                    ><span class="currency-sign">S/ </span
                                    >{{ parseFloat(item.total_price).toFixed(2) }}</span
                                  >
                                </td>
                              </tr>
                             
                            </tbody>

                            <tfoot>
                              <tr class="cart-subtotal">
                                <th>Subtotal</th>
                                <td>
                                  <strong
                                    ><span class="product-price-amount amount"
                                      ><span class="currency-sign">S/</span
                                      >{{ TotalPagar }}</span
                                    ></strong
                                  >
                                </td>
                              </tr>
                              <tr class="order-total">
                                <th>Total</th>
                                <td>
                                  <span class="product-price-amount amount"
                                    ><span class="currency-sign">S/ </span
                                    >{{ TotalPagar }}</span
                                  >
                                </td>
                              </tr>
                            </tfoot>
                          </table>
                        </div>
                      </div>               
                    </div>
                  </div>
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
import { mapState, mapGetters, mapActions } from "vuex";
import axios from "axios";
export default {
  data() {
    return {
      MiCarrito: [],
      CantidadTotal: 0,
      TotalPagar: 0,
      token_user:'',
      loguerUser:{
                email:'',
                password:'',
         },
      userregister:{   
                name:'',
                email:'',
                password:'',       
         },
      SendUser:{
        id_client:'',
        number_of_order:'1',
        subtotal:0,
        discount:0,
        delivery_cost:0,
        total:0,
        type_invoice:'1',
        shipping_method:'culqi',
        pickup_store:'foto',
        order_detail:[]
      }
    };
  },
  created (){
    this.calculate();
  },
  computed: {
     ...mapState(["url_base","carrito","canttotal","total"]),  
    token() {
      let user = window.localStorage.getItem("data");
      user = JSON.parse(user);  
      this.SendUser.id_client=user.id_client    
      return user.token;
    },
  },
  methods: {
   Confirmacion,
   RegisterUser,
   Loguer,
   Error,
   calculate
  }
}
function calculate(){
    this.TotalPagar = parseFloat(this.total);
   this.TotalPagar=this.TotalPagar.toFixed(2)
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
           me.Confirmacion("Bienvenido !")
         var resp={id_client:response.data.result.id_client, token: response.data.result.token,name:response.data.result.name,email:response.data.result.email}
         localStorage.setItem("data",JSON.stringify(resp))  
         me.$store.commit('changeStatus', true);         
         me.$store.commit('addNameUser', response.data.result.name);
         me.$store.commit('changeUrl', '/account/account');                        
         me.$router.push({path: '/account/Checkout'});
        } else if(response.data.status == 400){ 
           me.Error(response.data.response)}    
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
function Error(mensaje){
     this.$swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: mensaje, 
  })
}
function  Confirmacion(mensaje) {     
        this.$swal.fire(mensaje)
  }
</script>

<template>
  <div class="container">
    <section class="content-page">
      <div class="container-lg">
        <div class="row">
          <div class="col-md-8">
            <div class="post-8">
              <form class="cart-form" action="#" method="post">
                <div class="cart-product-table-wrap responsive-table">
                  <table class="table table-hover table-bordered">
                    <thead>
                      <tr>
                        <th width="10%" class="text-center"></th>
                        <th width="40%" class="text-center">Producto</th>
                        <th width="10%" class="text-center">Precio</th>
                        <th width="10%" class="text-center">Cantidad</th>
                        <th width="23%" class="text-center">Total</th>
                        <th width="8%" class="text-center">Acciones</th>
                      </tr>
                    </thead>
                    <tbody v-for="item in carrito" :key="item.id_product">
                      <tr>
                        <td class="text-left">
                          <img v-bind:src="url_base + item.photo" />
                        </td>
                        <td class="text-center">{{ item.Descripcion }}</td>
                        <td class="text-left">{{ parseFloat(item.unit_price).toFixed(2) }}</td>
                        <td class="text-left">{{ item.quantity }}</td>
                        <td class="text-left">{{ parseFloat(item.total_price).toFixed(2) }}</td>

                        <td class="text-left">
                          <button
                            class="remove_from_cart"
                            @click="DeleteItemCar(item.id_product)"
                            data-row="c19ab764adfb6ff21456444f658c8469"
                          >
                            <i
                              class="fa fa-times-circle "
                              aria-hidden="true"
                            ></i>
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </form>
            </div>
          </div>

          <div class="col-md-4">
            <div class="post-8">
              <div class="cart-collateral">
                <div class="cart_totals">
                  <h3 class="text-uppercase">Resumen de tu Pedido</h3>
                  <div class="responsive-table">
                    <table>
                      <tbody>
                        <tr class="cart-subtotal">
                          <th>Subtotal</th>
                          <td>
                            <span
                              class="product-price-amount amount text-nowrap"
                              ><span class="currency-sign">S/ </span
                              >{{ TotalPagar }}</span
                            >
                          </td>
                        </tr>                     
                        <tr class="order-total">
                          <th>Total</th>
                          <td>
                            <span
                              class="product-price-amount amount text-nowrap"
                              ><span class="currency-sign">S/ </span
                              >{{ TotalPagar }}</span
                            >
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div class="product-proceed-to-checkout">
                    
                    <NuxtLink v-if="isLoguer"  to="/account/Checkout"    class="btn btn-lg btn-color form-full-width mb-2">
                      Continuar con mi Pedido
                    </NuxtLink>

                    <NuxtLink  v-else to="/caja"    class="btn btn-lg btn-color form-full-width mb-2">
                      Continuar con mi Pedido
                    </NuxtLink>

                     <NuxtLink
                      to="/"                      
                    >
                    <a href="#" class="btn btn-lg btn-white form-full-width"
                      ><i class="fa fa-arrow-left"></i> Agregar más Productos</a
                    >
                      </NuxtLink>
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

import { mapState, mapGetters, mapActions } from 'vuex'
export default {
      data(){
        return{
            MiCarrito:[],
            CantidadTotal:0,
            TotalPagar:0,        
        }   
    },
    created (){
      this.calculate()
    },
    methods: {
        DeleteItemCar,
        calculate
    },
    computed: {    
         ...mapState(["url_base","carrito","canttotal","total"]),
          isLoguer(){
               return this.$store.state.userLoguer;  
          }
    },

}
function calculate(){
    this.TotalPagar = parseFloat(this.total);
   this.TotalPagar=this.TotalPagar.toFixed(2)
}
function DeleteItemCar(id){
   let data = { id_product: id };
    this.$store.commit('deletItemCart', data);  
    this.$store.commit('cantTotal', "1");
    this.$store.commit('total', "1");
}
</script>
<template>
  <section>
      <div :class="stylecolumn">
        <div class="product-item-inner">
            <div class="product-img-wrap">             
            <NuxtLink :to="{name: 'productos-id', params: {id: product.id_product}}" >
                    <img :src="url_base + product.photo" alt="212 VIP 80 ML EDP DAMA">
             </NuxtLink>
            </div>
            <span class="label_discount text-nowrap"> {{product.discount}}%OFF</span>
            <span class="label-stock stock_available text-nowrap">En stock</span>
        </div>
        <div class="product-detail d-flex flex-column flex-grow-1">
             <NuxtLink :to="{name: 'productos-id', params: {id: product.id_product}}" >
            <div class="height-produc-name">
                <p class="product-title product-line-clamp"><a href="#">{{product.name}}</a></p>
            </div>
            </NuxtLink>
            <div class="mt-auto">
                <div>
                    <a class="tag" href="#">{{product.category_name}}</a>
                    <div class="rg_productviews-list">🔥 11 personas están viendo este producto.</div>
                    <h5 class="item-price"><del>S/ {{product.regular_price}}</del> S/ {{product.sale_price}}</h5>
                </div>
                <div class="product-addtocart w-100 d-flex mt-auto pt-2 px-1">
                    <div class="count-input-box mr-1">
                        <div class="count-input-block">
                            <input class="form-control quantity_input" min="1" max="4" type="number" value="1"  @input="EventoImput">
                            
                        </div>
                    </div>
                    <button type="button" class="btn-add-to-cart add_to_cart d-flex align-items-center"    data-toggle="modal" data-target="#exampleModalCenter" data-qty="1" data-code="2" @click="AddCart(product.id_product,product.name,product.sale_price,product.photo)">
                        <span class="spinner-loading spinner-border spinner-border-sm d-none mr-2" role="status" aria-hidden="true"></span>
                        <img width="20px" class="p-icon-cart" :src="url_path + 'assets/img/icons/cart.svg'">
                        <span>Añadir al Carrito</span>
                    </button>
                </div>
            </div>
        </div>
    </div>
   
  </section>
  
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'

export default {
    props: ['product','stylecolumn'],
    components:{},
    data() {
        return{
            CantidadItem:1,
        }
    },
    computed: {
        ...mapState(["url_base","url_path"]),
    },
    methods: {
        AddCart,
        EventoImput,

    }
}
function  EventoImput(e){    
      this.CantidadItem=e.target.value;
  }
function AddCart(id,producto,precio,urlFoto) {
   
      var sub=this.CantidadItem *parseInt(precio)
      let data = {id_product:id,Descripcion:producto,unit_price:parseInt(precio),quantity:parseInt(this.CantidadItem),total_price:sub, photo:urlFoto,state:1}
      this.$store.commit('addCart', data);
      this.CantidadItem=1;
      this.$store.commit('showAddModal', true);
      this.$store.commit('cantTotal', "1");
      this.$store.commit('total', "1");
     
}
</script>

<style scoped>
.height-produc-name{
 height: 60px;
}
</style>
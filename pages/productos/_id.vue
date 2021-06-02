<template>
<div class="container">
<section class="content-page single-product-content">
    <!-- Product -->
    
    <div id="product-detail" class="container-lg">
        <div class="row">
            <!-- Product Image -->
            <div class="col-lg-6 col-md-6 col-sm-12 mb-30">
                <!-- i -->
                <div class="product-page-image">
                    <span class="label_discount_detail text-nowrap">10%OFF</span>
                    <span class="label-stock label-stock-detail stock_available text-nowrap">En stock</span>
                                        <!-- Slick Image Slider -->
                    <div class="product-image-slider product-image-gallery slick-initialized slick-slider" id="product-image-gallery" data-pswp-uid="1">
                        <div class="slick-list draggable" style="height: 540px;">
                          <div class="slick-track" style="opacity: 1; width: 540px;">
                            <div class="item slick-slide slick-current slick-active" data-slick-index="0" aria-hidden="false" style="width: 540px; position: relative; left: 0px; top: 0px; z-index: 999; opacity: 1;" tabindex="0">
                              <a class="product-gallery-item">
                                  <!--<img :src="url_base + product.photo" :alt="product.name">-->
                                 <inner-image-zoom :src="url_base + product.photo" :zoomSrc="url_base + product.photo" />
                              </a>
                            </div>
                          </div>
                        </div>
                    </div>

                </div>
                <!-- i -->

                <!-- Slick Thumb Slider -->
                <div class="product-image-slider-thumbnails d-none slick-initialized slick-slider" style="margin-left: -7px; margin-right: -7px;">
                    <div class="slick-list draggable"><div class="slick-track" style="opacity: 1; width: 0px; transform: translate3d(0px, 0px, 0px);"><div class="item slick-slide slick-current slick-active" data-slick-index="0" aria-hidden="false" style="width: 0px;" tabindex="0">
                        <img :src="url_base + product.photo" :alt="product.name">
                    </div></div></div>
                </div>
                <!-- End Slick Thumb Slider -->
            </div>
            <!-- End Product Image -->
                        <!-- Product Content -->
            <div class="col-lg-6 col-md-6 col-sm-12 mb-30">
                <div class="product-page-content">
                    <h2 class="product-title">{{product.name}}</h2>
                    <div class="product-price">
                        <del>S/ {{product.regular_price}}</del><span><span class="product-price-sign">S/ </span><span class="product-price-text">{{product.sale_price}}</span></span>
                    </div>
                    <p class="product-description">{{product.description}}</p>
                    <!-- add to cart -->
                
                        <div class="mb-3">En stock <strong>4</strong> Artículos</div>
                          <div class="product-quantity">
                              <span data-value="+" class="quantity-btn quantityPlus" @click="Plus"></span>
                              <input class="quantity input-lg" step="1" min="1" id="product_detail_quantity" name="quantity" v-model="CantidadItem" title="Quantity" type="number">
                              <span data-value="-" class="quantity-btn quantityMinus" @click="Minus"></span>
                          </div>                                                                                   
                          <button type="button" class="btn btn-black btn-cart-detail add_to_cart_detail"    data-toggle="modal" data-target="#exampleModalCenter" data-qty="1" data-code="2" @click="AddCart(product.id_product,product.name,product.sale_price,product.photo)">
                              <div class="d-flex align-items-center">
                                  <span class="spinner-loading spinner-border spinner-border-sm d-none mr-2" role="status" aria-hidden="true"></span>
                                  <img width="24px" class="p-icon-cart" :src="url_path + 'assets/img/icons/cart.svg'">
                                  <span class="ml-2">Añadir al Carrito</span>
                              </div>
                          </button>
                    
                    <!-- add to cart -->
                    <!-- t -->

                  
                    
                    <!-- t -->
                    <!-- meta -->
                    <div class="product-meta mt-3">
                        <span>SKU : <span class="sku" itemprop="sku">{{product.id_product}}</span></span>
                        <span>Categoría : <span class="category text-uppercase" itemprop="category">{{product.category_name}}</span></span>
                        <span>Marca : <span class="brand text-uppercase" itemprop="brand">{{product.brand_name}}</span></span>
                    </div>
                    <!-- meta -->
                    <!-- shared -->
                    <div class="product-share">
                        <span>Compartir :</span>
                        <ul>
                            <li><a href="" target="_blank"><i class="fa fa-facebook"></i></a></li>
                            <li><a href="" target="_blank"><i class="fa fa-twitter"></i></a></li>
                            <li><a href="" target="_blank"><i class="fa fa-instagram"></i></a></li>
                            <li><a href="https://wa.me/51981513145" target="_blank"><i class="fa fa-whatsapp"></i></a></li>
                        </ul>
                    </div>
                    <!-- shared -->
                    <!-- p -->
                    <div class="block-obj">
                        <div class="block-obj-item d-flex">
                            <div class="boitem-ico">
                                <img class="img-fluid" src="https://comprasentacna.com/assets/img/icons/ic_verified.webp">
                            </div>
                            <div>
                                <div class="boitem_title">Política de seguridad</div>
                                <div class="boitem_description">Altos estándares y tu información de contacto se mantiene estrictamente confidencial.</div>
                            </div>
                        </div>
                        <div class="block-obj-item d-flex">
                            <div class="boitem-ico">
                                <img class="img-fluid" src="https://comprasentacna.com/assets/img/icons/ic_local.webp">
                            </div>
                            <div>
                                <div class="boitem_title">Política de envío</div>
                                <div class="boitem_description">Despacho hasta 72hrs hábiles una vez que su pedido cambie a preparación en proceso.</div>
                            </div>
                        </div>
                        <div class="block-obj-item d-flex">
                            <div class="boitem-ico">
                                <img class="img-fluid" src="https://comprasentacna.com/assets/img/icons/ic_swap.webp">
                            </div>
                            <div>
                                <div class="boitem_title">Garantía de satisfacción</div>
                                <div class="boitem_description">Si el producto que compraste no te enamora, no te preocupes, puedes cambiarlo o devolverlo. <a href="https://comprasentacna.com/terminos-y-condiciones?#cyd" class="color-main font-500">(ver políticas de cambios y devoluciones)</a></div>
                            </div>
                        </div>
                    </div>
                    <!-- p -->
                </div>
            </div>
            <!-- Product Content -->
        </div>
        <!-- row -->
    </div>
    <!-- End Product -->

    <div id="reviews"></div>
 
    <div class="container product-carousel section-d-column">
        <div class="pb-5 text-center">
            <h2 class="page-title text-uppercase font-900">Productos Relacionados</h2>
        </div>        
        <div class="row">
            <div class="col-md-3" v-for="item in products_by_category" :key="item.id_product">              
              <InfoProduct :product="item" :stylecolumn="stylecolumn" />                   
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
import InnerImageZoom from 'vue-inner-image-zoom';
import 'vue-inner-image-zoom/lib/vue-inner-image-zoom.css';
import Modal from '@/components/Modal'


export default {
    components: {
        InfoProduct,        
        InnerImageZoom, 
        Modal
       
    },
    data() {
        return{ 
            product: {},
            products_by_category:[],
            CantidadItem:1,
            stylecolumn:'product-item d-flex flex-column h-100'
        }
    },
    mounted (){
      this.ViewProduct();
    },
    methods: {
        ViewProduct,
        ProductByCategory,
        AddCart,
        Plus,
        Minus
    },
    computed: {
        ...mapState(["url_base","url_path"]),
    },
    
}
function Plus(){
    this.CantidadItem++;
}
function Minus(){
    if  ( this.CantidadItem>1){
        this.CantidadItem--;
    }
 
}
function AddCart(id,producto,precio,urlFoto) {
   
      var sub=this.CantidadItem *parseInt(precio)
      let data = {id_product:id,Descripcion:producto,unit_price:parseInt(precio),quantity:this.CantidadItem,total_price:sub, photo:urlFoto,state:1}
      this.$store.commit('addCart', data);
      this.CantidadItem=1;
      this.$store.commit('showAddModal', true);
      this.$store.commit('cantTotal', "1");
      this.$store.commit('total', "1");
     
}

function ViewProduct() {
    let me = this;
    let url = this.url_base +"info-by-product/"+this.$route.params.id;
    axios({
        method: "GET",
        url: url,
        
    }).then(function (response) {    
           me.product = response.data.result;
           me.ProductByCategory();
    }).catch((error) => {
            console.log(error);
    });
}

function ProductByCategory() {
    let me = this;
    let url = this.url_base +"search-products-by-category/"+ this.product.id_category;
    axios({
        method: "GET",
        url: url,
        
    }).then(function (response) {    
           me.products_by_category = response.data.result;
    }).catch((error) => {
            console.log(error);
    });
}
</script>

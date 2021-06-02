<template>
    <div class="container">
<section class="content-page">
    <div class="container-lg">
        <div class="row">
            <div class="col-sm-12">
                <div class="post-8">

                        <div class="row">
                            <!-- col -->
                            <div class="col-sm-12 mb-3">
                                <div class="w-100 pb-3">
                                    <h3 class="m-0 font-900">Detalle del Pedido</h3>
                                </div>
                                <div class="table-responsive">
                                    <table class="table table-hover">
                                        <thead>
                                            <tr>
                                                <th scope="col">Item</th>
                                                <th scope="col">Producto</th>
                                                <th scope="col">Precio</th>
                                                <th scope="col">Cantidad</th>
                                                <th scope="col">Total</th>
                                            </tr>
                                        </thead>
                                        <tbody v-for="(item, index) in carrito" :key="item.id_product">
                                             <tr>
                                                <th scope="row">{{index+1}}</th>
                                                <td>{{ item.Descripcion }}</td>
                                                <td class="text-nowrap">S/ {{ parseFloat(item.unit_price).toFixed(2) }}</td>
                                                <td class="text-nowrap">{{ item.quantity }}</td>
                                                <td class="text-nowrap">S/ {{ parseFloat(item.total_price).toFixed(2)  }}</td>
                                            </tr>                                             
                                            </tbody>
                                    </table>
                                </div>
                            </div>
                            <!-- col -->
                            <div class="col-md-6">
                                <div class="w-100">
                                    <div class="mb-2">
                                        <h3 class="m-0 font-900">Tipo de entrega</h3>
                                        <p class="m-0">Selecciona cómo quieres recibir tu pedido:</p>
                                    </div>
                                    <!-- t -->
                                    <div class="row" id="tab_shoptions">
                                        <div class="col-sm-6 d-flex align-items-stretch my-2">
                                            <a :class="activetydomicilio"   @click="Domicilio">
                                                <svg xmlns="http://www.w3.org/2000/svg" class="shoption-item_icon" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                                    <circle cx="7" cy="17" r="2"></circle>
                                                    <circle cx="17" cy="17" r="2"></circle>
                                                    <path d="M5 17h-2v-11a1 1 0 0 1 1 -1h9v12m-4 0h6m4 0h2v-6h-8m0 -5h5l3 5"></path>
                                                </svg>
                                                <span class="shoption-item_name">Despacho a Domicilio</span>
                                            </a>
                                        </div>
                                        <div class="col-sm-6 d-flex align-items-stretch my-2">
                                            <a :class="activetytienda"    @click="Tienda">
                                                <svg xmlns="http://www.w3.org/2000/svg" class="shoption-item_icon" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                                    <line x1="3" y1="21" x2="21" y2="21"></line>
                                                    <path d="M3 7v1a3 3 0 0 0 6 0v-1m0 1a3 3 0 0 0 6 0v-1m0 1a3 3 0 0 0 6 0v-1h-18l2 -4h14l2 4"></path>
                                                    <path d="M5 21v-10.15"></path>
                                                    <path d="M19 21v-10.15"></path>
                                                    <path d="M9 21v-4a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v4"></path>
                                                </svg>
                                                <span class="shoption-item_name">Recojo a Tienda</span>
                                            </a>
                                        </div>
                                    </div>

                                    <div class="tab-content">
                                        <div v-if="tipo_envio" role="tabpanel">                                         
                                            <div class="py-3">
                                                <div class="w-100 mb-3">
                                                    <p class="m-0">Introduce tu dirección de envío. Enviamos en Tacna, Perú. Todos los campos son obligatorios a menos que estén expresamente marcados como opcionales.</p>
                                                </div>
                                                <div class="row">
                                                     <div class="form-field-wrapper form-center col-sm-12">
                                                        <label class="left">Tipo Comprobante <abbr class="form-required" title="Campo requerido">*</abbr></label>
                                                        <select name="ubigee" id="ubigee_shipping" class="input-md form-full-width" title="Seleccione un ubigeo" required=""  v-model="order.type_invoice_d">
                                                             <option value="">[ Seleccione un Comprobante ]</option>
                                                             <option v-for="item in type_invoice" :value="item.value" :key="item.value">{{ item.text }}</option>
                                                        </select>
                                                    </div>
                                                    <div class="form-field-wrapper form-center col-sm-12">
                                                        <label class="left">Ubicación <abbr class="form-required" title="Campo requerido">*</abbr></label>
                                                        <select name="ubigee" id="ubigee_shipping" class="input-md form-full-width" @change="CalculateTotal" title="Seleccione un ubigeo" required="" v-model="order.ubigee">
                                                            <option value="">[ Seleccione una ubicación ]</option>
                                                             <option v-for="item in location" :value="item.value" :key="item.value">{{ item.text }}</option>
                                                        </select>
                                                    </div>
                                                    <div class="form-field-wrapper form-center col-sm-12">
                                                        <label class="left">Dirección <abbr class="form-required" title="Campo requerido">*</abbr></label>
                                                        <input type="text" name="address" id="address" class="input-md form-full-width" title="Ingrese una dirección" v-model="order.address" placeholder="Ingresa una dirección" required="">
                                                    </div>
                                                    <div class="form-field-wrapper form-center col-sm-12">
                                                        <label class="left">Referencia <span>(opcional)</span></label>
                                                        <textarea name="reference" id="reference" class="input-md form-full-width" title="Ingrese una referencia" placeholder="Ingresa una referencia" rows="3" v-model="order.reference"  style="height: auto !important"></textarea>
                                                    </div>
                                                    <div class="form-field-wrapper form-center col-sm-12">
                                                        <label class="left">Teléfono <abbr class="form-required" title="Campo requerido">*</abbr></label>
                                                        <input type="text" name="phone" id="phone" class="input-md form-full-width" title="Ingrese un número de teléfono" v-model="order.phone"  placeholder="Ingresa un número de teléfono" required="">
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- c -->
                                        </div>

                                        <div v-else  role="tabpanel">
                                            <div class="w-100 py-3">
                                                <h5>Nuestras Tiendas</h5>
                                                <div class="store-itemc mb-2">
                                                    <div class="store-itemc_name">Aeropuerto Carlos Ciriani</div>
                                                    <div class="store-itemc_address">Tienda 6 - 7, Tacna - Perú</div>
                                                    <div class="store-itemc_phone">(052) 578214</div>
                                                </div>
                                                <div class="store-itemc">
                                                    <div class="store-itemc_name">Cercado de Tacna</div>
                                                    <div class="store-itemc_address">Av. San Martín 631 - 637, Tacna - Perú</div>
                                                    <div class="store-itemc_phone">(052) 578214</div>
                                                </div>
                                                   <div class="row mt-4">
                                                 <div class="form-field-wrapper form-center col-sm-12">
                                                        <label class="left">Tipo Comprobante <abbr class="form-required" title="Campo requerido">*</abbr></label>
                                                        <select name="ubigee" id="ubigee_shipping" class="input-md form-full-width" title="Seleccione un ubigeo" required="" v-model="order.type_invoice_t">
                                                            <option value="">[ Seleccione un comprobante ]</option>
                                                             <option v-for="item in type_invoice" :value="item.value" :key="item.value" > {{ item.text }} </option>
                                                        </select>
                                                    </div>
                                                    </div>
                                                <div class="row mt-4">
                                                    <div class="form-field-wrapper form-center col-sm-12">
                                                        <label class="left">Tiendas <abbr class="form-required" title="Campo requerido">*</abbr></label>
                                                        <select name="pickup_store" id="pickup_store" class="input-md form-full-width" v-model="order.pickup_store" title="Seleccione una tienda" required="">
                                                            <option value="">[ Seleccione una tienda ]</option>
                                                            <option v-for="item in establishment" :value="item.value" :key="item.value" > {{ item.text }} </option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>                                
                                </div>                                
                            </div>
                            <div class="col-md-6">
                                <div class="checkout-order-review">
                                    <h3>Resumen del Pedido</h3>
                                    <div class="product-checkout-review-order">
                                        <div class="responsive-table">
                                            <table class="table">
                                                <tfoot>
                                                    <tr class="cart-subtotal">
                                                        <th>Subtotal</th>
                                                        <td>
                                                            <strong><span class="product-price-amount amount text-nowrap"><span class="currency-sign">S/ </span>{{order.subtotal}}</span></strong>
                                                        </td>
                                                    </tr>
                                                 
                                                    <tr class="cart-subtotal">
                                                        <th>Despacho</th>
                                                        <td>
                                                            <strong><span class="product-price-amount amount text-nowrap"><span class="currency-sign">S/ </span><span id="data_order_shipping">{{order.delivery_cost}}</span></span></strong>
                                                        </td>
                                                    </tr>
                                                    <tr class="order-total">
                                                        <th>Total</th>
                                                        <td>
                                                            <span class="product-price-amount amount text-nowrap"><span class="currency-sign">S/ </span><span id="data_order_total">{{order.total}}</span></span>
                                                        </td>
                                                    </tr>
                                                </tfoot>
                                            </table>
                                        </div>
                                        <!-- mp -->
                                        <div class="w-100 box-payment mb-3">
                                            <h6>Forma de pago</h6>
                                            <div class="w-100">
                                                <div class="d-sm-flex align-items-center">
                                                    <div class="flex-grow-1 font-500">Tarjeta de crédito/débito</div>
                                                    <div><img class="img-fluid" src="https://comprasentacna.com/assets/img/icons/cards.png"></div>
                                                </div>
                                                <div class="py-2">Paga con tu tarjeta de crédito/débito a través de <strong>Culqi</strong></div>
                                            </div>
                                        </div>
                                        <!-- mp -->
                                        <div class="product-checkout-payment">
                                            <div class="place-order">
                                                <button type="button" id="btn-culqi-open" class="btn btn-lg btn-color form-full-width" @click="Validate">Pagar con Culqi</button>                                                                                      
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
import { mapState, mapGetters, mapActions } from 'vuex'
import axios from "axios";

export default {
    name:"checkout", 
    data() {
        return{ 

            type_invoice : [
                {value: '01', text:'Factura'},
                {value: '03', text:'Boleta'},
            ],
            location:[
                {value:"230110",text:"Tacna, Coronel Gregorio Albarracín Lanchipa : S/ 15.00"},
                {value:"230108",text:"Tacna, Tacna, Pocollay : S/ 15.00"},
                {value:"230104",text:"Tacna, Tacna, Ciudad Nueva : S/ 15.00"},
                {value:"230102",text:"Tacna, Tacna, Alto de la Alianza : S/ 15.00"},
                {value:"230101",text:"Tacna, Tacna, Tacna : S/ 10.00"} 
            ],
            establishment:[
                {value:"01",text:"Aeropuerto Carlos Ciriani"},
                {value:"02",text:"Cercado de Tacna"},    
            ],
            user:{
                
            },
            order:{

                id_client:'',                            
                phone:'', 
                ubigee:'',
                address:'',
                reference:'',

                number_of_order:'5',
                description:'',
                subtotal:0,
                discount:0,
                delivery_cost:0,
                total:0,
                type_invoice_d:'',
                type_invoice_t:'',
                shipping_method:1,
                pickup_store:'',
                order_detail:[],
                state:1,
                token:'',
            },







             CantidadTotal:0,
             TotalPagar:0,           
             token_user:'',
             token_culqi:'',
             activetydomicilio:'shoption-item active',
             activetytienda:'shoption-item',
             tipo_envio:true,
             ubicaciones:[],
             validaMensaje:[],
             itemdocumentos:[],
             establecimientos:[],
             establecimiento:'',
             referencia:'',
             valida: 0,
             infoUser:{
                id_client:'',                            
                phone:'', 
                country:'PE',
                ubigee:'',
                address:'',
                state:1 },
             SendUser:{
                id_client:'',
                number_of_order:'5',
                description:'descrition',
                subtotal:0,
                discount:0,
                delivery_cost:1.00,
                total:10.00,
                type_invoice:'',
                shipping_method:1,
                pickup_store:'',
                order_detail:[],
                state:1
            }
        }
    }, 
    created (){
        this.ViewClient();
        this.CalculateTotal();
    },
    mounted() {

    }, 
    computed: {
          ...mapState(["url_base","carrito","canttotal","total"]),       
          token() {
           let user = window.localStorage.getItem("data");
           user = JSON.parse(user);  
           return user.token;
        },
    },
    methods: {
        ViewClient,
        CalculateTotal,
        Validate,
        OpenCulqi,
        AddOrder,
        Domicilio,
        Tienda,
        Clean,
      
    
    }
}


function ViewClient() {
    let user = window.localStorage.getItem("data");
    user = JSON.parse(user);  
   

    let me = this;
    let url = this.url_base +"account/view-profile/"+user.id_client;
    axios({
        method: "get",
        url: url,
        headers: {"Content-Type":"application/json",token:me.token}        
    }).then(function (response) {    
           me.order.id_client = response.data.result.id_client;
           me.order.phone = response.data.result.phone;
           me.order.ubigee = response.data.result.ubigee;
           me.order.address = response.data.result.address;
    }).catch((error) => {
            console.log(error);
    });  
}

function CalculateTotal() {
    this.order.subtotal = parseFloat(this.total);

    if (this.order.shipping_method == 1) {
        switch (this.order.ubigee) {
            case "230110": this.order.delivery_cost = parseFloat(15); break;
            case "230108": this.order.delivery_cost = parseFloat(15); break;
            case "230104": this.order.delivery_cost = parseFloat(15); break;
            case "230102": this.order.delivery_cost = parseFloat(15); break;
            case "230101": this.order.delivery_cost = parseFloat(10); break;
            default: this.order.delivery_cost = parseFloat(0);  break;
        }
    } else {
        this.order.delivery_cost = parseFloat(0);
    }

    this.order.total = this.order.subtotal + this.order.delivery_cost;

    this.order.subtotal = this.order.subtotal.toFixed(2);
    this.order.delivery_cost = this.order.delivery_cost.toFixed(2);
    this.order.total = this.order.total.toFixed(2);
}

function Domicilio(){   
    this.tipo_envio=true;
    this.order.shipping_method =1;
    this.activetydomicilio='shoption-item active'
    this.activetytienda='shoption-item'
    this.CalculateTotal();
}
function Tienda(){
    this.tipo_envio=false;
    this.order.shipping_method =2;
    this.activetydomicilio='shoption-item '
    this.activetytienda='shoption-item active'
    this.CalculateTotal();
}

function Validate() {
    if (this.order.shipping_method == 1) {
        if (this.order.id_client.length == 0) {
            this.$swal.fire({title: '<strong>Ups</strong>', icon: 'info', html: 'Se requeire iniciar session', });
            return false;
        } 
        if (this.order.type_invoice_d.length == 0) {
            this.$swal.fire({title: '<strong>Ups</strong>', icon: 'info', html: 'Seleccione un tipo de comprobante', });
            return false;
        }
        if (this.order.ubigee.length == 0) {
            this.$swal.fire({title: '<strong>Ups</strong>', icon: 'info', html: 'Seleccione una ubicación', });
            return false;
        }
        if (this.order.address.length == 0) {
            this.$swal.fire({title: '<strong>Ups</strong>', icon: 'info', html: 'Ingrese una dirección', });
            return false;
        }
        if (this.order.phone.length == 0) {
            this.$swal.fire({title: '<strong>Ups</strong>', icon: 'info', html: 'Ingrese un teléfono', });
            return false;
        }
        
        if (this.order_detail == 0) {
            this.$swal.fire({title: '<strong>Ups</strong>', icon: 'info', html: 'Se requiere agregar productos a su carrito', });
            return false;
        }

        this.OpenCulqi();
    } else {
        if (this.order.type_invoice_t.length == 0) {
            this.$swal.fire({title: '<strong>Ups</strong>', icon: 'info', html: 'Seleccione un tipo de comprobante', });
            return false;
        } 

        if (this.order.pickup_store.length == 0) {
            this.$swal.fire({title: '<strong>Ups</strong>', icon: 'info', html: 'Seleccione un tienda', });
            return false;
        } 
        this.OpenCulqi();
    }

}

function OpenCulqi() {
    let me = this;
    Culqi.publicKey = 'pk_test_TyABKnTYn6DcMUaB';
    Culqi.options({
        lang: 'auto',
        modal: true,
        customButton: 'Pagar S/ '+me.total+' PEN',
        style: {
            maincolor: '#000000',
            buttontext: '#FFFFFF',
            maintext: '#0034CD',
            desctext: '#000000'
        }
    });
    Culqi.settings({
        title: 'DUTYFREE',
        currency: 'PEN',
        description: 'Pedido Online',
        amount: parseFloat(me.total)
    });
    Culqi.open();


    if (this.order.shipping_method == 1) {
        this.order.type_invoice = this.order.type_invoice_d;
    } else {
        this.order.type_invoice = this.order.type_invoice_t;
    }
    this.order.order_detail = me.carrito;
    let data = {
        order : this.order,
        url_base : this.url_base,
        token : this.token,
    }
    window.localStorage.setItem( "order",JSON.stringify(data));
    
}

function AddOrder(token) {
    let data_order = JSON.parse(localStorage.getItem("order"));


    let url = data_order.url_base +"account/order-add";
     let data = {
        order : data_order.order,
        token : token,
     }
    axios({
        method: "post",
        url: url,
        data: data,
        headers: {"Content-Type":"application/json",token:data_order.token}        
    }).then(function (response) {    
         if (response.data.status == 201) {
              //this.$swal.fire({title: 'Se ha realizado su pedido con exito', icon: 'success', html: '', });
              location.href = "http://localhost:3000/account/account";
         }
    }).catch((error) => {
            console.log(error);
    }); 
}



function Clean(){

  this.$store.commit("cleanCart", "0");
  this.$store.commit('cantTotal', "1");
  this.$store.commit('total', "1");
}


window.culqi = function() {    
    if (Culqi.token) {
        let token = Culqi.token.id;
        console.log(token)
        AddOrder(token);
    } else {
        console.log(Culqi.error);
    }
}


</script>


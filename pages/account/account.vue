<template>
  <div class="container">
    <div class="account-info">
      <div class="container-lg">
        <div class="row">
          <div
            class="col-12 col-sm-12 col-md-12 col-lg-4 px-0 d-flex align-items-stretch"
          >
            <div class="account-nav py-0 py-lg-5">
              <!-- nav -->
              <nav class="navbar navbar-expand-lg">
                <a class="navbar-brand d-block d-lg-none" href="#">Mi Cuenta</a>
                <button
                  class="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#0034CD"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <polyline points="10 15 15 20 20 15"></polyline>
                    <path d="M4 4h7a4 4 0 0 1 4 4v12"></path>
                  </svg>
                </button>
                <div
                  class="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul class="navbar-nav w-100 flex-column">
                    <li :class="active_panel">
                      <a
                        class="nav-link"
                        href="#"
                         @click="ViewPanel">Panel de control</a
                     >
                    </li>
                    <li :class="active_info">
                      <a
                        class="nav-link"
                        href="#"
                        @click="ViewInfo">Información de la cuenta</a
                      >
                    </li>
                    <li :class="active_order">
                      <a
                        class="nav-link"
                        href="#"
                         @click="ViewOrder">Mis pedidos</a
                      >
                    </li>                  
                    <li class="nav-item">
                      <a
                        class="nav-link"
                        href="#"                     
                        @click="SingOut">Cerrar sesión</a
                      >
                      <form
                        id="logout-form"
                        action="#"
                        method="POST"
                        style="display: none;"
                      >
                        <input
                          type="hidden"
                          name="_token"
                          value="cTUXp8W3kxpvDDmEcOAd4O3RK6g8YCqfF1zyQZ7x"
                        />
                      </form>
                    </li>
                  </ul>
                 
                </div>
             
              </nav>
                <!--  <p>{{infoUser}}</p>
               nav -->
            </div>
          </div>
        
              <div class="col-12 col-sm-12 col-md-12 col-lg-8 d-flex align-items-stretch">
                    <div class="my-account px-0 py-4 px-lg-4 py-lg-5">
                         
                  <div  v-if="showPanel">
                       <div class="account-dashboard">
                            <div class="welcome-message">
                                <p class="hello font-blockbe text-uppercase"><span>Hola, </span>{{infoUser.name}}</p>
                                <p>Desde <strong>Mi cuenta</strong> usted puede ver un resumen de sus actividades recientes y actualizar la información de su cuenta. Seleccione un enlace inferior para ver o editar su información.</p>
                            </div>
                            <div class="cards-menu">
                                <!-- card -->
                                <div class="card mb-4">
                                    <div class="card-header">
                                        <div class="d-flex align-items-center">
                                            <div class="flex-grow-1">
                                                <div>Información de Contacto</div>
                                            </div>
                                            <a href="#" class="btn-edit-icon">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path></svg>
                                            </a>
                                        </div>
                                    </div>
                                    <div class="card-body">
                                        <h5 class="card-title m-0 text-uppercase">{{infoUser.name}} </h5>
                                        <p class="card-text mb-3 text-lowercase">{{email}}</p>
                                        <a href="#" class="text-uppercase">Cambiar contraseña</a>
                                    </div>
                                </div>
                                <!-- card -->
                            </div>
                        </div>
                  </div>    
                  <div  v-if="showInfo">
                   <div class="account-dashboard">
                            <div class="account-dashboard-header mb-4">
                                <h3 class="dash-header-title font-blockbe">Editar la información de tu cuenta</h3>
                            </div>
                            <div class="w-100">
                            
                                    <div class="form-row">
                                        <div class="form-group col-md-6">
                                            <label>Tipo de documento</label>
                                            <select name="document_type" class="input-md form-full-width" required="" v-model="infoUser.document_type">
                                              <option v-for="item in itemTipoDocumento" :value="item.id" :key="item.id" >
                                                {{ item.valor }}
                                              </option>
                                            </select>
                                        </div>
                                        <div class="form-group col-md-6">
                                            <label class="form-label">Número de documento *</label>
                                            <input type="text" name="document_number" class="input-md form-full-width" v-model="infoUser.document_number" required="">
                                        </div>
                                    </div>
                                    <div class="form-row">
                                        <div class="form-group col-md-12">
                                            <label>Nombre(s) *</label>
                                            <input type="text" name="name" class="input-md form-full-width" value="juan carlos panty" v-model="infoUser.name" required="">
                                        </div>
                                    </div>
                                    <div class="form-row">
                                        <div class="form-group col-md-12">
                                            <label>Teléfono <span class="required">*</span></label>
                                            <input type="text" name="phone" class="input-md form-full-width" v-model="infoUser.phone" required="">
                                        </div>
                                    </div>
                                    <div class="form-row">
                                        <div class="form-group col-md-6">
                                            <label>Fecha de nacimiento <span class="required">(opcional)</span></label>
                                            <input type="date" name="date_of_birth" class="input-md form-full-width" value="2000-03-28" v-model="infoUser.date_of_birth">
                                        </div>
                                        <div class="form-group col-sm-6">
                                            <label>Género</label>
                                            <select name="gender" class="input-md form-full-width" required="" v-model="infoUser.sex">
                                               <option v-for="item in itemSexo" :value="item.id" :key="item.id" >
                                                 {{ item.valor }}
                                               </option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="form-row">
                                        <div class="form-group col-md-12">
                                            <label>Ubicación <span class="required">*</span></label>
                                            <select name="ubigee" class="input-md form-full-width" required="">
                                                <option value="">[ Seleccione una ubicación ]</option>
                                                <option value="230110">Tacna, Tacna, Coronel Gregorio Albarracín Lanchipa</option>
                                                <option value="230108">Tacna, Tacna, Pocollay</option>
                                                <option value="230104">Tacna, Tacna, Ciudad Nueva</option>
                                                <option value="230102">Tacna, Tacna, Alto de la Alianza</option>
                                                <option value="230101">Tacna, Tacna, Tacna</option>
                                            </select>
                                        </div>
                                        <div class="form-group col-md-12">
                                            <label>Dirección <span class="required">*</span></label>
                                            <input type="text" name="address" class="input-md form-full-width" v-model="infoUser.address" required="">
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label class="form-label">Correo electrónico</label>
                                        <input type="text" class="input-md form-full-width" value="jcarlossenati@gmail.com" style="background: #E7E7E7 !important" readonly="" disabled="">
                                    </div>
                                    <div class="form-group pt-4">                                     
                                        <button type="buuton" class="btn btn-md btn-color" @click="EditProfile">Guardar cambios</button>
                                    </div>                            
                            </div>
                        </div>
                 </div>
                 <div v-if="showOder">
                     <div class="account-dashboard">
                            <div class="account-dashboard-header mb-4">
                                <h3 class="dash-header-title font-blockbe">Mis Pedidos</h3>
                            </div>
                            <div class="w-100">
                                <div class="table-responsive">
                                    <table class="table table-striped bg-white">
                                        <thead>
                                            <tr>
                                                <th scope="col">Fecha</th>
                                                <th scope="col" class="text-center">Número</th>
                                                <th scope="col" class="text-center">Total</th>
                                                <th scope="col" class="text-center">Estado</th>
                                                <th scope="col" class="text-center"></th>
                                            </tr>
                                        </thead>
                                       <tbody v-for="item in itemOrder" :key="item.id">
                                             <tr>
                                              
                                                <td>{{ item.created_at }}</td>
                                                <td class="text-nowrap"> {{ item.number_of_order }}</td>
                                                <td class="text-nowrap">S/.{{ item.total }}</td>
                                                <td class="text-nowrap"> {{ item.state }}</td>
                                            </tr>                                             
                                            </tbody>
                                    </table>
                                </div>
                                <!-- pagination -->
                                <div class="text-center pagination-custom">
                                    
                                </div>
                                <!-- pagination -->
                            </div>
                        </div>
                 </div>   
                    </div>
                </div>
      
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState, mapGetters, mapActions } from 'vuex'
import axios from "axios";

export default {
    data() {
        return{ 
            active:'nav-item active',
            activeoff:'nav-item',
            itemTipoDocumento: [],
            itemUbicacion:[],
            itemOrder: [],
            itemSexo:[],
            showPanel:true,
            showInfo:false,
            showOder:false,
            showOrdeFail:false,
            email:'',
            infoUser:{
              id_client:'',
              name:'',
              document_type:'',
              document_number:'',
              phone:'',
              date_of_birth:'',
              sex:'',
              country:'PE',
              ubigee:'',
              address:'',
              state:1,

            }
        }
        
    },
    created (){       
        this.ViewPanel()
        this.Documentos()
        this.Sexos()
    },
     mounted() {
   
      if (localStorage.getItem("data")) {
         //alert("si entra")
           let user = window.localStorage.getItem("data");
           user = JSON.parse(user);  
           this.infoUser.id_client=user.id_client
           this.infoUser.name=user.name
           this.email=user.email
      }

   },
     computed: {
        ...mapState(["url_base"]),
        active_panel(){
               return this.$store.state.active_li.panel;  
        },
        active_info(){
               return this.$store.state.active_li.info;  
        },
        active_order(){
               return this.$store.state.active_li.order;  
        },
        token() {
           let user = window.localStorage.getItem("data");
           user = JSON.parse(user);             
           this.infoUser.id_client=user.id_client
           return user.token;
        },
    },
    methods: {
        ViewPanel,
        ViewInfo,
        ViewOrder,
        ViewOrderList,
        SingOut,
        ViewProfile,
        EditProfile,
        Documentos() {   
            var Tipo_Documento = 1;
            var nombreDocumento = "DNI";
            var Tipo_Documento2 = 2;
            var nombreDocumento2 = "RUC";
            this.itemTipoDocumento.push(
                { valor: nombreDocumento, id: Tipo_Documento },
                { valor: nombreDocumento2, id: Tipo_Documento2 }
            );
         },
         Sexos() {   
            var clave1 = 1;
            var valor1 = "Masculino";
            var clave2 = 2;
            var valor2 = "Femenino";
            this.itemSexo.push(
                { valor: valor1, id: clave1 },
                { valor: valor2, id: clave2 }
            );
         },
    }
}

function ViewPanel(){      
        this.showInfo=false
        this.showOder=false
        this.showPanel=true
        let data={panel:this.active,info:this.activeoff,order:this.activeoff}
        this.$store.commit('change_active', data);
}
function ViewInfo(){
        this.showPanel=false       
        this.showOder=false
         this.showInfo=true
        let data={panel:this.activeoff,info:this.active,order:this.activeoff}
        this.$store.commit('change_active', data);
        this.ViewProfile();
}
function ViewOrder(){    
        this.showPanel=false
        this.showInfo=false
        this.showOder=true
        let data={panel:this.activeoff,info:this.activeoff,order:this.active}
        this.$store.commit('change_active', data);
        this.ViewOrderList()
}
function ViewOrderList(){
      let me = this;
      let url = this.url_base + "account/order-list/"+me.infoUser.id_client;
      axios({
        method: "GET",
        url: url,
        headers: {"Content-Type":"application/json",token:me.token}   
      })
      .then(function(response) {
        if (response.data.status == 200) {
            me.itemOrder=response.data.result
        }
       
      })
      .catch(error => {
        console.log(error);
      });
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
function ViewProfile(){
     let me = this;
      let url = this.url_base + "account/view-profile/"+me.infoUser.id_client;
      axios({
        method: "GET",
        url: url,
        headers: {"Content-Type":"application/json",token:me.token}   
      })
      .then(function(response) {
       // console.log(response.data)
        me.infoUser=response.data.result
      })
      .catch(error => {
        console.log(error);
    });
}
function EditProfile(){
      let me = this;
      let url = this.url_base + "account/edit-profile/";
      me.infoUser.ubigee="Tacna, Cono Sur"
      axios({
        method: "POST",
        url: url,
        data:me.infoUser,
        headers: {"Content-Type":"application/json",token:me.token}   
      })
      .then(function(response) {
        console.log(response.data)
      })
      .catch(error => {
        console.log(error);
    });
}
</script>

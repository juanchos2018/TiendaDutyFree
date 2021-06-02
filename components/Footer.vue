<template>
    <div>
        <footer class="footer">
            <div class="w-100 pt-5 pb-4">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-3 col-md-12 col-sm-12 mb-sm-45">
                            <div class="footer-block about-us-block">
                                <img src="https://comprasentacna.com/assets/img/logo-white.png" class="img-fluid" alt="">
                                <p>DPG, es una empresa con más de 35 años de experiencia en la distribución y retail de las marcas de lujo más reconocidas a nivel mundial.</p>
                                <ul class="footer-social-icon list-none-ib">
                                    <li><a href="" target="_blank"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
                                    <li><a href="" target="_blank"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
                                    <li><a href="" target="_blank"><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
                                    <li><a><i class="fa fa-whatsapp" aria-hidden="true"></i></a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-lg-2 col-md-4 col-sm-6 mb-sm-45">
                            <div class="footer-block information-block">
                                <h6 class="text-uppercase">Información</h6>
                                <ul>
                                    <li><a>Sobre Nosotros</a></li>
                                    <li><a>Términos y Condiciones</a></li>
                                    <li><a>Política de Privacidad</a></li>
                                    <li><a>Preguntas Frecuentes</a></li>
                                    <li><a>Cambios y Devoluciones</a></li>
                                    <li><a>Contacte con Nosotros</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-lg-2 col-md-4 col-sm-6 mb-sm-45">
                            <div class="footer-block links-block">
                                <h6 class="text-uppercase">Enlaces</h6>
                                <ul>
                                     <li><NuxtLink to="/account">Iniciar Sesión</NuxtLink></li>
                                     <li> <NuxtLink to="/account/registrar">Regístrate</NuxtLink></li>
                                    <li><NuxtLink to="/marcas"><a>Marcas</a></NuxtLink></li>
                                    <li><NuxtLink to="/tiendas"> <a>Nuestra Tienda</a></NuxtLink></li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-lg-2 col-md-4 col-sm-6 mb-sm-45">
                            <div class="footer-block extra-block">
                                <h6 class="text-uppercase">Productos</h6>
                                <ul>
                                   <li v-for="item in categories" :key="item.id_category"  >
                                   <NuxtLink :to="{name: 'productAll', params: {id: item.id_category,category:item.name}}"> 
                                       <a>{{ item.name }}</a></NuxtLink>   
                                   </li>                                   
                                </ul>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-12 col-sm-6">
                            <div class="footer-block contact-block">
                                <h6 class="text-uppercase">Contacto</h6>
                                <ul>
                                    <li><i class="fa fa-map-marker" aria-hidden="true"></i>Aeropuerto Carlos Ciriani<br> Tienda 6 - 7, Tacna - Perú</li>
                                    <li><i class="fa fa-envelope" aria-hidden="true"></i><a href="mailto:ventas@dpgdutyfree.com">ventas@dpgdutyfree.com</a></li>
                                    <li><i class="fa fa-phone" aria-hidden="true"></i><a href="tel:052578214">(052) 578214</a></li>
                                    <li><i class="fa fa-whatsapp" aria-hidden="true"></i><a href="https://wa.me/51981513145" target="_blank">51 981513145</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="text-center py-3">
                <img width="60px" class="img-fluid m-2" src="https://comprasentacna.com/assets/img/icons/visa-logo-b.svg" alt="Visa">
                <img width="60px" class="img-fluid m-2" src="https://comprasentacna.com/assets/img/icons/mastercard-logo-w.svg" alt="Mastercard">
                <img width="60px" class="img-fluid m-2" src="https://comprasentacna.com/assets/img/icons/americanexpress-logo-b.svg" alt="American Express">
                <img width="60px" class="img-fluid m-2" src="https://comprasentacna.com/assets/img/icons/diners-logo-b.svg" alt="Diners Club">
            </div>
            <div class="text-center py-2">
                <ul class="footer-links-bottom">
                    <li><a>Términos y Condiciones</a></li>
                    <li><a>Política de Privacidad</a></li>
                    <li><a>Libro de Reclamaciones</a></li>
                </ul>
            </div>
            <div class="py-1">
                <div class="container">
                    <div class="copyrights">
                        <p class="copyright">© 2021 - DPG Duty Free.</p>
                    </div>
                </div>
            </div>
        </footer> 
    </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";
import axios from "axios";
export default {
    name: 'footerapp',
    data() {
    return {
      categories: []
    };
  },
  computed: {
    ...mapState(["url_base"])
  },
  methods: {
    ListCategories,
    
  },
  mounted() {
    this.ListCategories();
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
</script>

<style>

</style>
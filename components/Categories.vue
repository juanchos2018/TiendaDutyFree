<template>
  <div>
    <div
      class="section-padding container-fluid bg-image bg-position-cc text-center overlay-light90">
      <div class="container-lg">
        <div class="mb-5 text-center">
          <h2 class="page-title font-900 text-uppercase mb-2">
            Nuestras Categorías
          </h2>
          <a href="#" class="section__more-link text-center text-uppercase"
            >Ver Más
            <svg
              class="icon--tail-right"
              width="16px"
              height="16px"
              viewBox="0 0 24 24"
              role="presentation"
            >
              <path
                fill="currentColor"
                d="M22.707 11.293L15 3.586 13.586 5l6 6H2c-.553 0-1 .448-1 1s.447 1 1 1h17.586l-6 6L15 20.414l7.707-7.707c.391-.391.391-1.023 0-1.414z"
              ></path></svg
          ></a>
        </div>
      </div>
    </div>

    <swiper
      ref="{swiperRef}"
      :slidesPerView="4"
      :spaceBetween="10"
      :pagination="{
        type: 'fraction'
      }"
      :navigation="true"
      class="swiper-container"
    >
      <div v-for="item in categories" :key="item.id_category">
        <swiper-slide >
          <div class="" style="width: 280px; margin-right: 20px;">
            <NuxtLink :to="{name: 'productAll', params: {id: item.id_category,category:item.name}}" >    
            <div class="">
              <div class="product-item-inner">
                <div class="product-img-wrap">
                  <div>
                    <img v-bind:src="url_base + item.photo" />
                  </div>
                </div>
              </div>
              <div class="product-detail d-flex flex-column flex-grow-1">
                <div class="mt-auto">
                  <div>                   
                    <h6 class="text-uppercase">{{ item.name }}</h6>
                  </div>
                </div>
              </div>
            </div>
           </NuxtLink>
          </div>
        </swiper-slide>
      </div>
    </swiper>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";
import axios from "axios";

import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/swiper-bundle.css'
import "swiper/components/pagination/pagination.min.css"
import "swiper/components/navigation/navigation.min.css"

export default {
   components: { 
     Swiper,
    SwiperSlide},    
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
};

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

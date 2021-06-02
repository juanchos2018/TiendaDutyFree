<template>
  <div> 

    <swiper :navigation="true" class="mySwiper">
  <swiper-slide v-for="item in portadas" :key="item.key">
     

      <img :src="url_base+item.photo" alt="">
  </swiper-slide>


  </swiper>
  </div>
</template>


<script>
import { mapState, mapGetters, mapActions } from 'vuex'
import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
import 'swiper/swiper-bundle.css'
import "swiper/components/pagination/pagination.min.css"
import "swiper/components/navigation/navigation.min.css"
import axios from  'axios';
export default {
     components: {
        Swiper,
        SwiperSlide
    },
    data(){
       return{
        portadas:[]
        }
    },
    mounted() {
        this.ListPortadas()
    },
     computed: {
        ...mapState(["url_base"]),
    },
    methods: {
        ListPortadas,
    }

}

 function ListPortadas(){
          let me = this;
          let url =this.url_base + "active-cover-page";      
      
          var listallena =[];
          axios({
              method: "GET",
              url: url,              
          }).then(function (response) {          
                me.portadas=response.data.result;                  
                   
              })
            .catch((error) => {
            
              console.log(error)
          
            });
      }
</script>
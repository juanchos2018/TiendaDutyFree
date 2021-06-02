<template>
    <div >    
    <div class="modal fade " id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-sm" role="document">
        <div class="modal-content">
        <div class="modal-header">        
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
        </div>      
        <div class="modal-body">
            <i class="fa fa-check"></i>
            <p class="modal-product-added-message">Producto agregado<br> al Carrito</p>
            <div class="modal-product-added-actions">           
                   <NuxtLink :to="{name: 'carrito', }"  data-dismiss="modal">
                          <a href="#" class="btn btn-added">Ir al Carrito</a>
                   </NuxtLink>              
                   <NuxtLink v-if="isLoguer"  to="/account/Checkout"  data-dismiss="modal">
                            <a href="#" class="btn btn-added-dark">Pasar por Cajas</a>
                   </NuxtLink> 
                   <NuxtLink v-else :to="{name: 'caja', }"  data-dismiss="modal">
                            <a href="#" class="btn btn-added-dark">Pasar por Caja</a>
                    </NuxtLink> 
                <a href="#" onclick="return false" data-dismiss="modal" class="btn-added-light">Seguir comprando</a>
            </div>
        </div>      
        </div>
    </div>
    </div>
  </div>
</template>
<script>
export default {
     data () {
		return {				
		}
	 },
     created (){         
     },
     methods: {	 
	  },
     computed: {			
        isLoguer(){
             return this.$store.state.userLoguer;  
       }
	}
}
</script>

<style >

</style>


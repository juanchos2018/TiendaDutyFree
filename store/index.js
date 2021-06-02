//state
export const state = () => ({
    varieties: [],
    loadingVarieties: true,
    url_base: 'https://dev.sertaads.com/api/',
    url_path: 'http://localhost:3000/',
    carrito: [],
    search_product:'',
    total:0, 
    canttotal:0,
    userLoguer:false,
    nameUser:'',
    urlaccount:'/account',
    active_li:{
      panel:'nav-item active',
      info:'nav-item',
      order:'nav-item'
    },
    systemInfo: {
      openLoginModal: false,
      openSignupModal: false,
      openCheckoutModal: false,
      openAddProductoModal:false
    },
})

//mutations
export const mutations = {
    setVarieties(state, payload) {
        state.varieties = payload
    },
    setLoadingVarieties(state, payload) {
        state.loadingVarieties = payload
    },
    showAddModal:(state,show)=>{
      state.systemInfo.openAddProductoModal=show;
    },
    setSearhProduct:(state,name)=>{
      state.search_product = name;
    },
    clearSearhProct:(state,name)=>{
      state.search_product = "";
    },
    addCart (state, data) {    
        var co='';
        var exite=false;
        for (let i = 0; i <state.carrito.length; i++) {
          if (state.carrito[i].id_product==data.id_product) {
             exite=true;
             co=state.carrito[i].id_product;                 
             break;
          }  
        }
        if(exite==true){
          let objIndex = state.carrito.findIndex(obj=> obj.id_product == co);
          state.carrito[objIndex].quantity =state.carrito[objIndex].quantity +data.quantity;
          state.carrito[objIndex].total_price=state.carrito[objIndex].total_price*state.carrito[objIndex].quantity;
    
        }else{
          state.carrito.push({
            id_product: data.id_product,
            Descripcion: data.Descripcion,
            unit_price: data.unit_price,
            quantity: data.quantity,
            total_price: data.total_price,
            photo: data.photo,
            state:data.state
        
          })
        }   
       
      },
     deletItemCart:(state,data)=>{
        state.carrito = state.carrito.filter(book => book.id_product !== data.id_product)
      },
     total:(state,data)=>{
        state.total=state.carrito.reduce((acc, item) => acc + parseInt(item.total_price),0);        
      },
      cantTotal:(state,data)=>{
        state.canttotal=state.carrito.reduce((acc, item) => acc + parseInt(item.quantity), 0);
      },
     
     cleanCart:(state,data)=>{
        state.carrito=[]
      },
      changeStatus:(state,data)=>{
        state.userLoguer=data
      },
      addNameUser:(state,data)=>{
        state.nameUser=data
      },
      changeUrl:(state,data)=>{
        state.urlaccount=data
      },
      
     change_active:(state,data)=>{
        state.active_li =  data
      },
     saveToken:(state,data)=>{      
        localStorage.setItem("data", data)   
      }
}

//actions
export const actions = {
    async varieties ({ commit }) {
        const response = await this.$axios.get('variety_products')
        commit('setVarieties', response.data.result)
        commit('setLoadingVarieties', false)
    },
    saveToken({commit},data){      
      localStorage.setItem("data", data)   
    }
}

//getters
export const getters = {
    varieties (state) {
        return state.varieties
    },
    isAddModalOpen:state => {
      return state.systemInfo.openAddProductoModal;
    },
}
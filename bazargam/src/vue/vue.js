const  app =Vue.createApp({
    //deta,function,template 
    data(){
        return{
           title:"boof koor",
           author:"Elmira",
           age:100,
           show:true
        }
    }, 
    
        methods : {
            dec(){
                this.age--         
             },
             changeTitle(title){
                this.title=title

             },
             hide(){
                this.show=!this.show
             }

        }
    
})
app.mount("#app")
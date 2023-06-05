const  app =Vue.createApp({
    //deta,function,template 
    data(){
        return{
           url: "https://www.google.com",
           x:0,
           y:0,
           title:"boof koor",
           author:"Elmira",
           age:100,
           show:true,
           books:[
            {title:"at",author:"au",Image:"1.jpeg",isfav:false},
            {title:"bt",author:"bu",Image:"2.jpeg",isfav:true},
            {title:"ct",author:"cu",Image:"3.jpeg",isfav:true},
           ]
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
             },
             handleEvent(e){
               console.log(e);
             },
             handleMouseMove(e){
               this.x= e.offsetX
               this.y= e.offsetY
             },
             Cang(book){
              book.isfav=!book.isfav
              
             }

        }
    
})
app.mount("#app")
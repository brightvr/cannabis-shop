$(window).on('load',function(){


       //libros

       fetch('data/cultura.json')
       .then(res=>res.json())
       .then(data=>{
   
           for(let i=0;i<data.length;i++){
   
               $('.cont-libros').append(`
               
               <div class="card m-3" style="width: 19rem;">
               <img src="${data[i].portada}" class="card-img-top" alt="...">
               <div class="card-body">
                 <h5 class="card-title">${data[i].titulo}</h5>
                 <a href="${data[i].link}" class="btn btn-success btn-block"><h5>Ver más</h5></a>
               </div>
             </div>
   
         </div>
               
               `)
           }
       })

})
$(window).on('load',function(){
/*
phone
"0 0 1190.4 445.86 

//destop
0 0 1505.4 445.86
*/
    fetch('data/productos-index.json')
    .then(res=>res.json())
    .then(data=>{

        console.log(data);

        $('.productos').prepend(`
        <br>
        <p class="p-2 texto-productos">Productos Cannabicos de excelente calidad,
        encuentra lo mejor en pipas, bongs, encendedores, vaporizadores y mucho mas...
        </p>
        <br>
        `)

        for(let i=0;i<data.length;i++){

            $('.productos').append(`

            <div class="card m-3" style="width: 21rem;">
            <img src="${data[i].imagen}" class="card-img-top" alt="...">
            <div class="card-body">
              <h4 class="card-title">${data[i].titulo}</h4>
              <p class="card-text">${data[i].descripcion}</p>
              <a href="catalogo.html" class="btn btn-success btn-block"><h5>Ver más</h5></a>
            </div>
          </div>
            
            `);
        }
        $('.productos').append(`

        <div class="card m-3" style="width: 21rem;">
            <img src="assets/img/all.jpg" class="card-img-top" alt="...">
            <div class="card-body">
                <p class="card-text">Conoce todos nuestros productos</p>
                <hr>
                <a href="catalogo.html" class="btn btn-success btn-block"><h2>Ver más</h2></a>
            </div>
        </div>

        `);
    });

    $('.pagos').on('click',function(){

        console.log('click');

        $('body').prepend(`

        <div class="info-pagos alert alert-success">
        
        <span class="cerrar" style="font-size:40px; color:red;"><i class="fas fa-window-close" style=" box-shadow:5px 5px 3px black"></i></span>
        <br>
        <div class="mis-pagos">

        <div class="alert alert-primary d-flex justify-content-center">
            Pagos protegidos y procesados por mercado pago, cuando vayas a comprar simplemente dile al asesor el metodo por el cual deseas pagar
        </div>
        <br>

            <div class="alert alert-danger d-flex justify-content-center">
            Contraentrega (Bogotá, Cundinamarca) <h1><i class="fas fa-motorcycle"></i></h1>
            </div>
            <br>
            <div class="alert alert-danger  d-flex justify-content-center">
             <img src="assets/img/efecty-logo.png" style="width:100px;">
            </div>
            <br>
            <div class="alert alert-danger  d-flex justify-content-center">
             <img src="assets/img/Baloto-logo.png" style="width:150px;">
            </div>
            <br>
            <div class="alert alert-danger  d-flex justify-content-center">
             Tarjetas de credito <h3><i class="fab fa-cc-mastercard"></i> <i class="fab fa-cc-visa"></i> <i class="fab fa-cc-amex"></i> <i class="fab fa-cc-discover"></i></h3>
            </div>
            <br>
            <div class="alert alert-danger  d-flex justify-content-center">
                <img src="assets/img/logo-pse.png" style="width:100px">
            </div>
            <br>
            <div class="alert alert-danger  d-flex justify-content-center">
             Tarjetas debito <h3><i class="far fa-credit-card"></i></h3>
            </div>
            <br>
            <div class="alert alert-danger  d-flex justify-content-center">
            <img src="assets/img/nequi-logo.png" style="width:150px;">
           </div>
           <br>
           <div class="alert alert-danger  d-flex justify-content-center">
           <img src="assets/img/daviplata-logo.png" style="width:150px;">
          </div>
            
        
        </div>
        </div>



        `);



        $('.cerrar').on('click',function(){

            $('.info-pagos').remove();
        });



    });

    $('.envios').on('click',function(){

        $('body').prepend(`

        <div class="info-pagos alert alert-success">
        
        <span class="cerrar" style="font-size:40px; color:red;"><i class="fas fa-window-close" style=" box-shadow:5px 5px 3px black"></i></span>
        <br>
        <div class="alert alert-danger d-flex justify-content-center">
          Puedes recoger tus productos directamente en nuestras bodegas, cuando estes realizando tu compra pidele al asesor  la ubicación
        </div>
        <br>
        
        <div class="alert alert-danger">
        <div><strong>Para pagos contraentrega en Bogotá y Cundinamarca</strong></div><br>
        <img src="assets/img/envios orion negro.png" style="width:200px">
        </div>
        <br>
        <div class="alert alert-danger d-flex justify-content-center">
        <img src="assets/img/LOGO-INTERRAPIDISIMO.png" style="width:200px">
        </div>
        </div>`
        );


        
        $('.cerrar').on('click',function(){

            $('.info-pagos').remove();
        });



    });



    $('.garantia').on('click',function(){

        $('body').prepend(`

        <div class="info-pagos alert alert-success">
        
        <span class="cerrar" style="font-size:40px; color:red;"><i class="fas fa-window-close" style=" box-shadow:5px 5px 3px black"></i></span>
        <br>
        <div class="alert alert-danger ">
         <h2><strong>1.0.PAGOS</strong></h2>
         <br>
         <p> 
         Todos los subdominios pertenecientes al dominio portalorion.store funcionan como aplicaciones frontend desarrolladas
          por la empresa Bright S.A.S. dichas aplicaciones  se conectan a los servicios prestados por las empresas 
          Paypal PayU, mercado libre, mercado pago  y otras, en ningun momento la empresa  Bright S.A.S. afirma tener algun tipo de
          relacion con dichas empresas.
         </p>
         <p>
         Todos los subdominios de portalorion.store ofrecen links, pasarelas y metodos 
         de pago que desarrollaron diferentes empresas como mercado pago, PayU y otras , la empresa BRIGHT S.A.S. y su servicio 
         de subdominios pertenecientes protalorion.store no procesa pagos ni presta algun tipo de servicio financiero
         </p>
         <p>
         La empresa Bright S.A.S. da garantía sobre los pagos realizados atravez 
         de links y pasarelas de pago pertenecientes a los subdominos de de portalorion.store
         </p>
         <h3><strong>1.1. CANNABIS SHOP</strong></h3>
         <p>
         Para el caso puntual del subdominio cannabisshop.portalorion.store, la empresa BRIGHT S.A.S 
         solo da soporte y garantia para los link de pago creados por o para el respresntante legal de cannabis shop
         </p>
         <p>
         La empresa BRIGHT S.A.S 
         solo da soporte y garantia para los link de pago distruibuidos por :<br>

         <strong>Numeros de whatsapp : </strong><br>
         -3228873812(ventas)<br>
         -3508327730 (soporte de garantias y devoluciones)<br>

         <strong>Cuentas de facebook :</strong><br>
         -<a href="https://www.facebook.com/TiendasOrion01">Cannabis shop</a><br>
         -<a href="https://www.facebook.com/PortalOrion1">Portal Orion</a><br>
         -Tambien se incluyen las cuentas de instagram asociadas directamente a las paginas de facebook
         </p>
         <img>
         La garantia de devolucion de dinero, solo esta disponible por defectos de fabrica de los productos
         o demoras de mas 24 horas posteriores a la fehca de entrega pactada 
          en los envios realizados unica y excluisvamente a traves
           de envios orion <img src="assets/img/envios orion negro.png" style="width:80px;">
         </p>
         <p>
         El servicio para ecommerces y comerciantes denominado <a href="#">Portal Orion</a>
         ofrece garantia y seguridad en los pagos realizados en el dominio
         portalorion.store y sus subdominios, siempre y cuando cumpla con los terminios y condiciones
         de Portal Orion y sus subdominios
         </p>

        </div>
        <br>
        
        <div class="alert alert-danger">
            <h2><strong>2.0.ENVIOS</strong></h2>

            <br>
            <h3><strong>2.1. ENVIOS EN BOGOTÁ Y CUNDINAMARCA</strong></h3>
            <p>Los envios de productos de las <a href="#">tiendas oficiales</a> de Portal Orion
            para la ciudad de Bogotá y municipios de Cundinamarca 
            son realizados por <a href="#">Envios Orion</a> siendo esta una solucion de mensajeria
            diseñada e implementada por la empresa Bright S.A.S.
            </p>
            <p>
                Si un envio realizado a traves de <a href="#">Envios Orion</a> tiene una demora de mas de
                24 horas posteriores a la fecha y hora de entrega pactada el cliente tiene la opcion de pedir 
                la devolucion del dinero
            </p>
            <p>
                El servicio prestado por Envios Orion a las tiendas oficiales 
                es un servicio puerta a puerta que incluye pago contraentrega y esta
                sujeto a las politica, <a href="#">terminos y condiciones</a> de Envios Orion
            </p>

        
            <h3><strong>2.2. ENVIOS EN TODO COLOMBIA</strong></h3>
            <p>
                Los envios para el resto de Colombia se realizan
                a traves de la empresa de transporte y mensajeria <a href="#">Interrapidisimo</a>
            </p>
            <p>
            La empresa Birght S.A.S. y sus servicios Portal Orion y Envios Orion
            no se hacen responsables por demoras en los envios realizados por medio de interrapidisimo
            </p>
            <p>
            La devolucion del dinero por demora en la entrega de los envios no aplica para cualquier envio realizado
            por medio de interrapidisimo
            </p>
        </div>
        <br>
        <div class="alert alert-danger ">
       <h2><strong>3.0.Productos</strong></h2>
       <p>
        La marca Cannabis Shop y su representante legal se hacen responsables por la calidad de los productos
        y su correcto despacho 
       </p>
       <p>
       La  marca Cannabis Shop pertenece a las tiendas oficiales de <a href="#">Portal Orion</a> esto indica que 
       Cannabis Shop debe cumplir con los <a href="#">terminos y condiciones</a> de Portal Orion que incluyen garantias 
       por defectos de fabrica y devoluciones de dinero por publicidad engañosa 
       </p>
       <p>
            Los clientes de cannabis shop podran pedir devolucion de dinero en dos casos especificos:<br>
            -Publicidad engañosa por parte de la marca cannabis shop<br>
            -Productos en mal estado<br>
       </p>
       <p>
            Los clientes de cannabis shop podran pedir cambio de producto en un casos especificos:<br>
            -Defectos de fabrica del producto <br>
            
         </p>
         <p>
         La solocion para ecommerces y comerciantes <a href="#">Portal Orion</a>
         ofrece garantia  de  10 días por defectos de fabrica de los productos ofertados por la marca Cannabis Shop
         </p>
        </div>
        </div>`
        );


        
        $('.cerrar').on('click',function(){

            $('.info-pagos').remove();
        });



    });




    //libros

    fetch('data/libros-index.json')
    .then(res=>res.json())
    .then(data=>{

        for(let i=0;i<data.length;i++){

            $('.libro').append(`
            
            <div class="card m-3" style="width: 19rem;">
            <img src="${data[i].portada}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${data[i].titulo}</h5>
              <a href="cultura.html" class="btn btn-success btn-block"><h5>Ver más</h5></a>
            </div>
          </div>

      </div>
            
            `)
        }
    })
})
/*ejemplo pregunta 1*/

function getNombres(cb =() =>{}){
    setTimeout(function(){
        const nombres = ['Maria','Juan','Edimir','Marcos','Marcos'];
        cb(nombres);
    }, 1000);
}

getNombres(function(nombres){
    console.log('nombres', nombres);
});

/*ejemplo 2 */
getNombres = new Promise (function(resolve, reject){
 return setTimeout(function() {
     const nombre = ["jose","maria","juan carlos"];
     resolve(nombre);
 }, 1000);
});

getNombres = new Promise (function(resolve, reject){
    return setTimeout(function(){
        const nombre = ["jose","maria","juan carlos"];
        reject(nombre);
    }, 1000);
   });

   /*ejemplo 3 */

   function getNombres(cb = () =>{}){
    setTimeout(function(){
        const nombres = ['Maria','Juan','Edimir','Marcos','Marcos'];
        cb(nombres);
    }, 1000);
}

function getCuentas(cb = () =>{}){
    setTimeout(function(){
        const cuentas = ['001','010','020','1520','152'];
        cb(cuentas);
    }, 1000);
}

function getPadres(cb = () =>{}){
    setTimeout(function(){
        const cuentas = ['Maria','Juan','Edimir','Marcos','Marcos'];
        cb(nombres);
    }, 1000);
}

getNombres(function(nombres){
    console.log("nombres", nombres);
    getCuentas(function(cuentas){
        console.log("nombres", cuentas);
        getPadres(function(padres){
            console.log("nombres", padres);
        });
    });
});
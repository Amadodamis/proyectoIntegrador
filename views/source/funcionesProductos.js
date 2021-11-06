const funcionesProductos={
    precioConOferta:function precioConOfertaf(precioAct,porcentaje,oferta){
                    let precioNuevo=precioAct; //para evitar errores.
    
                    if (oferta){
                        precioNuevo=(precioAct-(precioAct/100)*porcentaje);
                        }

                    return precioNuevo;
    },

    interesCuota:function interesCuota(hayInteres,precio,cuotas){
                let precioNuevo;
                if (hayInteres==false){
                    return precio;
                    }

                if (cuotas==0) {
                    return precio;

                }else if (cuotas==3){
                 //interes 3%
                    precioNuevo= (precio+((precio/100)*3));
                    return precioNuevo;
                }else if(cuotas==6){
                //interes 3.7
                    precioNuevo= (precio+((precio/100)*3.7));
                    return precioNuevo;
                }else if (cuotas==12){
                //interes 5.5
                    precioNuevo= (precio+((precio/100)*5.5));
                    return precioNuevo;
                }else{
                //interes 5.5+ 0.3% por cada cuota 
                    let interes=5.5+((cuotas-12)*0.3);
                    precioNuevo= (precio+((precio/100)*interes));
                    return precioNuevo;
                }
                //devuelve el precio con el porcentaje de interes
    },

    productosOfertaFunction:function productosOfertaFunction (arrayProductos){ 
                            let array=[];
                            let maxActualOferta=0;
                            let indice=0;              //indice es el valor que va a guardar la posicion del valor de oferta mas alto en la iteracion
                            let contador=0;            //contador va a iterar dentro del forEach
                            let indiceRepetido=[];     
    
                            for (let i = 0; i <=3; i++) {
                                arrayProductos.forEach(elemento=>{
                                if (elemento.ofertaPorcentaje>=maxActualOferta){
                    
                                 if(!indiceRepetido.includes(contador)){   //si el elemento no está repetido, lo incluyo.
                                    maxActualOferta=elemento.ofertaPorcentaje;
                                    indice=contador; 
                                    }
    
                                }
                                contador++;
                                })
    
                                indiceRepetido.push(indice);
                                array[i]=arrayProductos[indice];
                                maxActualOferta=0;contador=0;indice=0;
            
                            }   
    
                            return array;

    } 
}

module.exports=funcionesProductos;
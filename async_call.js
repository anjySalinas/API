// dependencia :request
//commonjs

const request= require('request')

//direccion de la API
const url='https://thronesapi.com/api/v2/Characters'

// HACER OPERACION ASINCRONA 
let r=request(url,
                 {json:true},
                 (error,respuesta,body)=>{
                 let trono=body
                 trono.forEach(tronos => {
                    console.log(tronos.firstName,tronos.family)
                    console.log("-----------------")
                 });
                 
                 })
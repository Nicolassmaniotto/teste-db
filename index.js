// const DB = require('fs-json-db')
// const fs = require('fs')
import * as DB from 'fs-json-db'

// DB.createDB('user').then(console.log).catch(console.log)

async function addItem(){
    for(i=1;i<200;i++){
        // if(cont<tamanho){
          console.log( await DB.addItemSync('user','user'+i))
        // } 
    
    }
    return 'concluido'
}
let findParam={
  id:true
}
// addItem().then(
// addItem()
// DB.findIdInAll('user','[\w\s]{0,}11').then(console.log).catch(console.log)
DB.findItemInAll('user','21',findParam).then(console.log).catch(console.log)
// )
// findId('18')
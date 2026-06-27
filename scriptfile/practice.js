import menuItems from './menuData.js'
let cart = []

menuItems.forEach((item)=>{
   let exist = cart.find(cartItem=>cartItem.name ===item.name)
   if(exist){
    console.log('hello')
   }else{
    cart.push(item)
   }
   console.log(cart.name)
})



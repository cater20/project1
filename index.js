// event listeners

//document.querySelector('#fruit-form').addEventListener('submit', e)


//eventhandlers
//function handleSubmit(e) {
    //e.preventDefault()

   // let fruitObj={
     //   name:e.target.fruit.value,
      //  name:e.target.image_url.value,
     //   description:e.target.description.value,
   //     buyFruit:0
  //  } 
//} 
//renderOneFruit(fruitObj)
//buyFruit(fruitObj)

//dom
function renderOneFruit(animal) {
    let card=document.createElement('li')
    card.className ="form"
    card.id = fruit.id
    card.innerHTML =`
    
< div class ="content">
<h2>${fruit.name}</h2>
<p>
$<span class ="payment">${fruit.payment}</span>Payment
</p>
<p>
${fruit.description}</p>
</div>

<div class =" button">
    <button id="payment">Pay$10</button>
    <button id="pass">set-Pass</button>

</div>
    `

    //card.querySelector('#payment').addEventListener('click',()=>{
      //  fruit.payment +=10
       // card.querySelector('span').textContent=fruit.payment
     //   updatePayment(fruit)
   // })
  //  card.querySelector('#set_pass').addEventListener('click',()=>{
   // card.remove()
   // deletefruit(fruit.id)
//})
}
  // document.querySelector('#fruit-list').appendChild(form) 
    


//fetch
function getAllFruits() {
    fetch("http://localhost:3000/fruits")
    .then (res =>res.json())
   // .then (fruit =>fruit.forEach(fruit => renderOneFruit(fruit))
        
    //);
}
//function buyFruit(fruitObj) {
  //  fetch ("http://localhost:3000/fruits",{
      //  method:"POST",
      //  headers:{
       //     "content.Type":"application/json"
       // },
      // body:JSON.stringify(fruitObj) 
   // } )
  //  .then (res => res.json())
  //  .then(fruit => console.log(fruit))
//}
//function updatePayment(fruitObj) {
   // fetch (`http://localhost:3000/fruits/${fruitObj.id}`,{
    //    method:"PATCH",
      //  headers:{
        //    "content.Type":"application/json"
        //},
      // body:JSON.stringify(fruitObj) 
  //  } )
   // .then (res => res.json())
   // .then(fruit => console.log(fruit))
//}
//function deleteFruit(id) {
   // fetch (`http://localhost:3000/fruits/${id}`,{
     //   method:"DELETE",
    //    headers:{
         //   "content.Type":"application/json"
     //   },
    
   // } )
   // .then (res => res.json())
  //  .then(fruit => console.log(fruit))  
//}

function initialize() {
    //fruits.forEach(fruit=>renderOneFruit(fruit))
    getAllFruits()
}
console.log(getAllFruits);
initialize
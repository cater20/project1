// event listeners

document.querySelector('#fruit-form').addEventListener('submit', handlesubmit)


//eventhandlers
function handleSubmit(e) {
    e.preventDefault()

    let fruitObj={
        fruit:e.target.fruit.value,
        image_Url:e.target.image_url.value,
        description:e.target.description.value,
        buy:0
    } 
} 
renderOneFruit(fruitObj)
buyFruit(fruitObj)

//dom
function renderOneFruit(animal) {
    let form=document.createElement('li')
    form.className
}

//fetch
function getAllFruits() {
    fetch("http://localhost:3000/fruits")
    .then (res =>res.json())
    .then (fruitData =>fruitData.forEach(fruit => renderOneFruit(fruit))
        
    );
}
function buyFruit(fruitObj) {
    fetch ("http://localhost:3000/fruits",{
        method:"POST",
        headers:{
            "content.Type":"application/json"
        },
       body:JSON.stringify(fruitObj) 
    } )
    .then (res => res.json())
    .then(fruit => console.log(fruit))
}
function initialize() {
    getAllFruits()
}
initialize
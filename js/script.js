import { cardComponent } from "../components/card.js";
import { data } from "../data/products.js";

let renderArea = document.querySelector("#render-area")
console.log(data)

data.map((product)=>{
    console.log(product)
    renderArea.innerHTML += cardComponent(product)
})
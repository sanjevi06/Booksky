
var layer = document.querySelector(".overlays")
var popuplayer = document.querySelector(".popup")
var addbutton = document.getElementById("newbtn")

addbutton.addEventListener("click",function (){
    layer.style.display="block"
    popuplayer.style.display="block"
})

var cancelbtn = document.getElementById("cancel")
var addbtn = document.getElementById("add")

cancelbtn.addEventListener("click",function(event){
event.preventDefault()
popuplayer.style.display="none"
layer.style.display="none"
})

var cont = document.querySelector(".container")
var addbtn=document.getElementById("add")
var title =document.getElementById("title")
var author =document.getElementById("author")
var desc = document.getElementById("des")
var dlt =document.getElementById("dlt")

addbtn.addEventListener("click",function(event){
    event.preventDefault()
    var div =document.createElement("div")
    div.setAttribute("class","book-cont")
    div.innerHTML=` <h2>${title.value}</h2>
    <h5>${aut.value}</h5>
    <p>${des.value}</p>
   <button id="dlt" onclick="deletebutton(event)">Delete</button>`
    cont.append(div)
    popuplayer.style.display="none"
layer.style.display="none"

})

function deletebutton(event){
    event.target.parentElement.remove();
}
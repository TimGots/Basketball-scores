let first = document.getElementById("home")
let count = 0
let second = document.getElementById("guest")
function add1(){
    console.log("button")
    count+=1
    first.textContent=count
}
function add2(){
    count+=2
    home.textContent=count
}
function add3(){
    count+=3
    home.textContent=count
}
function ad3(){
    count+=3
    second.textContent=count
}
function ad2(){
    count+=2
    second.textContent=count
}
function ad1(){
    count+=1
    second.textContent=count
}
function set0(){
    count=0
    first.textContent=count
    second.textContent=count

}
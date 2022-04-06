window.addEventListener('load', init)


function ID(elem){
    return document.getElementById(elem);
}

function $(elem){
    return document.querySelector(elem);
}

function ß(elem){
    return document.querySelectorAll(elem);
}

 var szamlista = [0,1, 2, 3, 4, 5, 6, 7,8,9] 


function init(){
    var txt = "";
    for (let index = 0; index < szamlista.length; index++){
        txt+="<button>"+szamlista[index]+"</button>";
    }
    $(".szamok").innerHTML = txt

    for (let index = 0; index < szamlista.length; index++) {
        ß(".szamok button")[index].addEventListener("click", kepernyo);
    }
}

function kepernyo(){
    console.log(event.target);
    $(".kijelzo").innerHTML += event.target.innerHTML;
}

function torol(){
    if(event.target.innerHTML == "C"){
        $(".kijelzo").innerHTML = "";
    }
}
window.onload = inicio(); //preguntar por esto a Juan

function inicio() {
    document.querySelector("body").insertAdjacentHTML("beforeend",`
        <button class="boton">Botón 1</button>
        <button class="boton">Botón 2</button>
        <button class="boton">Botón 3</button>
        <div id="imagen"><img src="./img/HTML5_Badge.svg" alt=""></div>`)

        document.querySelectorAll(".boton")[0].onclick = accion1;
        document.querySelectorAll(".boton")[1].onclick = accion2;
        document.querySelectorAll(".boton")[2].onclick = accion3;
}

function accion1() {
    document.querySelector("img").style.backgroundColor ="#1162ac";
    document.querySelector("#imagen").style.borderRadius = "50%";
    document.querySelectorAll(".boton")[0].style.visibility = "hidden";
}
function accion2() {
    if(document.querySelector("#imagen").style.display == "none"){
        document.querySelector("#imagen").style.display = "block";
        document.querySelectorAll(".boton")[1].style.background = "orange";
    } else {
        document.querySelector("#imagen").style.display = "none";
        document.querySelectorAll(".boton")[1].style.background = null;
    }
}
function accion3() {
    document.querySelector("img").style = null;
    document.querySelector("#imagen").style = null;
    document.querySelectorAll(".boton")[0].style = null;
    document.querySelectorAll(".boton")[1].style = null;
    document.querySelectorAll(".boton")[2].style = null;

}
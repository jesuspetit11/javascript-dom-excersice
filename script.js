window.onload = inicio(); //preguntar por esto a Juan

function inicio() {
    document.querySelector("body").insertAdjacentHTML("beforeend",`
        <button id="boton1" class="boton">Botón 1</button>
        <button id="boton2" class="boton">Botón 2</button>
        <button id="boton3" class="boton">Botón 3</button>
        <div id="imagen"><img src="./img/HTML5_Badge.svg" alt=""></div>`)
}


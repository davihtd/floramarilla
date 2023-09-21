document.getElementById("click").addEventListener("click", function() {
    document.querySelector(".bluoquet-flower").classList.add("show-flowers");
    
    const contenido = document.getElementById("contenido");
    contenido.classList.add("show-content");
    
    document.getElementById("button-window").style.display = "none";
});

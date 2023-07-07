window.addEventListener("DOMContentLoaded", function() {

    const navMenuButton = document.querySelector("#nav-menu-open");

    navMenuButton.addEventListener("click", function(){
        const menu = document.querySelector(".mobile-menu");
        menu.classList.remove("hidden");
    });


    window.addEventListener("click", function(event) {
        if(event.target.closest("#nav-menu-open")) {
            return;
        };
        const menu = document.querySelector(".mobile-menu");
        menu.classList.add("hidden");
    });

});
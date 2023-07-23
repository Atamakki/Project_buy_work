window.addEventListener("DOMContentLoaded", function() {
    const MenuButton = document.querySelector("#menu-open");

    MenuButton.addEventListener("click", function(){
        const menuP = document.querySelector(".mobile-menu-profile");
        menuP.classList.remove("hidden");
    });

    window.addEventListener("click", function(eventP) {
        if(eventP.target.closest("#menu-open")) {
            return;
        };
        const menuP = document.querySelector(".mobile-menu-profile");
        menuP.classList.add("hidden");
    });
});
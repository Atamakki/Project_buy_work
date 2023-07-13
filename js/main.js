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

    document.querySelectorAll(".button_login").forEach(function(button){
        button.addEventListener("click", function(){
            document.querySelector(".login_modal").classList.remove("hidden");
            requestAnimationFrame(function(){
                document.querySelector(".login_modal").classList.add("modal_overlay_active");
            }); 
        });
    });

    document.querySelector(".login_close_btn").addEventListener("click", function(){
        document.querySelector(".login_modal").classList.remove("modal_overlay_active");

        setTimeout(function(){
            document.querySelector(".login_modal").classList.add("hidden");
        }, 200)
    });

    document.querySelector("#registration_button").addEventListener("click", function() {
            document.querySelector(".login_modal").classList.remove("modal_overlay_active");
            document.querySelector('.login_modal').classList.add("hidden");
            setTimeout(function(){
                document.querySelector(".registration_modal").classList.remove("hidden");
                document.querySelector(".registration_modal").classList.add("modal_overlay_active");
            }, 200);
        });

    document.querySelector(".registration_close_btn").addEventListener("click", function() {
        document.querySelector(".registration").classList.add("hidden")
        document.querySelector(".registration_modal").classList.remove("modal_overlay_active");

        setTimeout(function() {
            document.querySelector(".registration").classList.remove("hidden");
            document.querySelector(".registration_modal").classList.add("hidden");
        }, 200);
    });
});
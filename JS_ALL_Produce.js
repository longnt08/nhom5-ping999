
function toggleContent(contentId, button) {
    var contents = document.getElementsByClassName('content');
    for (var i = 0; i < contents.length; i++) {
        contents[i].classList.remove('active');
    }

    var buttons = document.getElementsByClassName('title_info');
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('blur');
    }
    document.getElementById(contentId).classList.add('active');
    button.classList.add('blur');
}



document.addEventListener('DOMContentLoaded', function() {
    var mainImg = document.getElementById('MainIMG');
    var smallImgs = document.querySelectorAll('.small_IMG');
    
    smallImgs.forEach(function(smallImg) {
        smallImg.addEventListener('click', function() {
            mainImg.src = this.src;
        });
    });
});


document.addEventListener("DOMContentLoaded", function() {
    var zoomIMG = document.querySelectorAll(".container #Main_Content #IMG_MainProduce img")[0];
    zoomIMG.onclick = function() {
        var lightbox = document.querySelector(".container .lightbox");
        lightbox.style.display = "block";
        
        lightbox.getElementsByTagName("img")[0].src = this.src;
        lightbox.getElementsByTagName("div")[0].onclick = function() {
            lightbox.style.display = "none";
        }

    };
});


document.addEventListener("DOMContentLoaded", function() {
    var toggle_menu = document.querySelector("body header #toggle-menu");

    toggle_menu.addEventListener("click", function() {
        var appearMenu = document.querySelector("body header #TITLE");
        if(appearMenu.style.display == "none") {
            appearMenu.style.display = "block";
            appearMenu.style.transitionDuration = 0.5;
            toggle_menu.style.color = "white";
            toggle_menu.style.background = "black";
        }
        else {
            appearMenu.style.display = "none";
            toggle_menu.style.color = "black";
            toggle_menu.style.background = "white";
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    function adjustStyleBasedOnWidth() {
        var width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        var toggle_menu = document.querySelector("body header #toggle-menu");
        var appearMenu = document.querySelector("body header #TITLE");
        appearMenu.style.display = "none";
        toggle_menu.style.backgroundColor = "white";
        toggle_menu.style.color = "black";
        
        if(width <= 950) {
            toggle_menu.addEventListener("onmousover", function() {
                if(appearMenu.style.display == "none") {
                    appearMenu.style.display = "block";
                    toggle_menu.style.backgroundColor = "black";
                    toggle_menu.style.color = "white";
                }
                else 
                if(appearMenu.style.display == "block")
                {
                    appearMenu.style.display = "none";
                    toggle_menu.style.backgroundColor = "white";
                    toggle_menu.style.color = "black";
                }
            });

        }
        else {
            appearMenu.style.display = "flex";
            toggle_menu.style.backgroundColor = "white";
            toggle_menu.style.color = "black";
        }


    }
    adjustStyleBasedOnWidth();
    window.addEventListener("resize", adjustStyleBasedOnWidth);
});



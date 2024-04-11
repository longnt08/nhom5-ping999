fetch("/html/navbar.html")
    .then((response) => response.text())
    .then((html) => {
        const navbar = document.getElementById("topnav");
        navbar.innerHTML = html;
        if (idPage) {
            document.querySelector('#${idPage}').classList.add("active");
        }
    })

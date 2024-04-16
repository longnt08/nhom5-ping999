fetch("/html/footer.html")
    .then((response) => response.text())
    .then((html) => {
        const navbar = document.getElementById("footer");
        navbar.innerHTML = html;
        if (idPage) {
            document.querySelector('#${idPage}').classList.add("active");
        }
    })

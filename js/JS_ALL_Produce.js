
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

$(document).ready(function() {
    $("#toggle-menu").click(function() {
        // Toggle content when the toggle-menu button is clicked
        toggleContent("content1", this);
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var mainImg = document.getElementById('MainIMG');
    var smallImgs = document.querySelectorAll('.small_IMG');
    
    smallImgs.forEach(function(smallImg) {
        smallImg.addEventListener('click', function() {
            mainImg.src = this.src;
        });
    });
});
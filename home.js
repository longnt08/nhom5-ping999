document.getElementById('searchButton').addEventListener('click', function() {
    var input = document.getElementById('searchInput').value.toLowerCase();
    var resultsDiv = document.getElementById('searchResults');

    resultsDiv.innerHTML = '';

    var data = ['a', 'b', 'c'];
    var matches = data.filter(function(item){
        return item.toLowerCase().includes(input);
    })

    if(matches.length > 0) {
        var ul = document.createElement('ul');
        matches.forEach(function(match) {
            var li = document.createElement('li');
            li.textContent = match;
            ul.appendChild(li);
        });
        resultsDiv.appendChild(ul);
    }
    else {
        resultsDiv.textContent = 'No results found';
    }
});

// Lấy các phần tử có id tương ứng
// var anhEquipment1 = document.getElementById('anhEquipment1');
// var anhEquipment2 = document.getElementById('anhEquipment2');
// var anhEquipment3 = document.getElementById('anhEquipment3');
// var anhEquipment4 = document.getElementById('anhEquipment4');

// function zoomIn(element) {
//     element.classList.add('zoom'); 
// }

// function zoomOut(element) {
//     element.classList.remove('zoom'); 
// }

// var divsToZoom = document.querySelectorAll('.anhLeftBottom, .anhRightBottom, .anhLeftTop, .anhRightTop');


var div121 = document.getElementById('anhEquipment1');
var div122 = document.getElementById('anhEquipment2');
var div123 = document.getElementById('anhEquipment3');
var div123 = document.getElementById('anhEquipment4');

function zoomIn(event) {
    event.target.classList.add('zoom'); 
}

function zoomOut(event) {
    event.target.classList.remove('zoom'); 
}


div121.addEventListener('mouseover', zoomIn);
div121.addEventListener('mouseout', zoomOut);

div122.addEventListener('mouseover', zoomIn);
div122.addEventListener('mouseout', zoomOut);

div123.addEventListener('mouseover', zoomIn);
div123.addEventListener('mouseout', zoomOut);

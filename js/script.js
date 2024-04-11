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
let origins = [];

var loadArtistCard = function () {
    // Makes Row for Artist Card & Name
    var artistCardRow = $("<div>").attr("id", "artist-card").addClass("row");

    // Adds Row for Name
    var nameRow = $("<div>").addClass("row");
    var nameCol = $("<div>").addClass("col");

    var nameH = $("<h3>").attr("id", "artist-name").addClass("card-title")
    artistCardRow.append(nameRow);
    nameRow.append(nameCol);
    nameCol.append(nameH);

    // Adds Artist Card
    var cardRow = $("<div>").addClass("row");
    var cardCol = $("<div>").addClass("col s4");
    var cardDiv = $("<div>").addClass("card");
    artistCardRow.append(cardRow);
    cardRow.append(cardCol);
    cardCol.append(cardDiv);

    // Adds Artist Description to Artist Card
    var artistDescription = $("<div>").attr("id", "artist-description").addClass("card-content");

    var descriptionP = $("<p>")
    cardDiv.append(artistDescription);
    artistDescription.append(descriptionP);

    // Appends images to Artist Card Row
    var imageDiv = $("<div>").attr("id", "images").addClass("col s6");
    cardRow.append(imageDiv);

    // Appends Artist Card to page
    $("#card-holder").append(artistCardRow);
};

var apiSearch = function(name) {

    return fetch('https://api.artic.edu/api/v1/artworks/search?q=' + name)
        .then(response => response.json())
};

var countries = function(url) {

    return fetch(url)
        .then(response => response.json())

};

var getImageId = function(id) {
    console.log(id)

    return fetch('https://api.artic.edu/api/v1/artworks/' + id + '?fields=id,title,image_id')
        .then(response => response.json())
};

var getwikiInfo = function(name) {
    name = name.split(' ').join('_')
    var queryUrl = "https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exchars=400&explaintext&redirects=1&titles=" + name;
    var encodedUrl = encodeURIComponent(queryUrl);
    $.ajax({
        type: 'GET',
        contentType: 'application/json',
        url: 'https://corsbridge2.herokuapp.com/' + encodedUrl,
        success: function (data) {
            var returnedLink = data.query.pages;
            var returnedKeys = Object.keys(returnedLink)[0];
            var extractedText = returnedLink[returnedKeys].extract;
            
            getText(extractedText);
        }
    });
};

var getText = function(text) {
    wikiSite.firstElementChild.textContent = text;
};


loadArtistCard();

let idSearch = document.getElementById("search");
let artistImages = document.getElementById("images");
let name = document.getElementById("artist-name");
let wikiSite = document.getElementById("artist-description");


idSearch.addEventListener('change', (event) => {

    const result = event.target.value;
    let wik = getwikiInfo(result)
    console.log(wik)

    apiSearch(result).then(res => {
        console.log(res)

        name.innerHTML = ` ${result}`
        res.data.forEach(element => {
            countries(element.api_link).then(({ data }) => {
                origins.push(data.place_of_origin)
                localStorage.setItem('origins', JSON.stringify(origins))
            })
            getImageId(element.id).then(res2 => {
                var imageId = res2.data.image_id;
                console.log(res2.data.image_id)

                var src = 'https://www.artic.edu/iiif/2/' + imageId + '/full/843,/0/default.jpg';
                artistImages.innerHTML += `<img width="100" height="100" src="${src}" alt="${element.thumbnail.alt_text}" >`;
            });
        });
    });
});
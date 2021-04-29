
let IdSreach= document.getElementById("search")
let carousel=document.querySelector(".carousel")
let name=document.getElementById("artist-name")
// artist-name
function APIscreach (name) {

    return fetch('https://api.artic.edu/api/v1/artworks/search?q=' + name)
    .then(response => response.json())

    
    // https://api.artic.edu/api/v1/artworks/13506?fields=id,title,image_id
}

function getImageId (id) {
    console.log(id)

    return fetch('https://api.artic.edu/api/v1/artworks/'+id+'?fields=id,title,image_id')
    .then(response =>  response.json())

    //https://api.artic.edu/api/v1/artworks/13506?fields=id,title,image_id

    
    // https://api.artic.edu/api/v1/artworks/13506?fields=id,title,image_id
}
Usersreach ()
function Usersreach(){

    // const DIV = `<ol>
    //     <li></li>
    // </ol>`;
    // const OL = document.createElement('ol');
    // OL.setAttribute('id', 'list');
    // const li = document.createElement('li');
    // OL.appendChild(li);
    // const H1 = document.createElement('h1');
    // H1.textContent = 'اسم اللوحه'
    //mary cassatt
    //https://api.artic.edu/api/v1/artworks/13506?fields=id,title,image_id
    IdSreach.addEventListener('change', (event) => {
        const result = event.target.value;
        let wik=getwikiInfo(result)
        console.log(wik)



        APIscreach(result).then(res => {
            console.log(res)

            name.innerHTML=` ${result}` 
            
            res.data.forEach(element => {
              getImageId(element.id).then(res2 => {
                  var imageId=res2.data.image_id;
             console.log(res2.data.image_id)

             var src='https://www.artic.edu/iiif/2/'+imageId+'/full/843,/0/default.jpg';
               carousel.innerHTML += `<img width="100" height="100" src="${src}" alt="${element.thumbnail.alt_text}" >`;
            });
        });
        })

      });

      function getwikiInfo(name) {
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
return extractedText
            }
        });

        var siteLink = "https://en.wikipedia.org/wiki/" + name;    
        wikiSite.setAttribute("href", siteLink);
        wikiSite.innerHTML = siteLink;
    
    }

}


let origin = document.getElementById("origin")

bulidHTML()
function bulidHTML() {
    let data = JSON.parse(localStorage.getItem('origins')) || [];
    let count = 0;
    var countries = {};
    
    data.forEach((element) => {
        if (countries[element]) {
            countries[element] += 1;
            
        } else {
            countries[element] = 1
            // countries = {
            //     'us' : 1,
            //uk: 1
            // }
        }
    });

    const objKeys = Object.keys(countries)
    objKeys.forEach(countryName => {
        origin.innerHTML += `<tr>
          <td>${countryName}</td>
          <td>${countries[countryName]}</td>
      </tr>`;
    })

}
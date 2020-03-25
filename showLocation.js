fetch("http://localhost:3000/locations")
    .then(response => response.json())
    .then(locations => showLocations(locations))

function showLocations(locations){
    const locationsList = document.querySelector("#locations-list")

    locations.forEach(location => {
        const newLocation = document.createElement('li')
        newLocation.innerHTML = `<a href=showLocations>`
    })

}
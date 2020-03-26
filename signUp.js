fetch(`http://localhost:3000/locations`)
    .then(response => response.json())
    .then(locations => locationList(locations))


function locationList(locationList){
    locations = document.querySelector('#location_dropdown')
    locationList.forEach(location => {
       const newLocation = document.createElement('option')
       newLocation.value = location.id
        newLocation.innerText = location.city
        locations.append(newLocation)
    })
}
fetch('http://localhost:3000/animals/')
    .then(response => response.json())
    .then(puppies => showPuppies(puppies))

function showPuppies(puppies){
    const puppiesList = document.querySelector('#puppies-list')

    puppies.select()
    puppies.forEach(puppy => {
        const newPuppy = document.createElement('li')
        newPuppy.innerHTML = `<a href='showPuppy.html?id=${puppy.id}'>${puppy.name}</a>`
        puppiesList.append(newPuppy)
    })
}

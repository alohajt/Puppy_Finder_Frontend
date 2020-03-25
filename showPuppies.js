fetch('http://localhost:3000/puppies/')
    .then(response => response.json())
    .then(puppies => showPuppies(puppies))

function showPuppies(puppies){
    const puppiesList = document.querySelector('#puppies-list')

    puppies.forEach(puppies => {
        const newPuppy = document.createElement('li')
        newPuppy.innerHTML = `<a href='showPuppy.html?id=${puppy.id}'>${puppy.name}</a>`
        puppiesList.append(newPuppy)
    })
}

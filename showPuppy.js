const searchId = new URLSearchParams(window.location.search)
const id = searchId.get('id')


fetch(`http://localhost:3000/puppies/${id}`)
    .then(response => response.json())
    .then(puppy => showPuppy(puppy))

function showPuppy(puppy){
    const puppyList = document.querySelector('#puppy-list')

    const newPuppyName = document.createElement('li')
    newPuppyName.innerText = puppy.name
    const newPuppyBio = document.createElement('li')
    newPuppyBio.innerText = puppy.bio

    puppyList.append(newPuppyBio,newPuppyName)
}
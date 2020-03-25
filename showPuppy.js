const searchId = new URLSearchParams(window.location.search)
const id = searchId.get('id')

fetch(`http://localhost:3000/puppies/${id}`)
    .then(response => response.json())
    .then(puppy => showPuppy(puppy))

function showPuppy(puppy){
    const puppyList = document.querySelector('#puppy-list')

    const newPuppyName = document.createElement('li')
    newPuppyName.innerText = puppy.name
    const goodWithDog = document.createElement('li')
    goodWithDog.innerText = puppy.gwdogs
    const goodWithCat = document.createElement('li')
    goodWithCat.innerText = puppy.gwcats
    const goodWithChild = document.createElement('li')
    goodWithChild.innerText = puppy.gwchild
    const newPuppyBio = document.createElement('li')
    newPuppyBio.innerText = puppy.bio

    //show puppy's image
    const img = document.createElement("img");
    img.src = puppy.image;
    const src = document.getElementById("li");
    src.appendChild(img);

    puppyList.append(newPuppyBio,newPuppyName)
}
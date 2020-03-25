const searchId = new URLSearchParams(window.location.search)
const id = searchId.get('id')


fetch(`http://localhost:3000/cats/${id}`)
    .then(response => response.json())
    .then(cat => showCat(cat))

function showCat(cat){
    const catList = document.querySelector('#cat-list')

    const newCatName = document.createElement('li')
    newCatName.innerText = cat.name
    const newCatBio = document.createElement('li')
    newCatBio.innerText = cat.bio

    catList.append(newCatBio,newCatName)
}
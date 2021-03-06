const username = localStorage.getItem('username')
header = document.querySelector('header')

const searchId = new URLSearchParams(window.location.search)
const id = searchId.get('id')

fetch(`http://localhost:3000/animals/${id}`)
    .then(response => response.json())
    .then(puppy => showPuppy(puppy))

function showPuppy(puppy){
    const puppyInfo = document.querySelector('#puppy-info')

    const newPuppyCard = document.createElement('div')
    newPuppyCard.class="card"
    newPuppyCard.innerHTML = `
    <div class="card">
        <p class="card-title"><a href='http://localhost:3001/showPuppy.html?id=${puppy.id}'>${puppy.name}</a></p>
        <div class="card-image" >
            <img src="${puppy.picture}" alt="picture of ${puppy.name}" style="width:60%">
        </div>
        <div class="card-box">
            <ul>Breed: ${puppy.breed}</ul>
            <ul>${puppy.gwkids? `${puppy.name} is fantastic with kids`: "" }</ul>
            <ul>${puppy.gwdogs? `${puppy.name} is terrific with other dogs`: "" }</ul>
            <ul>${puppy.gwcats? `${puppy.name} is amazing with cats`: "" }</ul>
            <ul><b>BIO:${puppy.bio}</b></ul>
        </div>
        <form class="add-favorite">
            <input id="${puppy.id}" type="button" value="add to favorites" onClick="addToFavorites()">
        </form>
    </div>`
        puppyInfo.append(newPuppyCard)
    }

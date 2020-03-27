const username = localStorage.getItem('username')
header = document.querySelector('header')
const userLocation = localStorage.getItem('location')

const welcome_message = document.createElement('h1')
welcome_message.innerHTML = `${username}'s favorite dogs`
header.append(welcome_message)

fetch(`http://localhost:3000/userFavorites/${username}`)
    .then(response => response.json())
    .then(favorites => showPuppies(favorites))

    function showPuppies(favorites){
      const puppiesList = document.querySelector('#puppies-list')
  
      // puppiesUnderLocation = puppies.select(puppy =>{
      
      //     puppy.location == userLocation
      // })
  
      favorites.forEach(favorite => {
          const newPuppyCard = document.createElement('div')
          newPuppyCard.class="card"
          newPuppyCard.innerHTML = `
          <div class="card">
              <p class="card-title"><a href='http://localhost:3001/showPuppy.html?id=${favorite.animal.id}'>${favorite.animal.name}</a></p>
              <div class="card-image">
                  <img src="${favorite.animal.picture}" alt="picture of ${favorite.animal.name}" style="width:60%">
              </div>
              <div class="card-box">
                  <ul>Breed: ${favorite.animal.breed}</ul>
                  <ul>${favorite.animal.gwkids? "Good with kids": "" }</ul>
                  <ul>${favorite.animal.gwdogs? "Good with dogs": "" }</ul>
                  <ul>${favorite.animal.gwcats? "Good with cats": "" }</ul>
                  <ul><b>${favorite.animal.bio}</b></ul>
              </div>
              <form class="add-favorite">
                  <input id="${favorite.animal.id}" type="button" value="add to favorites" onClick="addToFavorites(${favorite.animal.id})">
              </form>
          </div>`
          
          puppiesList.append(newPuppyCard)
      })
  }
const username = localStorage.getItem('username')
header = document.querySelector('header')
const userLocation = localStorage.getItem('location')

const welcome_message = document.createElement('h1')
welcome_message.innerHTML = `${username}'s homepage`
header.append(welcome_message)

fetch('http://localhost:3000/animals/')
    .then(response => response.json())
    .then(puppies => showPuppies(puppies))

function showPuppies(puppies){
    const puppiesList = document.querySelector('#puppies-list')

    // puppiesUnderLocation = puppies.select(puppy =>{
    
    //     puppy.location == userLocation
    // })

    puppies.forEach(puppy => {
        const newPuppyCard = document.createElement('div')
        newPuppyCard.class="card"
        newPuppyCard.innerHTML = `
        <div class="card">
            <p class="card-title"><a href='http://localhost:3001/showPuppy.html?id=${puppy.id}'>${puppy.name}</a></p>
            <div class="card-imgae">
                <img src="${puppy.picture}" alt="picture of ${puppy.name}" style="width:60%">
            </div>
            <div class="card-box">
                <ul>Breed: ${puppy.breed}</ul>
                <ul>Good with kids: ${puppy.gwkids}</ul>
                <ul>Good with other dogs: ${puppy.gwdogs}</ul>
                <ul>Good with other cats: ${puppy.gwcats}</ul>
                <ul><b>${puppy.bio}</b></ul>
            </div>
            <form class="add-favorite">
                <input id="${puppy.id}" type="button" value="add to favorites" onClick="addToFavorites()">
            </form>
        </div>`
        puppiesList.append(newPuppyCard)
    })
}


function addToFavorites(){

}
function logout(){
    localStorage.removeItem("username");
    localStorage.removeItem("password");
    window.location.href='http://localhost:3001';
}

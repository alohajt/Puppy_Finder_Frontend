fetch('http://localhost:3000/animals/')
    .then(response => response.json())
    .then(puppies => showPuppies(puppies))

function showPuppies(puppies){
    const puppiesList = document.querySelector('#puppies-list')


    puppies.forEach(puppy => {
        const newPuppyCard = document.createElement('div')
        newPuppyCard.class="card"
        newPuppyCard.innerHTML = `
        <div class="card">
            <p><a href='http://localhost:3001/showPuppy.html?id=${puppy.id}'>${puppy.name}</a></p>
            <img src="${puppy.picture}" alt="picture of ${puppy.name}" style="width:100%">
            <div class="container">
                <h4><b>${puppy.bio}</b></h4>
            </div>
            <form>
                <input id="${puppy.id}" type="button" value="add to favorites" onClick="addToFavorites()">
            </form>
        </div>`
        puppiesList.append(newPuppyCard)
    })
}
const username = localStorage.getItem('username')
header = document.querySelector('header')
const welcome_message = document.createElement('h1')
welcome_message.innerHTML = `${username}'s homepage`
header.append(welcome_message)

function addToFavorites(){

}
function logout(){
    localStorage.removeItem("username");
    localStorage.removeItem("password");
    window.location.href='http://localhost:3001';
}

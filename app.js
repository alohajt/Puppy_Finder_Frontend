// fetch('http://localhost:3000/animals')
//     .then(response => response.json())
//     .then(puppies => showPuppies(puppies))

//     function showPuppies(puppies){
//         const puppyList = document.querySelector("#puppy-list")

//         puppies.forEach(puppy => {
//             const newPuppy = document.createElement('li')
//             newPuppy.innerHTML = `<a href='showPuppy.html?id=${puppy.id}'>${puppy.name}</a>`
//             puppyList.append(newPuppy)
//         });
//     }


//^^^^JT I don't think we need any of that for the index page. We just need one picture to make it look pretty. We will see alot more on the show puppies page ----Jon Higger

function getInfo() {
    const username = document.getElementById("username").value
    const password = document.getElementById("password").value
    localStorage.setItem('username',username)
    localStorage.setItem('password',password)
    window.location.href="http://localhost:3001/showPuppies.html"
    // console.log(username,password)
}
// fetch('http://localhost:3000/cats')
//     .then(response => response.json())
//     .then(cats => showCats(cats))

//     function showCats(cats){
//         const catList = document.querySelector('#cat-list')

//         cats.forEach(cat => {
//             const newCat = document.createElement('li')
//             newCat.innerHTML = `<a href='showCat.html?id=${cat.id}'>${cat.name}</a>`
//             catList.append(newCat)
//         });
//     }
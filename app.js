fetch('http://localhost:3000/puppies')
    .then(response => response.json())
    .then(puppies => showPuppies(puppies))

    function showPuppies(puppies){
        const puppyList = document.querySelector("#puppy-list")

        puppies.forEach(puppy => {
            const newPuppy = document.createElement('li')
            newPuppy.innerHTML = `<a href='showPuppy.html?id=${puppy.id}'>${puppy.name}</a>`
            puppyList.append(newPuppy)
        });
    }

fetch('http://localhost:3000/cats')
    .then(response => response.json())
    .then(cats => showCats(cats))

    function showCats(cats){
        const catList = document.querySelector('#cat-list')

        cats.forEach(cat => {
            const newCat = document.createElement('li')
            newCat.innerHTML = `<a href='showType.html?id=${type.id}'>${type.name}</a>`
            catList.append(newCat)
            
        });
    }
const username = localStorage.getItem("username")
console.log(username)
const formSection = document.querySelector('section')
const forms = document.createElement('div')
forms.innerHTML= `
<form id="changeUsername" action='http://localhost:3000/changeUserName/${username}' method="POST" id="form_id">
  <div>Change your username</div> 
  <input type='text' name='username'  id='username' placeholder="Re Enter Your User Name">
  <input type='submit' id='username_submit' value='submit'></input>
</form>
<form id="changePassword" action='http://localhost:3000/changeUserPassword/${username}' method="POST" id="form_id">
  <div>Change your password</div>   
  <input type='text' name='password' id='password' placeholder="Re Enter Your Password">
  <input type='submit'  value='submit'></input>
</form>
<form id="changeLocation" action='http://localhost:3000/changeUserLocation/${username}' method="POST" id="form_id">
<select id="location_dropdown" name="location_id">
  <!-- This will be autopopulated by JS code -->
</select>
<input type='submit'  value='submit'></input>
</form>
`
formSection.append(forms)

const header = document.querySelector('header')
fetch(`http://localhost:3000/locations`)
    .then(response => response.json())
    .then(locations => locationList(locations))

usernameSubmit = document.querySelector('username_submit')    

usernameSubmit.addEventListener("click", function(){ 
  
  alert("Hello World!"); });    
function locationList(locationList){
  locations = document.querySelector('#location_dropdown')
  locationList.forEach(location => {
     const newLocation = document.createElement('option')
     newLocation.value = location.id
      newLocation.innerText = location.city
      locations.append(newLocation)
  })
}


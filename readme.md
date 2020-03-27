#  Puppy Love Frontend


## Purpose
 The purpose of this app is to create an interface for users to browse through dogs at their location and then favorite them. If further developed this application could be used to connect users with dog owners or shelters for adoption.

## System dependencies
  The front end to this application is all writen in vanilla javascript, there should be no compatability issues with standard browsers.


## Navigating  the Webpages 
  ### Welcome Page
  When you first access the website, you are taken to the intro page. At this page you can either sign into the website, or create a new user. 

  At this moment in time when you sign in the username and password are stored in the browser storage to track the user throughout the website. In the future the browser storage would store the password, username, and user_id, as when connecting with the backend, it is not the smartest idea to sent a username in for validation.

  As well as this, there is currently no password validation. In the future, a tool like Auth would be used in order to ensure user security.
  

  ### Main Menu
  Once inside of the website, every page has a navbar at the top linking to the other pages. Under the nav bar we see a list of dogs for a given location displayed ass CSS cards. Each dog is pulling its properties from the backend. 

  Under each dog we find a favorite button that allows the user to add the dog to their favorites. 
  
  ### Favorites
  Upon clicking the favorites link. The user is taken to a webpage that displays all of their favorite dogs. 


  ### Edit User
  Here a user can change their properties. They are allowed to change their username, password, and location. 
  Note: you can double check the functionality of this by changing your user location and noting that the dogs that show up are different. 
  
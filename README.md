# Populify

> A "Higher or Lower" game using your Spotify Library!

Populify is a Web Application powered by the **Spotify Web API** that displays two tracks from your "Liked Songs", and makes you guess which one is more popular based off of current popularity. Achieve the highest score you can and share it to see if your friends can beat it! More information about the app is listed below:


Click the link to [play the game](https://populify.herokuapp.com/)


## Project Screenshots

***Home Screen:***

![Home Screen of the Application](https://github.com/JapmanN/Populify/blob/master/public/assets/HomeScreenshot.png?raw=true)


***Main page of Application:***

![Index/Main Page of the Application](https://github.com/JapmanN/Populify/blob/master/public/assets/IndexScreenshot.png?raw=true)


***More Information page:***

![More Information Page of the Application](https://github.com/JapmanN/Populify/blob/master/public/assets/InfoScreenshot.png?raw=true)


***Error page:***

![Error Page of the application](https://github.com/JapmanN/Populify/blob/master/public/assets/ErrorScreenshot.png?raw=true)

Colours and icons used for the application are listed at the bottom of the README.

# Spotify Web API
The application uses the **spotify-web-api-node** wrapper and the following components from the Spotify API:

 - [Authorization](https://developer.spotify.com/documentation/general/guides/authorization-guide/)
 - [Get Current User's Profile](https://developer.spotify.com/documentation/web-api/reference/users-profile/get-current-users-profile/)
 - [Get a User's Saved Tracks](https://developer.spotify.com/documentation/web-api/reference/library/get-users-saved-tracks/)

Populify uses *Authorization Code Flow* for user authorization. This flow is suitable for long-running applications and the user grants permission once.

## Creating a Spotify project

Head over to [Spotify for Developers](https://developer.spotify.com/dashboard/applications). 

Obtain a `CLIENT_ID` and `CLIENT_SECRET` key by registering an application. 

Set the `REDIRECT_URI` to `localhost:3000/callback` in the application settings on your developer dashboard.

Open your application in your web browser by using the url: [http://localhost:3000](http://localhost:3000/)

## Technologies Used

The application was built using the following technologies:

|	Technologies Used      |            Type             
|--------------------------|-----------------------------|
|HTML, CSS, and JavaScript |`Front-end languages`        |
|Node.js, Express.js       |`Back-end`                   |
|Bootstrap                 |`Front-end framework`        |
|spotify-web-api-node      |`Wrapper for Spotify Web API`|
|EJS (embedded JavaScript) |`HTML markup in JavaScript`  |
|Heroku                    |`Cloud Deployment Platform`  |


## Colours and Icons

 - **Home Page** illustration from [undraw.co](https://undraw.co)
 - **Error Page** illustration from [undraw.co](https://undraw.co)
 - **Orange Gradient:** linear-gradient(-20deg, #fc6076 0%, #ff9a44 100%) by [webgradients.com](https://webgradients.com/)
 - **Black Background:** #232323
 - **All Icons for website** from [Font Awesome](https://fontawesome.com/)
 - **Logo Icons (musical note and arrows)** from [logomakr.com](https://logomakr.com/)
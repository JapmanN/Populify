

# Populify

> A "Higher or Lower" game using your Spotify Library!

Populify is a Web Application powered by the **Spotify Web API** that displays two tracks from your "Liked Songs", and makes you guess which one is more popular based off of current popularity. Achieve the highest score you can and share it to see if your friends can beat it! More information about the app is listed below:

Click the link to [play the game](https://japman-web-projects.run.goorm.io/app)

## Project Screenshots

***Home Screen:***

![Home Screen of the Application](https://lh3.googleusercontent.com/v2BUSRB0hf8PwTdoVVAE-dS47tOqmAu3nj3fbUPUZXR_LwNFv9kOtdJfdwswTF6LG3T81sFNYgq8)


***Main page of Application:***

![Index/Main Page of the Application](https://lh3.googleusercontent.com/wmtZRgnvnzDUFrsj19RW8IetjG36GzBBoBnN36et8l5oPqQPFibLWrmpSK9AwjdnxWEktcuME0-w)


***More Information page:***

![More Information Page of the Application](https://lh3.googleusercontent.com/pC6P1lOx39eKnfbIripq_R9uJaE9XDKS0Uz8T8pJsPT-b5hysJzS_ry8jpMZWQ6QYOdJN9lydi7N)


***Error page:***

![Error Page of the application](https://lh3.googleusercontent.com/QTA63GrobgKR3x50K1KvPLAYDnNUqCclewGZsYKB1dW-Wt_uyKYZCZ9HkOXkyx7pVPcl-HTgcEVq)

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
 - **All Icons** from [Font Awesome](https://fontawesome.com/)
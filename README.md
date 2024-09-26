# Netflix GPt

- Create React App
- Configure TailwindCSS
- Header - Logo
- Routing
- Login Form
- Signup Form (seperate component for sign up / reusing the same signin form)
- Form Validation - formik , useRef hook , onSubmit={(e)=>e.preventDefault()} , validation message
- Authentication - firebase 
    - Host using firebase , we can have live url for our app
    - npm i firebase
    - create firebase config
    - npm install -g firebase-tools
    - search authentication --> get started ---> sign in method --> email/password(enable)
    - Deploy the app to firebase (Steps):-
    --> firebase login 
    --> firebase init-->hosting : configure github action deploys --> use existing project --> build--> no---> no--> npm run build(creates optimised production ready app)
    ---> firebase deploy---> copy url, try it.

 Authentication 
    - password authentication :  web modular api
    - signup : import getAuth and createUserWithEmailAndPassword 
    - signin : import getAuth and signInWithEmailAndPasswor 
    - Created redux store with user slice
    - instead of dispatching the action to add user , we will use onAuthStateChanged by firebase 
    (onAuthStateChanged) - when user sign in or out or any change,then  this api is called automatically.
    - we use the created store for user to add user when sign in and remove user when signed out , this is detected when there is change in auth using onAuthStateChanged , 
    - we dispatch action based on sign in and out , and navigate using useNavigate hook to browse or exit page
    - implemented sign out
    - updated profile display name

# PLANNING
# Features 
- Login/sign up
    - Login/sign up Form
    - Redirect to Browse Page

- Browse Page (After Authentication)
    - Header
    - Main Movie
        - Trailer in Background
        - Title and Description
        - Movie Suggestions
            - Movie List * n

- NetflixGPT
    - Search bar            
    - Movie Suggestions

    
                
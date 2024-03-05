dependency used till now ->> react router dom tailwind vite react-icons. npm init -y npm i jsonwebtoken
npm i express nodemon npm i mongoose npm i dotenv  npm i bcryptjs npm i jsonwebtoken npm install @reduxjs/toolkit react-redux


............................................................1.......................................................................................                                               1

dependency used till now -react router dom tailwind vite react-icons.



............................................................2.....................................................................................

Designed the navbar used a different type of UI designer which is flowbyte its easy to use and similiar to HTML


used span tag for the brand name coder's blog
<span> tag is used for different span we can apply two different styles in same line only 


<Link> is used its like anchor tag only but in link tag the site is not refreshed and it has a attribut which is "to"


used "useLocation" which is intended to know on which page is my site
useLocation hook from a React Router library to get the current location object in a React component. The pathname property of the location 
object represents the current URL path.


 The as={'div'} prop is saying, "even though I'm using a link (<Link>), visually render it as a div." This can be useful if you 
 want the styling of a link but don't want the default anchor (<a>) behavior (e.g., navigating to a new page).


............................................................3.....................................................................................

Created a live server at the port 3000 using app.listen()
This code is telling the Express application to start listening for incoming HTTP requests on port 3000.


............................................................4.....................................................................................

created and connected mongodb database and used dotenv and enviroment variable as usage and safety


............................................................5.....................................................................................


created a user model you know how to inside user.model.js


............................................................6..................................................................

app.use here basically we are creating a test route to test whether they are working or not


............................................................7.................................................................

we created a route for authentication and its controller the route creation is simple only you know that 

inside the controller we made a async funtion why? -> Database operations, such as saving data, are typically asynchronous. They may take some time to complete, and you don't want to block the execution of other code while waiting for the database operation to finish.

inside this we just created a sample function and just put it inside the try and catch block

const { username, email, password } = req.body;
this line destructures the json data and can be used directly


............................................................8................................................................

export const signup = async (req, res, next) => 
in the auth file controller we added the next attribute in the parenthesis to error handle it helps handle error
in the index file we used app.use this the middleware to use in utils in error.js file
with the help of error middleware we made a error handler function 


............................................................9................................................................

Made a simple sign up page using flowbyte and tailwing

............................................................10................................................................


we are using an onchange event to call a function handle change for the inputs which are password username and email
fir on submiting we made a onsubmit listenar function will be handlesubmit since we will be saving data and we need to
 contact with database we use async function
since backend is on local host 3000 and front end is on local host 5500 we create proxy in viteconfigjs
made error msg and loading effect
after successful submission useNavigator is used to redirect to sign-in page
    

............................................................10................................................................


Made Footer of the website simple UI nothing else


............................................................11................................................................

create a auth route for sign-in page inside auth.route
similiar to sign-up we use this also 
but inorder to verify we would need jsonwebtoken
finone function is used in order to find the user exists or not with email search
bycrypt is used to compare the password
now understand the code

............................................................12................................................................

made the sign api and the ui of sign in page 
its ditto of sign up page with obvious change 
one thing was there that loading effect was still continuing for long time as we entered some wrong values in place of 
username password and email so its corrected by setting the loading effect false before the returning so done that


............................................................13................................................................


used redux to toolkit to save the data in front end
created store by seeing documentation
did all the necessary things on documentation
created userslicejs file 

according to our website we have only 3 states till now which is current user,error and loading
there are three reducers actually four
"reducers" refer to functions that specify how the state of 
an application changes in response to actions dispatched to the Redux store

 State represents the current data and the overall state of the application. In Redux, the state is typically a plain 
 JavaScript object that holds the entire state tree of your application.

 Actions are payloads of information that describe the intention to change the state. Actions are plain 
 JavaScript objects with a type property indicating the type of action and additional data if needed.
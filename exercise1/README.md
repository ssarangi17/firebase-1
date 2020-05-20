# Setting up the Project and SDK


As a first step for this exercise, we will create and configure a Firebase project. We will deploy this template project and access it to get basic understanding of Firebase.

Let us do the following:

0. Make sure that the firebase SDK is installed and you can execute the "firebase" commands.

e.g. "firebase"

1. Sign-in to the firebase.google.com

2. Create a Firebase project in the Firebase Console. Choose USA as location, as we will be keeping all our artifacts in USA location. Don't select the Google Analytics for the timebeing.

3. Do a walkthru of the Firebase console and the different features like Authentication, Database, Hosting, Functions etc

4. Register your app. In this step, we create a new App and register it with Firebase. Choose the "Web" type app when creating.

5. Now we will setup user authentication. 

Return to the Firebase Console for this step.

    Click on the Project Overview button in the left-hand navigation menu.

    Under the "Develop" header, select Authentication and then click on the Sign-in tab:

    From the list of Sign-in Providers, click on the pencil icon next to the Email/Passwd item.

    For the "Project support email" select your Google account from the drop down list and click the enable toggle in the top right corner.

    Once you have verified, click on the Save button.

6. Next we will setup the database. 
	In Firebase Console, Under the "Develop" header, select Database.
	You will be prompted to choose a database type. Choose Firestore.
	Select nam5 (United States) for your location and then click Create Database.  

7. Now we will setup the firebase SDK to use your new project and app.

a. In your laptop command prompt, run the following command to link your Google account with Firebase:

      firebase login --no-localhost

b. Enter in Y if asked if Firebase can collect error reporting information.

c. Copy and paste the URL generated in a new browser tab and press Enter (directly clicking on the link sometimes may take to a different browser etc, than the one where you are logged-in)

d. Login to your Google account and then click Allow. You will then be given an access code. Use that access code in the command prompt to link the SDK with the project.

You should receive output similar to the following response:

✔  Success! Logged in as xyz@gmail.com

8. Now initialize a new Firebase project in your current working directory:

	firebase init

Running this command will step you through setting up your project directory and Firebase products.

    You will be asked to select the Firebase CLI features you want set up in this folder. Use the arrow keys and the spacebar to select Firestore and Hosting. Ensure your shell matches the following and then hit Enter:

? Which Firebase CLI features do you want to set up for this folder? Press Space to select features, then Enter to confirm your choices.
	 ◯ Database: Deploy Firebase Realtime Database Rules
	 ◉ Firestore: Deploy rules and create indexes for Firestore
	 ◯ Functions: Configure and deploy Cloud Functions
	❯◉ Hosting: Configure and deploy Firebase Hosting sites
	 ◯ Storage: Deploy Cloud Storage security rules

Choose the Firestore, Functions, Hosting options.

    Then run through the rest of the steps to configure Firebase:

    Key down to Use an existing project and press Enter.
    Select your Firebase Project ID from the list then Enter.
    Select "Y" for all the options or as appropriate.
 
You should receive the output similar to following:

✔  Wrote public/404.html
✔  Wrote public/index.html

i  Writing configuration info to firebase.json...
i  Writing project information to .firebaserc...
i  Writing gitignore file to .gitignore...

✔  Firebase initialization complete!

The local configuration is now complete. 

9. Now we will deploy the project and run it.

Run the following command to deploy your firebase application:

	firebase deploy

You should receive the following output:

✔  Deploy complete!

Project Console: https://console.firebase.google.com/project/your-project/overview
Hosting URL: https://appname.web.app

    Copy the hosting URL (should resemble appname.web.app) and open it in a new tab. Now click on the Sign in with email:

Congrats! You have deployed a Firebase web app.


# Exercise-1 : Create a Skeleton app for setting Appointments


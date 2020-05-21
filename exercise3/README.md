
# Description of the Application to be created in the exercises:

In this and the next set of exercise, we will create a simple Inventory Management application using multi-page HTML for the UI and javascript for handling the event logic. The application will provide the following features :

* It will use the Firebase authentication, to register new users and authenticate existing users. We will use only the email-password authentication provider in this.

* It will have a customer.html page, in which the existing customer profile (email, name and phone) will be displayed. The user will add the details first time and can update them on subsequent logins.

* From the customer.html page, the user can navigate to inventory.html page. Each inventory entry is a tuple of {id, name, quantity, timestamp}. The inventory page will display the existing items and allow to Create/Update/Deelete items.

* **A Cloud Function will also be added to get triggered on any changes in the customer profile data and send an email to the customer saying there has been a change in his profile data.**

* Later a Cloud Function will be added to be invoked as a REST api and send the list of items types to the inventory page, to use in the list of valid item types.

# Exercise-3 : Create a Cloud Function to send an email to the customer, when profile data is changed.

In this iteration, we will create a Cloud Function and get it deployed.

1. In the functions/package.json, add the *nodemailer* module dependency.

1. In the functions/index.js, do the following :
   1. setup nodemailer configuration 
   1. setup firebase-admin configuration to access firestore and initialize
   1. Add the sendEmailConfirmation function to send the email

Steps to follow:
1. Copy the package.json and index.js files to <your-firebase-root>/functions folder. 

1. Deploy your firebase application:

	firebase deploy

1. Copy the hosting URL (should resemble appname.web.app) and open it in a new tab and check the application flow.

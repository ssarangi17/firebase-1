
# Description of the Application to be created in the exercises:

* In this and the next set of exercise, we will create a simple Inventory Management application using multi-page HTML for the UI and javascript for handling the event logic. The application will provide the following features :

* It will use the Firebase authentication, to register new users and authenticate existing users. We will use only the email-password authentication provider in this.

* **It will have a customer.html page, in which the existing customer profile (email, name and phone) will be displayed. The user will add the details first time and can update them on subsequent logins.**

* **From the customer.html page, the user can navigate to inventory.html page. Each inventory entry is a tuple of {id, name, quantity, timestamp}. The inventory page will display the existing items and allow to Create/Update/Deelete items.**

* A Cloud Function will also be added to get triggered on any changes in the customer profile data and send an email to the customer saying there has been a change in his profile data.

* Later a Cloud Function will be added to be invoked as a REST api and send the list of items types to the inventory page, to use in the list of valid item types.

# Exercise-2 : Save the Profile data, Display Inventory list and Save item data

In this iteration, we will add logic to customer.js and inventory.js scripts, to link relevant functions with authStateChanged and Button click events for data reading and writing logic.

1. Change the firestore.rules, to allow the user read/write his own record.

1. The styles.css will have the CSS for the elements used in customer and inventory pages.

1. In the customer.html page, we will add a link for Logging out, by simply redirecting to the index.html page itself.

1. In customer.js, at the onAuthStateChanged() event which will be called after the page load, read the existing customer data if any and assign to the appropriate elements.

1. In customer.js, set the Click event listener for the Save button to a function, which will save the changed data to the database.

1. In inventory.html, add the firebase sdk scripts. Also add input fields for item entry and buttons for CUD actions.

1. In inventory.js, at the onAuthStateChanged() event, read the existing inventory data and display it.

1. In inventory.js, set the Click event listener for the Create, Update and Delete buttons to functions, which will do the corresponding change in the database.


Steps to follow:
1. Copy the firestore.rules file to overwrite the existing one. 

1. Copy the following files from exercise2/public folder to <your-firebase-root>/public folder:
    * customer.html and customer.js
    * inventory.html and inventory.js
    * styles.js 

1. Deploy your firebase application:

	firebase deploy

1. Copy the hosting URL (should resemble appname.web.app) and open it in a new tab and check the application flow.

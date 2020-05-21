
# Description of the Application to be created in the exercises:

In this and the next set of exercise, we will create a simple Inventory Management application using multi-page HTML for the UI and javascript for handling the event logic. The application will provide the following features :

* **It will use the Firebase authentication, to register new users and authenticate existing users. We will use only the email-password authentication provider in this.**

* It will have a customer.html page, in which the existing customer profile (email, name and phone) will be displayed. The user will add the details first time and can update them on subsequent logins.

* From the customer.html page, the user can navigate to inventory.html page. Each inventory entry is a tuple of {id, name, quantity, timestamp}. The inventory page will display the existing items and allow to Create/Update/Deelete items.

* A Cloud Function will also be added to get triggered on any changes in the customer profile data and send an email to the customer saying there has been a change in his profile data.

* Later a Cloud Function will be added to be invoked as a REST api and send the list of items types to the inventory page, to use in the list of valid item types.

# Data Model
![ER Diagram(https://github.com/ssarangi17/firebase-1/blob/master/er-diagram.png)

# Exercise-1 : Create a Skeleton app without any data read or update logic

In the first iteration, we will only create a skeleton application with the authentication working, links enabled, but no data reading or writing logic.

1. The index.html will be our landing page. In this page, the firebase authentication configuration will be done, only for email-password provider. On successful authentication, firebase sdk will redirect to customer.html page.

1. The customer.html will display the user.email as a label and also display two input fields to enter the Name and Phone. All the event handling and Firebase interaction logic will be in customer.js script file. In this exercise, the customer.cs file will not have any code, so the Save function will not work.

1. The inventory link will take the user to the inventory.html page. In this exercise, the inventory.html page is empty and so is the javascript file.


Steps to follow:
1. Copy the following files from exercise1/public folder to <your-firebase-root>/public folder:
    * _index.html_
    * _customer.html_ and _customer.js_
    * _inventory.html_ and _inventory.js_
    * _styles.js_ 

1. Deploy your firebase application:

	```firebase deploy```

1. Copy the hosting URL (should resemble appname.web.app) and open it in a new tab and check the application flow.

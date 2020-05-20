
# Description of the Application to be created in the exercises:

In this and the next set of exercise, we will create a simple Appoinment making application using multi-page HTML for the UI and javascript for handling the event logic. The application will provide the following features :

* It will use the Firebase authentication, to register new users and authenticate existing users. We will use only the email-password authentication provider in this.

* **It will have a customer.html page, in which the existing customer profile (email, name and phone) will be displayed. The user will add the details first time and can update them on subsequent logins.**

* **From the customer.html page, the user can navigate to appointments.html page. Each appointment is a time value in "day date month hh:mm" format. The appointment  page will display the existing appointment times and also list a set of new appointments. The list of new appointments will be created using random values, aligning with hour boundaries.**

* A Cloud Function will also be added to get triggered on any changes in the customer profile data and send an email to the customer saying there has been a change in his profile data.

* Later a Cloud Function will be added to be invoked as a REST api and send the list of appointments to the appointments page, replacing the local logic of generating the appointment list.

# Exercise-2 : Save the Profile data, Display Appointment list and Save Appointment data

In this iteration, we will add logic to customer.js and appointment.js scripts, to link relevant functions with authStateChanged and Button click events for data reading and writing logic.

1. Change the firestore.rules, to allow the user read/write his own record.

1. The styles.css will have the CSS for the elements used in customer and appointment pages.

1. In the customer.html page, we will add a link for Logging out, by simply redirecting to the index.html page itself.

1. In customer.js, at the onAuthStateChanged() event which will be called after the page load, read the existing customer data if any and assign to the appropriate elements.

1. In customer.js, set the Click event listener for the Save button to a function, which will save the chnaged data to the database.

1. In appointments.html, add the firebase sdk scripts. Also add dropdown list for appointment slots and a button for Save action.

1. In appointments.js, after page load, create a list of open timeslots and add it to the dropdown list. 

1. In appointments.js, at the onAuthStateChanged() event, read the existing appointment data and display it.

1. In appointments.js, set the Click event listener for the Save button to a function, which will save the changed data to the database.


Steps to follow:
1. Copy the firestore.rules file to overwrite the existing one. 

1. Copy the following files from exercise1/public folder to <your-firebase-root>/public folder:
    * customer.html and customer.js
    * appointments.html and appointments.js
    * styles.js 

1. Deploy your firebase application:

	firebase deploy

1. Copy the hosting URL (should resemble appname.web.app) and open it in a new tab and check the application flow.
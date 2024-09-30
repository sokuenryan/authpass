# Auth-FirePass:
### A Simple Login/Register Setup
This is a sign-in template built with Firebase Authentication for security. The template allows users to sign up, log in, and manage authentication easily. You can install and customize it to suit your needs.

### Inspiration
**Based on the principle** ***RE-USE DON'T REDO***
A simple but powerful statement. It's what lead me to create this login/register template so that I don't have to remake one every time I'm beginning a new project.

## Features
- User sign-up and login
- Firebase Authentication integration
- Email/password-based authentication
  
# Login Page of Awesomeness
![Alt text](./public/login.png)

# Register Page of Awesomeness
![Alt text](./public/register.png)


# A Watched Pot Never Boils
This is basically just a boiler template. But it not going to be of much use if it don't get used. So, let's get this started!

## Prerequisites
1. **Node.js**: Ensure that you have Node.js installed on your system. You can download it from [here](https://nodejs.org/).
2. **Firebase Account**: You'll need to create a Firebase account and set up a Firebase project for managing authentication.

## Installation

  1. **Clone the Repository**
       First, clone this repository to your local machine:
       ```bash
         git clone https://github.com/your-username/Auth-FirePass.git

  2. Navigate to the Project Directory
       Move into the project folder:
      ```bash
         cd sign-in-template

  3. Install Dependencies
    Run the following command to install all necessary dependencies, including Firebase:
     ```bash
         npm install

5. Set Up Firebase

***This template uses Firebase Authentication with your own Firebase credentials. Follow the steps below to set up your Firebase project.***

## Firebase Setup Instructions:
### Create a Firebase Project:

**Go to Firebase Console.**
Click "Add project" and follow the steps to create a new project.

**Enable Authentication:**
In your Firebase project, navigate to the "Authentication" tab.
Click "Get started" and enable "Email/Password" sign-in method under the "Sign-in method" tab.

### Add Firebase to Your Web App:

   1. In the Firebase console, click the gear icon next to "Project Overview" and select "Project settings."
   2. Scroll down to the "Your apps" section and select the </> (Web) icon to create a new web app.
   3. Firebase will provide a configuration object, which you'll need for the next step.

# 5. Configure Firebase in the Project

**In the root of your project, create a .env file to store your Firebase configuration:**
    ```bash
      
      touch.env

Then, open the .env file and add your Firebase configuration:
    ```bash
    
            VITE_FIREBASE_API_KEY=your-api-key
            VITE_FIREBASE_AUTH_DOMAIN=your-auth-domain
            VITE_FIREBASE_PROJECT_ID=your-project-id
            VITE_FIREBASE_STORAGE_BUCKET=your-storage-bucket
            VITE_FIREBASE_MESSAGING_SENDER_ID=your-messaging-sender-id
            VITE_FIREBASE_APP_ID=your-app-id  
 
Replace the placeholders (e.g., your-api-key) with the values from your Firebase web app configuration.

# 6. Start the Application

**After configuring Firebase, you can start the application by running:**
    ```bash
    
      npm run dev
      
This will start the development server, and you can now access the sign-in page locally.

# Usage

Here’s a README.md template for your sign-in repository that explains how to set up the project and configure Firebase Authentication.

README.md Template:
markdown
Copy code
# Sign-In Template

This is a sign-in template built with Firebase Authentication for security. The template allows users to sign up, log in, and manage authentication easily. You can install and customize it to suit your needs.

## Features
- User sign-up and login
- Firebase Authentication integration
- Email/password-based authentication

## Prerequisites

1. **Node.js**: Ensure that you have Node.js installed on your system. You can download it from [here](https://nodejs.org/).
2. **Firebase Account**: You'll need to create a Firebase account and set up a Firebase project for managing authentication.

## Installation

1. **Clone the Repository**

   First, clone this repository to your local machine:
   ```bash
   
   git clone https://github.com/your-username/sign-in-template.git
   
Navigate to the Project Directory

Move into the project folder:
    ```bash
    
    cd sign-in-template
    Install Dependencies

Run the following command to install all necessary dependencies, including Firebase:
    ```bash
    
    npm install
    Set Up Firebase

This template uses Firebase Authentication ***with your own Firebase credentials***. Follow the steps below to set up your Firebase project.

## Firebase Setup Instructions:
### Create a Firebase Project:

**Go to Firebase Console.**
Click "Add project" and follow the steps to create a new project.
Enable Authentication:

In your Firebase project, navigate to the "Authentication" tab.
Click "Get started" and enable "Email/Password" sign-in method under the "Sign-in method" tab.
Add Firebase to Your Web App:

In the Firebase console, click the gear icon next to "Project Overview" and select "Project settings."
Scroll down to the "Your apps" section and select the </> (Web) icon to create a new web app.
Firebase will provide a configuration object, which you'll need for the next step.
Configure Firebase in the Project

In the root of your project, create a .env file to store your Firebase configuration:
    ```bash
    
      touch .env
Then, open the .env file and add your Firebase configuration:

  ```bash
  VITE_FIREBASE_API_KEY=your-api-key
  VITE_FIREBASE_AUTH_DOMAIN=your-auth-domain
  VITE_FIREBASE_PROJECT_ID=your-project-id
  VITE_FIREBASE_STORAGE_BUCKET=your-storage-bucket
  VITE_FIREBASE_MESSAGING_SENDER_ID=your-messaging-sender-id
  VITE_FIREBASE_APP_ID=your-app-id
  Replace the placeholders (e.g., your-api-key) with the values from your Firebase web app configuration.

Start the Application

After configuring Firebase, you can start the application by running:

bash
Copy code
npm run dev
This will start the development server, and you can now access the sign-in page locally.

# Usage
**Once the application is running, you will be able to:**

- Sign up new users using email/password.
- Log in with registered credentials.
- Manage user authentication using Firebase.

# Customization
- You can modify the sign-in form and other components to fit your design needs.
- Update Firebase security rules to fit your application’s requirements if necessary.

# Firebase Authentication Management
**To manage your users and view authentication activity:**

   1. Go to the Firebase Console.
   2. Navigate to the "Authentication" section.
   3. Here, you can manage registered users, authentication logs, and more.

# Contributing
Feel free to submit a pull request if you'd like to contribute to this project.

# License
MIT License


### Explanation of Sections:
1. **Prerequisites**: Mentions that the user will need Node.js and a Firebase account.
2. **Installation**: Guides the user through cloning the repository, installing dependencies, and setting up Firebase.
3. **Firebase Setup**: Explains how to create a Firebase project, enable Authentication, and retrieve the configuration to be stored in the `.env` file.
4. **Usage**: Informs the user of basic application functionality after setup.
5. **Customization**: Offers room for further modification to the template.
6. **Firebase Authentication Management**: Explains how to manage Firebase Authentication once the project is live.

### Firebase Considerations:
- Since the current template uses your Firebase project, you'll need to ensure the user sets up their own Firebase project and fills in the correct credentials in the `.env` file.
- Encourage users to follow best practices by using their own Firebase keys instead of relying on your credentials.

With this setup, other developers can easily install and configure their own Firebase projects, making your template reusable and secure.

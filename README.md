![AI-Sketch](./public/AI-sketch.png)
# AuthPass

AuthPass is a boiler plate set-up using Firebase Authentication providing a simple setup for user authentication with a pre-built login and registration page.

## Features

- **Firebase Authentication**: Seamlessly integrate Firebase Auth for user authentication.
- **Pre-configured Pages**: Includes pre-built pages for Login and Registration.

## Pre-Reqs
- **Vite** Uses Vite as a build platform
- **Firebase Auth** Uses Firebase Authentication for password security. Feel free to grab any other hosting services, there are plenty of free ones!

  
Login Page
![Login](./public/login.png)

Register Page
![Register](./public/register.png)

# Starting Set Up
Before you get started there are a few quick steps you need to do to make sure AuthPass works correctly. 

### Step 1: Clone the repository
  - Go to your specfic file directory
    ```bash
      cd path/to/your/directory
    ```
  - Copy the following and past into your terminal: 
    ```bash
      git clone https://github.com/sokuenryan/AuthPass.git
    ```
  - Open AuthPass folder in your directory
    ```bash
      cd path/to/your/directory/AuthPass
    ```

### Step 2: Run the following commands in your terminal
AuthPass uses Vite builder and react-icons for icon use. Run the following commands and ensure everything is working correctly. 

```bash
    npm install @vitejs/plugin-react
    npm install react-icons
```

# Firebase Setup
To use the authentication functionality provided by **AuthPass**, you'll need to set up a Firebase account and project. This is required because Firebase Authentication handles the login and registration processes. Follow these simple steps to configure Firebase for your app:

### 1. Create a Firebase Project
- Go to [https://console.firebase.google.com](https://console.firebase.google.com/). and sign in.
- Click on **Add Project**.
- Enter your project name and click **Continue**.
- Disable **Google Analytics** (if you don't need it), then click **Create Project**.

 ![enable-analytics](./public/firebase--enable-analytics.png)

 
- Once your project is created, click **Continue** to open the project dashboard.

  You should be at a page that looks like this:
  ![firebase-adding-app](./public/firebase--add-app.png)

## 2. Add Firebase to Your Web App
- In your Firebase project, click on the `</>` (Web) icon to create a new Web app.
- Register the app with a name of your choice, then click **Register App**.

![register-app](public/firebase--register-firebase.png)

## 3. Update `firebase-config.js`
- Replace the default configuration below with **your own Firebase project's credentials.**

# IMPORTANT!: 
`### ***This part contains sensative information! When creating your github repo be EXTRA SURE to hide this in your .gitignore file for security and privacy reasons.***`
![firebase-sdk](./public/firebase--copy-SDK.png)

- Firebase will provide a configuration object with API keys.
- Copy adn replace **only this information** (***seen below***) and skip or delete everything else
- Then continue to the next step.
```jsx
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
};
```

## 4. Enable Firebase Authentication

- In the Firebase console, go to **Authentication** in the left sidebar.
- Click on **Get Started** and enable the sign-in methods you want (e.g., Email/Password, Google).
![sign-in-options](./public/firebase--auth-options.png)

### Congratulations! Your Firebase Authentication is now ready!

#### 5. Testing the Setup
After setting up Firebase and updating the config file, you're ready to use the login and register pages in **AuthPass**. Simply run your project, and you should be able to authenticate users through Firebase.

---

By following these steps, you'll be able to leverage Firebase's authentication system within `AuthPass`.

### License 
This project is licensed under the MIT License.

### Contributing
Feel free to submit issues or pull request for improvements and new features!

### Customization

- **Add More Details**: You can expand on sections like Usage or Features depending on what you want to convey to users.
- **Include Screenshots**: If you have any screenshots of the login/register pages, you can include them to help users visualize the package.
- **Contributing Guidelines**: If you want to encourage contributions, you might add specific guidelines for contributors.

Feel free to modify any parts to better suit your style or the specifics of your package! If you need more adjustments or additional sections, just let me know!






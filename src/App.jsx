import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Pages
import Login from './pages/Login.jsx';
import Nav from './components/Nav.jsx';
import Register from './pages/Register.jsx';
import Error from './pages/Error.jsx';
import Homepage from './pages/Homepage.jsx';

// Auth
import { AuthProvider } from './auth/authContext.jsx';
import PrivateRoute from './auth/privateRoute.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <Nav/>
        <Login />
      </>
    ),
    errorElement: <Error />
  },
  {
    path: '/register',
    element: (
      <>
        <Nav />
        <Register />
      </>
    ),
    errorElement: <Error />
  },
  {
    path: "/homepage",
    element: (
      <>
        <Nav />
        <PrivateRoute element={Homepage} />
      </>
    )
  }
])

const App = () => {
  return (
    <AuthProvider>
      <div className='App'>
        <RouterProvider router={router} />
      </div>
    </AuthProvider>
  );
};

export default App;
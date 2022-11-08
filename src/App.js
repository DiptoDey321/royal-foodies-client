import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import Layout from './Layout/Layout';

function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element : <Layout></Layout>,
      children : [
        {
          path:'/',
          element : <Home></Home>
        },
        {
          path:'/login',
          element : <Login></Login>
        },
        {
          path:'/register',
          element : <Register></Register>
        }
      ]
    },
   
  ])
  return (
    <div className= "">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;

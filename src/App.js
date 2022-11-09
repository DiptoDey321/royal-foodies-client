import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import ServiceDetails from './Components/Service-Details/ServiceDetails';
import Services from './Components/Services/Services';
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
          path:'/services',
          loader: ()=> fetch('http://localhost:5000/allServices'),
          element : <Services></Services>
        },
        {
          path:'/service-details/:id',
          element : <ServiceDetails></ServiceDetails>
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

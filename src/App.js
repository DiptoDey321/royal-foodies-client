import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import AddService from './Components/Add-a-service/AddService';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import MyReview from './Components/My-reviews/MyReview';
import Register from './Components/Register/Register';
import ServiceDetails from './Components/Service-Details/ServiceDetails';
import Services from './Components/Services/Services';
import Layout from './Layout/Layout';
import PrivateRoute from './Private-Routing/PrivateRoute';

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
          path:'/my-review',
          element : <PrivateRoute><MyReview></MyReview></PrivateRoute>
        },
        {
          path:'/add-service',
          element : <PrivateRoute><AddService></AddService></PrivateRoute>
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

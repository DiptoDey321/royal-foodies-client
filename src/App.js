import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import AddService from './Components/Add-a-service/AddService';
import Blog from './Components/Blogs/Blog';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import MyReview from './Components/My-reviews/MyReview';
import NotFoundPage from './Components/Not-found-page/NotFoundPage';
import Register from './Components/Register/Register';
import ServiceDetails from './Components/Service-Details/ServiceDetails';
import Services from './Components/Services/Services';
import UpdateReview from './Components/UpdateReview/UpdateReview';
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
          element : <Services></Services>
        },
        {
          path:'/service-details/:id',
          element : <ServiceDetails></ServiceDetails>
        },
        {
          path:'/blog',
          element : <Blog></Blog>
        },
        {
          path:'/my-review',
          element : <PrivateRoute><MyReview></MyReview></PrivateRoute>
        },
        {
          path:'/edit-review/:id',
          loader : ({params})=> fetch(`http://localhost:5000/comments/${params.id}`),
          element : <PrivateRoute><UpdateReview></UpdateReview></PrivateRoute>
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
    {
      path:'*',
      element : <NotFoundPage></NotFoundPage>
    }
   
  ])
  return (
    <div className= "">
      <RouterProvider router={router}></RouterProvider>
      <ToastContainer />
    </div>
  );
}

export default App;

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
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

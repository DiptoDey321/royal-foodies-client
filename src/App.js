import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Layout from './Layout/Layout';

function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element : <Layout></Layout>
    }
  ])
  return (
    <div className="bg-[#f8f8f8]">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;

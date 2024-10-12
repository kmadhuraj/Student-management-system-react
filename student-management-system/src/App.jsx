import './App.css'
import HomePage from './components/pages/HomePage';
import RegisterPage from './components/common/sub-component/RegisterPage';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage></HomePage>,
    },
    {
      path: "/register-page",
      element: <RegisterPage></RegisterPage>,
    },
  ]);

  return (
    <>
     <RouterProvider router={router} />
    </>
  )
}

export default App

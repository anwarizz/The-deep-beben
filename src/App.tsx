import { createBrowserRouter, RouterProvider } from 'react-router-dom' // Outlet (optional)
import Home from './pages/Home'

function App() {

  const router = createBrowserRouter([
    {
      path: '/', 
      element: <Home />
    }
  ])

  return (
    <RouterProvider router={router} />
  )
}

export default App

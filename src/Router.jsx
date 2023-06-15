import { createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import Post from '../src/components/Post'
import Labs from './pages/Labs'







export const Router = createBrowserRouter([
  
        {
            path: '/',
            element : <Home />,

        },
        { path: '/post',
        element : <Post />,
        },
        {
            path: '/lab',
            element : <Labs />,
        },
   
])
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Layout from './Layout.jsx'
import { createRoutesFromElements, RouterProvider, Route,createBrowserRouter } from 'react-router-dom'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Project from './components/Projects/Project.jsx'
import Contact from './components/Contact/Contact.jsx'



const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/>}/>
      <Route path='/About' element={<About/>}/>
      <Route path='/project' elemnt={<Project/>}/>
      <Route path='/contact' elemnt={<Contact/>}/>



    </Route>
  )


)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>

    
  </StrictMode>,
)

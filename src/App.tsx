import Blog from 'pages/admin/pages/blog'
import Home from 'pages/home'
import Pagenotfound from 'pages/404'
import './pages/components/style2.css'
import { Fragment } from 'react'
import { ToastContainer } from 'react-toastify'
import { Routes, Route, Router } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css'
import Login from 'pages/login'
import Register from 'pages/register'
import Dashboard from 'pages/admin/pages/dashboard'
import Blogshow from 'pages/blog'
import ProtectedRoute, { ProtectedRouteProps } from 'utils/protected'
import Contacts from 'pages/contacts'
import Message from 'pages/admin/pages/message'
import './pages/components/style2.css'
import './index.css'
import Heroes from 'pages/heroes/Heroes'
import HeroDetail from 'pages/heroes/components/HeroDetail/HeroesDetail'
function App() {
  const defaultProtectedRouteProps: Omit<ProtectedRouteProps, 'outlet'> = {
    isAuthenticated: localStorage.getItem('token'),
    authenticationPath: '/login'
  }

  return (
    <Fragment>
      <ToastContainer />
      <Routes>
        <Route path='admin' element={<ProtectedRoute {...defaultProtectedRouteProps} outlet={<Dashboard />} />} />
        <Route path='admin/blog' element={<ProtectedRoute {...defaultProtectedRouteProps} outlet={<Blog />} />} />
        <Route
          path='admin/contacts'
          element={<ProtectedRoute {...defaultProtectedRouteProps} outlet={<Message />} />}
        />
        <Route path='blog' element={<Blogshow />} />
        <Route path='heroes/:id' element={<HeroDetail />} />
        <Route path='contacts' element={<Contacts />} />
        <Route path='heroes' element={<Heroes />} />
        <Route path='home' element={<Home />} />
        <Route path='/' element={<Home />} />
        <Route path='login' element={<Login />} />
        <Route path='register' element={<Register />} />
        <Route path='*' element={<Pagenotfound />} />
      </Routes>
    </Fragment>
  )
}

export default App

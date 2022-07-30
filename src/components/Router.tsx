import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../routes/Home'
import Auth from './../routes/Auth'

interface PropTypes {
  isLogged: object | null
}

const Router = ({ isLogged }: PropTypes) => {
  return (
    <Routes>
      {isLogged ? <Route path="/" element={<Home />} /> : <Route path="/" element={<Auth />} />}
    </Routes>
  )
}
export default Router

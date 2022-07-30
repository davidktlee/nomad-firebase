import React, { useState } from 'react'
import Router from './Router'
import { authService } from '../fbase'

const App = () => {
  console.log()
  const [isLogged, setIsLogged] = useState(authService.currentUser)
  return (
    <>
      <Router isLogged={isLogged} />
      <footer>&copy; KTwitter {new Date().getFullYear()}</footer>
    </>
  )
}

export default App

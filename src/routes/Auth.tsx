import React, { useState } from 'react'
import { authService } from '../fbase'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'

const Auth = () => {
  const [userInput, setUserInput] = useState({
    email: '',
    password: '',
  })
  const [newAccount, setNewAccount] = useState(true)
  const changeUserInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target
    setUserInput({ ...userInput, [name]: value })
  }
  const sumbitUserInputHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    let data
    try {
      if (newAccount) {
        data = await createUserWithEmailAndPassword(
          authService,
          userInput.email,
          userInput.password
        )
      } else {
        data = await signInWithEmailAndPassword(authService, userInput.email, userInput.password)
      }
    } catch (err) {
      console.log(err)
    }
    console.log(data)
  }
  return (
    <div>
      <form onSubmit={sumbitUserInputHandler}>
        <input
          type="email"
          placeholder="email"
          name="email"
          required
          value={userInput.email}
          onChange={changeUserInputHandler}
        />
        <input
          type="password"
          placeholder="password"
          name="password"
          required
          value={userInput.password}
          onChange={changeUserInputHandler}
        />

        <input type="submit" value={newAccount ? 'Sign Up' : 'Sign In'} />
      </form>
      <div>
        <button>Continue with Google</button>
        <button>Continue with Github</button>
      </div>
      <span>Auth</span>
    </div>
  )
}
export default Auth

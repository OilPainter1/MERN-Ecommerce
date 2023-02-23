import { useState } from "react"
import { useMutation } from "@apollo/client"
import Auth from '../utils/auth'
import { LOGIN_USER } from '../utils/mutations'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [login, { loading, error }] = useMutation(LOGIN_USER)

    const handleSubmit = async (e) => {
        e.preventDefault()
        const { data } = await login({
            variables: {
                email,
                password,
            }
        })
        Auth.login(data.login.token)
    }
    return (
      <form onSubmit={handleSubmit}>
        <div class="form-group">
          <h3>Login</h3>
          <label for="exampleInputEmail1">Email address</label>
          <input 
            type="email" 
            class="form-control" 
            id="exampleInputEmail1" aria-describedby="emailHelp" 
            placeholder="Enter email" 
            value={email} 
            onChange={e => setEmail(e.target.value)}
          />        
          <small id="emailHelp" class="form-text text-muted"/>
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input 
            type="password" 
            class="form-control" 
            id="exampleInputPassword1" 
            placeholder="Password"
            value={password} 
            onChange={e => setPassword(e.target.value)}/>
        </div>
       
        <button type="submit" class="btn btn-dark">Submit</button>
      </form>)
}

export default Login


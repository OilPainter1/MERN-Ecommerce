import { useState } from "react"
import { useMutation } from "@apollo/client"
import Auth from '../utils/auth'
import { LOGIN } from '../utils/mutations'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [login, { loading, error }] = useMutation(LOGIN)

    const handleSubmit = async (e) => {
        e.prevent.Default()
        const { data } = await login({
            variables: {
                email,
                password,
            }
        })
        Auth.login(data.login.token)
    }
    return (<form>
        <div class="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"></input>
          <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"></input>
        </div>
        <div class="form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1"></input>
          <label class="form-check-label" for="exampleCheck1">Check me out</label>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>)
}

export default Login


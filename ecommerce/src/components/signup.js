import { useState } from "react"
import { useMutation } from "@apollo/client"
import Auth from '../utils/auth'
import { ADD_USER } from '../utils/mutations'

const SignUpForm = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [signup, { loading, error }] = useMutation(ADD_USER)

    const handleSubmit = async (e) => {
        e.prevent.Default()
        const { data } = await signup({
            variables: {
                email,
                password
            }
        })
        Auth.signup(data.signup.token)
    }
    return (
    <form>
        <div class="form-group">
          <h3>Sign Up</h3>
          <label for="exampleInputEmail1">Email address</label>
          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"></input>
          <small id="emailHelp" class="form-text text-muted"></small>
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
      </form>
      )
}

export default SignUpForm
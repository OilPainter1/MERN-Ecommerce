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
    return (null)
}
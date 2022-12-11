import {useState} from 'react'
import { Link, useNavigate} from 'react-router-dom'

const Login = (props) => {
    const [user, setUser] = useState({email: '', password: ''})

    // replaces the Link hook due to Link hook preventing submit of form.
    const navigate = useNavigate()

    const handleChange = (e) => {
        setUser({...user, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) => {
      e.preventDefault()
      props.handleLogin(user)
      navigate('/dashboard')
    }

    return (
        <>
        
            <div className="login-page">
                <div className="container-fluid login-box form-group align-items-center d-flexcolumn shadow">
                    <div className="mt-5 mx-5">
                        <h2>Login to see your stylized clothes!</h2>
                    </div>
                    <form onSubmit={handleSubmit} className="d-block row p-5 w-75 m-auto">

                        <label htmlFor='email'>Email</label>
                        <input className="form-control" type="email" name="email" onChange={handleChange}></input>

                        <label htmlFor='password'>Password:</label>
                        <input className="form-control" type="password" name="password" onChange={handleChange}></input>

                        <input className="btn btn-info my-5" type="submit" value="Login"/>
                    </form>           
                </div> 
                <div className="already have an account? Log in here"></div>              
            </div>
        </>
    )
}

export default Login
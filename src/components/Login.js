import {useState} from 'react'

const Login = (props) => {

    return (
        <>
            <div className="login-page">
                <div className="container-fluid login-box form-group align-items-center d-flexcolumn shadow">
                    <div className="mt-5 mx-5">
                        <h2>Login to see your stylized clothes!</h2>
                    </div>
                    <form className="d-block row p-5 w-75 m-auto">

                        <label htmlFor='email'>Email</label>
                        <input className="form-control" type="text"></input>

                        <label htmlFor='password'>Password:</label>
                        <input className="form-control" type="text"></input>

                        <input className="btn btn-info my-5" type="submit" value="Login"/>
                    </form>           
                </div> 
                <div className="already have an account? Log in here"></div>              
            </div>
        </>
    )
}

export default Login
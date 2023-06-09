import { useState } from 'react';
import Auth from '../utils/auth';



function SignupForm() {
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [usernameError, setUsernameError] = useState(false)
    const [emailError, setEmailError] = useState(false)
    const [passwordError, setPasswordError] = useState(false)
    const [usernameErrorMessage, setUsernameErrorMessage] = useState("")
    const [emailErrorMessage, setEmailErrorMessage] = useState("")
    const [passwordErrorMessage, setPasswordErrorMessage] = useState("")

    const handleFormsubmit = async (e) => {
        e.preventDefault()
        if (usernameError || emailError || passwordError) return
        const res = await fetch('/api/users/', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: username,
                email: email,
                password: password
            })
        })
        const { token, user } = await res.json()
        Auth.login(token)
        // console.log(data)
    }
    const handleUsernameChange = (e) => {
        setUsername(e.target.value)
        if (e.target.value === "") {
            setUsernameError(true)
            setUsernameErrorMessage("must enter a username")
        } else {
            setUsernameError(false)
            setUsernameErrorMessage("")
        }
    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value)
        if (e.target.value === "") {
            setEmailError(true)
            setEmailErrorMessage("must enter a valid email")
        } else {
            setEmailError(false)
            setEmailErrorMessage("")
        }
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
        if (e.target.value === "") {
            setPasswordError(true)
            setPasswordErrorMessage("must enter a password")
        } else {
            setPasswordError(false)
            setPasswordErrorMessage("")
        }
    }

    return (
        <div className="flex flex-col w-full h-full justify-center place-items-center">
            <form onSubmit={handleFormsubmit} className="flex flex-col border border-black bg-slate-800 rounded-xl w-[300px] p-4 justify-center bg-gradient-to-r from-slate-800 to-slate-700">
                <label className="my-4">
                    <input className="rounded w-full p-2" placeholder="username" name="username" type="text" value={username} onChange={handleUsernameChange} />
                    <div className={`${usernameError ? "visible" : "invisible"} h-4 text-red-600`}>{usernameErrorMessage}</div>
                </label>
                <label className="my-4">
                    <input className="rounded w-full p-2" placeholder="email" name="email" type="email" value={email} onChange={handleEmailChange} />
                    <div className={`${emailError ? "visible" : "invisible"} h-4 text-red-600`}>{emailErrorMessage}</div>
                </label>
                <label className="my-4">
                    <input className="rounded w-full p-2" placeholder="password" name="password" type="password" value={password} onChange={handlePasswordChange} />
                    <div className={`${passwordError ? "visible" : "invisible"} h-4 text-red-600`}>{passwordErrorMessage}</div>
                </label>
                <button type="submit" className="font-sans font-normal bg-blue-300 hover:bg-blue-500 active:bg-blue-400 p-2 rounded-lg text-lg focus:outline-none focus:ring focus:ring-blue-200">
                    Create Profile
                </button>
            </form>
        </div>
    )
};

export default SignupForm;
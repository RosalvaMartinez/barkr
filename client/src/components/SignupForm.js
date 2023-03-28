import { useState } from 'react';



function SignupForm() {
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState(false)
    const [usernameErrorMessage, setUsernameErrorMessage] = useState("")
    const [emailErrorMessage, setEmailErrorMessage] = useState("")
    const [passwordErrorMessage, setPasswordErrorMessage] = useState("")

    const handleFormsubmit = async (e) => {
        e.preventDefault()
        if (error) return
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
        const data = await res.json()
        console.log(data)
    }
    const handleUsernameChange = (e) => {
        setUsername(e.target.value)
        if (e.target.value === "") {
            setError(true)
            setUsernameErrorMessage("must enter a username")
        } else {
            setError(false)
            setUsernameErrorMessage("")
        }
    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value)
        if (e.target.value === "") {
            setError(true)
            setEmailErrorMessage("must enter a valid email")
        } else {
            setError(false)
            setEmailErrorMessage("")
        }
    }
    
    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
        if (e.target.value === "") {
            setError(true)
            setPasswordErrorMessage("must enter a password")
        } else {
            setError(false)
            setPasswordErrorMessage("")
        }
    }

    return (
        <div className="flex flex-col w-full h-full justify-center place-items-center">
            <form onSubmit={ handleFormsubmit } className="flex flex-col border border-black bg-slate-900 rounded-xl w-fit p-4 justify-center">
                <label className="">
                    <span className=" text-lg font-medium text-slate-300">Username:</span>
                    <input className="rounded" name="username" type="text" value={ username } onChange={ handleUsernameChange } />
                    <span className="text-red-600">{ usernameErrorMessage }</span>
                </label>
                <label className="">
                    <span className=" text-lg font-medium text-slate-300">Email:</span>
                    <input className="rounded" name="email" type="email" value={ email } onChange={ handleEmailChange } />
                    <span className="text-red-600">{ emailErrorMessage }</span>
                </label>
                <label className="">
                    <span className=" text-lg font-medium text-slate-300">Password:</span>
                    <input className="rounded" name="password" type="password" value={ password } onChange={ handlePasswordChange } />
                    <span className="text-red-600">{ passwordErrorMessage }</span>
                </label>
                <button type="submit" className="font-sans font-normal bg-blue-300 hover:bg-blue-500 active:bg-blue-400 p-2 rounded-lg text-lg focus:outline-none focus:ring focus:ring-blue-200">
                    Create Profile
                </button>
            </form>
        </div>
    )
};

export default SignupForm;
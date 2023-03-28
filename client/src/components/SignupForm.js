import { useState } from 'react';



function SignupForm() {
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleFormsubmit = async (e) => {
        e.preventDefault()
    
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

    return (
        <div className="flex flex-col w-full h-full justify-center place-items-center">
            <form onSubmit={ handleFormsubmit } className="flex flex-col border border-black bg-slate-900 rounded-xl w-fit p-4 justify-center">
                <label className="block">
                    <span className="block text-lg font-medium text-slate-300">Username:</span>
                    <input name="username" type="text" value={ username } onChange={ (e) => setUsername(e.target.value) } className=" rounded peer ..." />
                </label>
                <label className="block">
                    <span className="block text-lg font-medium text-slate-300">Email:</span>
                    <input name="email" type="email" value={ email } onChange={ (e) => setEmail(e.target.value) } className="rounded peer ..." />
                    <p className="mt-2 invisible peer-invalid:visible text-red-600 text-md">
                        Please provide a valid email address.
                    </p>
                </label>
                <label className="block">
                    <span className="block text-lg font-medium text-slate-300">Password:</span>
                    <input name="password" type="password" value={ password } onChange={ (e) => setPassword(e.target.value) } className="rounded peer ..." />
                    <p className="mt-2 invisible peer-invalid/password:visible text-red-600 text-md">
                        Please provide a password you will remember.
                    </p>
                </label>
                <button type="submit" className="font-sans font-normal bg-blue-300 hover:bg-blue-500 active:bg-blue-400 p-2 rounded-lg text-lg focus:outline-none focus:ring focus:ring-blue-200 ...">
                    Create Profile
                </button>
            </form>
        </div>
    )
};

export default SignupForm;
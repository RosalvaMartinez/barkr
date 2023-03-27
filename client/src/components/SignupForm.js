
function SignupForm() {
    return (
        <div className="flex flex-col w-full h-full justify-center place-items-center">
            <form className="flex flex-col border border-black bg-slate-300 rounded-xl w-fit p-4 justify-center">
                <label className="block">
                    <span className="block text-lg font-medium text-slate-700">Username:</span>
                    <input type="username" className=" rounded peer ..." />
                </label>
                <label className="block">
                    <span className="block text-lg font-medium text-slate-700">Email:</span>
                    <input type="email" className="rounded peer ..." />
                    <p className="mt-2 invisible peer-invalid:visible text-pink-600 text-md">
                        Please provide a valid email address.
                    </p>
                </label>
                <label className="block">
                    <span className="block text-lg font-medium text-slate-700">Password:</span>
                    <input type="email" className="rounded peer ..." />
                    <p className="mt-2 invisible peer-invalid:visible text-pink-600 text-md">
                        Please provide a password you will remember.
                    </p>
                </label>
                <button className="bg-violet-500 hover:bg-violet-600 active:bg-violet-700 p-2 rounded-lg text-lg focus:outline-none focus:ring focus:ring-violet-300 ...">
                    Create Profile!
                </button>
            </form>
        </div>
    )
};

export default SignupForm;
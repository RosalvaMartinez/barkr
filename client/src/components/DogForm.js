function DogForm() {
    return (
        <div className="flex flex-col w-full h-full justify-center place-items-center">
            <form className="flex flex-col border border-black bg-slate-900 rounded-xl w-fit p-4 justify-center">
                <h1>
                    
                </h1>
                <label className="block">
                    <span className="block text-lg font-medium text-slate-300">My dogs name:</span>
                    <input type="username" className=" rounded peer ..." />
                </label>
                <label className="block">
                    <span className="block text-lg font-medium text-slate-300">My dogs breed(s):</span>
                    <input type="email" className="rounded peer ..." />
                    <p className="mt-2 invisible peer-invalid:visible text-red-600 text-md">
                        If multiple breeds, seperate with / example: labrador/blue heeler
                    </p>
                </label>
                <label className="block">
                    <span className="block text-lg font-medium text-slate-300">Birthday:</span>
                    <input type="email" className="rounded peer ..." />
                    <p className="mt-2 invisible peer-invalid:visible text-red-600 text-md">
                        Please provide the most accurate birthday possible.
                    </p>
                </label>
                <label className="block">
                    <span className="block text-lg font-medium text-slate-300">Age:</span>
                    <input type="email" className="rounded peer ..." />
                    <p className="mt-2 invisible peer-invalid:visible text-red-600 text-md">
                        Please provide age as of today.
                    </p>
                </label>
                <label className="block">
                    <span className="block text-lg font-medium text-slate-300">Gender:</span>
                    <input type="email" className="rounded peer ..." />
                    <p className="mt-2 invisible peer-invalid:visible text-red-600 text-md">
                        male/female.
                    </p>
                </label>
                <button className="font-sans font-normal bg-blue-300 hover:bg-blue-500 active:bg-blue-400 p-2 rounded-lg text-lg focus:outline-none focus:ring focus:ring-blue-200 ...">
                    Add My Dog
                </button>
            </form>
        </div>
    )
};

export default DogForm;
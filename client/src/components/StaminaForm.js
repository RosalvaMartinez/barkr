function StaminaForm() {
    return (
            <form className="flex flex-col border border-black rounded-xl w-[300px] p-4 m-6 justify-center bg-gradient-to-r from-slate-800 to-slate-700">
                <h1 className="text-white font-light text-center text-underline underline">STAMINA</h1>
                <label className="my-4">
                    <input className="rounded w-full p-2" placeholder="duration" name="name" type="text" />
                    <div className="visible h-4 text-red-600">in minutes</div>
                </label>
                <label className="my-4">
                    <input className="rounded w-full p-2" placeholder="distance" name="name" type="text" />
                    <div className="visible h-4 text-red-600">in feet</div>
                </label>
                <button type="submit" className="font-sans font-semibold bg-blue-300 hover:bg-blue-500 active:bg-blue-400 p-2 rounded-lg text-lg focus:outline-none focus:ring focus:ring-blue-200">
                    Update Chart
                </button>
            </form>
    )
};

export default StaminaForm;
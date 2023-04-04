function ExerciseForm() {
    return (
        <form className="flex flex-col border border-black rounded-xl w-[300px] p-4 m-6 justify-center bg-gradient-to-r from-slate-800 to-slate-700">
            {/* <form className="flex flex-col border border-black rounded-xl w-[300px] p-4 m-6 justify-center bg-gradient-to-r from-purple-800 to-blue-700 transition"> */}
            {/* <form className="flex flex-col border border-black bg-slate-700 rounded-xl w-[300px] p-4 m-6 justify-center"> */}
            <h1 className="text-white font-light text-center text-underline underline">EXERCISE</h1>
            <label className="my-4">
                <input className="rounded w-full p-2" placeholder="walks" name="name" type="text" />
                <div className="visible h-4 text-red-600">in minutes</div>
            </label>
            <label className="my-4">
                <input className="rounded w-full p-2" placeholder="dog park" name="name" type="text" />
                <div className="visible h-4 text-red-600">in minutes</div>
            </label>
            <label className="my-4">
                <input className="rounded w-full p-2" placeholder="home play" name="name" type="text" />
                <div className="visible h-4 text-red-600">in minutes</div>
            </label>
            <label className="my-4">
                <input className="rounded w-full p-2" placeholder="runs" name="name" type="text" />
                <div className="visible h-4 text-red-600">in minutes</div>
            </label>
            <label className="my-4">
                <input className="rounded w-full p-2" placeholder="sleep" name="name" type="text" />
                <div className="visible h-4 text-red-600">in hours</div>
            </label>
            <button type="submit" className="font-sans font-semibold bg-blue-300 hover:bg-blue-500 active:bg-blue-400 p-2 rounded-lg text-lg focus:outline-none focus:ring focus:ring-blue-200">
                Update Chart
            </button>
        </form>

    )
};

export default ExerciseForm;
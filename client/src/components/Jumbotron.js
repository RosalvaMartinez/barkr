import React from "react";
import {
    Link
} from "react-router-dom";

function Jumbotron() {

    return (
        <div className="flex border border-black rounded-xl p-4 m-6 bg-gradient-to-r from-purple-800 to-blue-700 transition">
            {/* <div className="bg-white dark:bg-gray-900"> */}
            <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
                <img
                    className="mx-auto mt-2 rounded-md"
                    src="https://petfocus.ca/westwood-hills/wp-content/uploads/sites/40/2016/11/Service-dog-eyes-closed-1-1-1800x535.jpg"
                    alt="Placeholder"
                />
                <h1 className="mb-4 mt-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl italic dark:text-white">We invest time in your pets health so you dont have to</h1>
                <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">Here at BARKR we focus on keeping logs of your pet's health and exercise. Using technology and innovation can we unlock long-term value and the potentiol for a smooth sailing life.</p>
                <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">Afterall, keeping logs of your pet's health and exercise is an essential part of responsible pet ownership. It can help you monitor your pet's wellbeing, prevent potential health issues, and ensure that they are getting the care they need to live a happy and healthy life.</p>
                <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl italic dark:text-white">Let <span className="text-6xl font-mono italic subpixel-antialiased text-white font-extrabold mx-1">BARKR</span> do the work for you!</h1>
                <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
                    <Link to="/signup" className="animate-bounce inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center font-sans text-white bg-blue-500 hover:bg-blue-400 active:bg-blue-300  rounded-lg focus:outline-none focus:ring focus:ring-blue-200">
                        Get Started
                    </Link>
                    <Link to="/about" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center font-sans text-white rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-800 dark:focus:ring-gray-800">
                        Learn More
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Jumbotron;
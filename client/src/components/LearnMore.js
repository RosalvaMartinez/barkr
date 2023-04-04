import {
    Link
} from "react-router-dom";

function LearnMore() {
    return (

        <div className="flex border border-black rounded-xl p-4 m-6 bg-gradient-to-r from-purple-800 to-blue-700 transition">
            <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16">
                <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12 mb-8">
                    <img
                        className="mx-auto mt-6 pb-4 rounded-md"
                        src="http://doghauspets.com/wp-content/uploads/2016/03/BrandsPageBanner2-1600x500@2x.jpg"
                        alt="Placeholder"
                    />
                    <h1 className="text-gray-900 dark:text-white text-3xl md:text-4xl font-sans hover:italic font-extrabold mb-2">Monitoring Your Pet's Health</h1>
                    <p className="text-lg font-normal text-gray-300 mb-6">Keeping a record of your pet's health can help you keep track of any changes in their physical and mental wellbeing. This can include changes in their weight, appetite, energy levels, and behavior. By monitoring these changes, you can detect any potential health issues early on and seek veterinary care before they become more serious.</p>
                    <Link to="/signup" className="animate-bounce inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center font-sans text-white bg-blue-500 hover:bg-blue-400 active:bg-blue-300  rounded-lg focus:outline-none focus:ring focus:ring-blue-200">
                        Get Started
                    </Link>
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12">
                        <img
                            className="mx-auto mt-6 pb-4 rounded-md"
                            src="https://media.istockphoto.com/id/1341759749/photo/happy-and-energetic-golden-retriever-playing-chase-with-owner.jpg?s=612x612&w=0&k=20&c=dz2JoJpE96woGAvC76c1dsqAnbniVwMJVnqp4qJ-yMc="
                            alt="Placeholder"
                        />
                        <h2 className="text-gray-900 dark:text-white text-3xl font-sans hover:italic font-extrabold mb-2">Tracking Your Pet's Exercise</h2>
                        <p className="text-lg font-normal text-gray-300 mb-4">Regular exercise is important for your pet's overall health and wellbeing. By keeping track of your pet's exercise routine, you can ensure they are getting enough physical activity and adjust their routine if necessary. This is particularly important for pets that require more exercise, such as dogs, to prevent obesity and other health issues.</p>
                        <Link to="/signup" className="animate-bounce inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center font-sans text-white bg-blue-500 hover:bg-blue-400 active:bg-blue-300  rounded-lg focus:outline-none focus:ring focus:ring-blue-200">
                            Get Started
                        </Link>
                    </div>
                    <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12">
                        <img
                            className="mx-auto mt-6 pb-4 rounded-md"
                            src="https://www.akc.org/wp-content/uploads/2009/01/dog-at-vet-800x534.jpg"
                            alt="Placeholder"
                        />
                        <h2 className="text-gray-900 dark:text-white text-3xl font-sans hover:italic font-extrabold mb-2">Communication with Veterinarian</h2>
                        <p className="text-lg font-normal text-gray-300 mb-4">When you bring your pet to the veterinarian, having a detailed record of their health and exercise can help your veterinarian make more informed decisions about their care. It can also help them diagnose any potential health issues more quickly and accurately.</p>
                        <Link to="/signup" className="animate-bounce inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center font-sans text-white bg-blue-500 hover:bg-blue-400 active:bg-blue-300  rounded-lg focus:outline-none focus:ring focus:ring-blue-200">
                            Get Started
                        </Link>
                    </div>
                </div>
                <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 my-8 rounded-lg p-8 md:p-12 mb-8">
                    <img
                        className="mx-auto mt-6 pb-4 rounded-md"
                        src="https://www.petmania.ie/wp-content/uploads/2022/05/senior-pets-blog-banner-1140x435.jpg"
                        alt="Placeholder"
                    />
                    <h1 className="text-gray-900 dark:text-white text-3xl font-sans hover:italic  md:text-4xl font-extrabold mb-2">Peace of Mind</h1>
                    <p className="text-lg font-normal text-gray-300 mb-6">Keeping records of your pet's health and exercise can give you peace of mind, knowing that you are taking good care of your furry friend. It can also help you identify any potential issues early on, which can save you money on veterinary bills in the long run.</p>
                    <Link to="/signup" className="animate-bounce inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center font-sans text-white bg-blue-500 hover:bg-blue-400 active:bg-blue-300  rounded-lg focus:outline-none focus:ring focus:ring-blue-200">
                        Get Started
                    </Link>
                </div>
            </div>
        </div>

    )
};

export default LearnMore;
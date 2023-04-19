import React from 'react';
import HomePageWeather from './HomePageWeather';// Import the HomePageWeather component. Adjust the path if needed.
import NavBar from './NavBar';

const SpeakerDashboard = () => {
    return (

        <div className="dashboard">
            <div className="flex">
                <NavBar />
            </div>

            <div className="grid h-full w-full grid-flow-col grid-cols-2 grid-rows-3 gap-20">
                <div className="text-white bg-gradient-to-br from-cyan-600 to-indigo-700 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 rounded-2xl textBox ">
                    {/* Section to welcome user*/}
                    <div className="flex h-full flex-col items-center justify-center">
                        <div className="text-2xl">Daily Check in</div>

                        <div className="text-lg">
                            Here is a look into how your loved ones are managing{" "}
                        </div>

                    </div>
                </div>
                <div className="text-white bg-gradient-to-br from-yellow-600 to-red-700 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 rounded-2xl textBox ">
                    {/* Section to welcome user*/}
                    <div className="flex h-full flex-col items-center justify-center">
                        <div className="text-2xl">Weekly Schedule</div>


                        <div className="text-lg">
                            Here is a look into what your loved ones has planned for the week{" "}
                        </div>

                    </div>
                </div>
                <div className="text-white bg-gradient-to-br from-yellow-600 to-purple-700 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 rounded-2xl textBox ">
                    {/* Section to welcome user*/}
                    <div className="flex h-full flex-col items-center justify-center">
                        <div className="text-2xl">News</div>

                        <div className="text-lg">
                            View the news stations they follow{" "}
                        </div>

                    </div>
                </div>
                <div className="text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 shadow-lg shadow-lime-500/50 dark:shadow-lg dark:shadow-lime-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 textBox ">
                    {/* Section to welcome user*/}
                    <div className="flex h-full flex-col items-center justify-center">
                        <div className="text-2xl">Music</div>

                        <div className="text-lg">
                            View what's "Playing Now" and what they have been listening to{" "}
                        </div>
                    </div>
                </div>
                <div className="">
                    {/* Weather widget, Flex, First box is current weather, second box is 5 days forcast */}
                    <div className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 rounded-2xl textBox ">
                        <HomePageWeather />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SpeakerDashboard;

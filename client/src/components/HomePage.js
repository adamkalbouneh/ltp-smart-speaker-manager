import React from "react";
import { Box, Container } from "@mantine/core";
import { Grid } from "@mantine/core";
import "../styling/Home.css"
import HomePageWeather from "./HomePageWeather";
import HomePageStatus from "./HomePageStatus";
import NavBar from "./NavBar";
import DashboardHeader from "./DashboardHeader";
import IntroductionSection from "./HPIntro";
import HPAccordion from "./HPAccordion";
import HPSuggestions from "./HPSuggestions";

const HomePage = () => {
    return (
        <>
            <div className=" min-h-screen bg-indigo-950 text-lg text-white">
                {/* Top NAV */}
                <div>
                    <div className="pt-4 ">

                        <div className="mb-4 flex h-20 items-center justify-between bg-gradient-to-br from-teal-600 to-indigo-700 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-md text-md px-5 py-2.5 text-center mr-2 mb-2 rounded-2xl">
                            <div>LOGO</div>
                            <div style={{ fontSize: "30px", paddingLeft: "100px" }}>    Home </div>
                            <div>Marwa</div>
                        </div>
                    </div>
                </div>

                {/* Left Side Bar Nav */}
                <div className="flex">
                    <NavBar />

                    {/* Main Content */}
                    <div className="mx-20 flex flex-1 flex-col items-center justify-center ">
                        <div className="grid h-full w-full grid-flow-col grid-cols-2 grid-rows-3 gap-20">
                            <div className="flex w-full flex-col gap-6 col-span-2">
                                {/* the css for the gradient text box */}
                                <div className="text-white bg-gradient-to-br from-teal-600 to-indigo-700 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 rounded-2xl textBox ">
                                    {/* Section to introduce the site*/}
                                    {/* <HomePageStatus /> */}
                                    <div className="flex w-full flex-col gap-6 col-span-2">
                                        {/* Render the IntroductionSection component */}
                                        <IntroductionSection />
                                    </div>
                                </div>
                            </div>

                            {/* Section to welcome user*/}
                            {/* the css for the gradient text box */}
                            <div className="text-white bg-gradient-to-br from-teal-600 to-indigo-700 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 rounded-2xl textBox ">
                                <div className="text-2xl">Speaker Features</div>

                                <HPAccordion />

                            </div>
                            <div className="">
                                {/* Weather widget, Flex, First box is current weather, second box is 5 days forcast */}
                                <div className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 rounded-2xl  ">
                                    <HomePageWeather />
                                </div>
                            </div>

                            {/* the css for the gradient text box */}
                            <div className="text-white bg-gradient-to-br from-teal-600 to-indigo-700 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 rounded-2xl textBox ">
                                {/* Section to welcome user*/}
                                <div className="flex h-full flex-col items-center justify-center">
                                    <div className="text-2xl">Voice Command Suggestions</div>
                                    
                                    <HPSuggestions />
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div >
        </>
    );
}
// absolute div on the left hand most side and which will have the nav bar - verically aligned
export default HomePage;
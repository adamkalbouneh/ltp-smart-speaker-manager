import React from "react";
import { Box, Container } from "@mantine/core";
import { Grid } from "@mantine/core";
import "../styling/Home.css"
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import NavBar from "../components/NavBar";
import DashboardHeader from "../components/DashboardHeader";
import IntroductionSection from "../components/home/HPIntro";
import HPAccordion from "../components/home/HPAccordion";
import HPSuggestions from "../components/home/HPSuggestions";
import HPReviews from "../components/home/HPReviews";


const HomePage = () => {
    return (
        <>
            <div className=" min-h-screen bg-indigo-950 text-lg text-white">
                {/* Top NAV */}
                <div>
                    <div className="mb-4 flex h-20 items-center justify-between bg-gradient-to-br from-teal-600 to-indigo-700 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-md text-md px-5 py-2.5 text-center rounded-2xl">
                        <div>LOGO</div>
                        <div style={{ fontSize: "30px", paddingLeft: "100px" }}>    Home </div>
                        <div>Marwa</div>
                    </div>
                </div>

                {/* Left Side Bar Nav */}
                <div className="flex mt-10">
                    <NavBar />

                    {/* Main Content */}
                    <div className="mx-20 flex flex-1 flex-col items-center justify-center">
                        <div className="grid h-full w-full grid-flow-col grid-cols-1 grid-rows-1 mb-12">
                            {/* the css for the gradient text box */}
                            <div className="text-white bg-gradient-to-br from-teal-600 to-indigo-700 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center rounded-2xl textBox ">
                                {/* Section to introduce the site*/}
                                <IntroductionSection />
                            </div>
                        </div>
                        <div className="grid h-full w-full grid-flow-col grid-cols-2 grid-rows-2 gap-12">
                            {/* Section to show speaker functions*/}
                            {/* the css for the gradient text box */}
                            <div className="text-white bg-gradient-to-br from-teal-600 to-indigo-700 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center rounded-2xl textBox ">
                                <div className="flex w-full flex-col gap-6 col-span-2"/>
                                <div className="text-2xl">Speaker Features</div>

                                <HPAccordion />

                            </div>
                            <div className="text-white bg-gradient-to-br from-teal-600 to-indigo-700 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center rounded-2xl textBox ">
                                {/* Section for user reviews*/}
                                <div className="flex w-full flex-col gap-6 col-span-2"/>
                                <div className="text-2xl">Reviews</div>

                                <HPReviews />

                            </div>

                            {/* the css for the gradient text box */}
                            <div className="text-white bg-gradient-to-br from-teal-600 to-indigo-700 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center rounded-2xl textBox ">
                                {/* Section for voice commands suggestions*/}
                                <div className="flex w-full flex-col gap-6 col-span-2"/>
                                    <div className="text-2xl">Voice Command Suggestions</div>

                                    <HPSuggestions />

                            </div>

                            <div className="text-white bg-gradient-to-br from-teal-600 to-indigo-700 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center rounded-2xl textBox ">
                                {/* Section for voice commands suggestions*/}
                                <div className="flex w-full flex-col gap-6 col-span-2"/>
                                <div className="text-2xl">Frequently Asked Questions</div>

                                <HPAccordion />

                            </div>



                        </div>

                        {/* <div>
                            <button type="button" className="text-white bg-gradient-to-br from-teal-600 to-indigo-700 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 rounded-2xl flex w-full flex-col gap-6 col-span-2  ">
                <Link to="/dashboard" className="flex items-center gap-2 text-white bg-gradient-to-br from-teal-600 to-indigo-700 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-2 py-1 text-center mr-2 mb-2 rounded-2xl">
                    <span>View Speaker Dashboard</span>
                   
                </Link>
                </button>
            </div> */}

                    </div>
                </div>
            </div >
        </>
    );
};
// absolute div on the left hand most side and which will have the nav bar - verically aligned
export default HomePage;
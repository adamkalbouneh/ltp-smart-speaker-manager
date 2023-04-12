import React from "react";
import { Box, Container } from "@mantine/core";
import { Grid } from "@mantine/core";
import "../styling/Home.css"
import HomePageWeather from "./HomePageWeather";
import HomePageStatus from "./HomePageStatus";
import NavBar from "./NavBar";
import DashboardHeader from "./DashboardHeader";

const HomePage = () => {
    return (
        <>
            <div className=" min-h-screen bg-indigo-950 text-lg text-white">
                {/* Top NAV */}
                <div>
                    <div className="pt-4 ">
                        <div className="mb-4 flex h-20 items-center justify-between bg-indigo-800 px-5">
                            <div>LOGO</div>
                            <div></div>
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
                                    <div className="text-2xl">Welcome</div>
                                    <div className="text">
                                        Welcome to our site, the perfect companion for your smart speaker! We're thrilled to have you here and can't wait to help you get the most out of your device. Our site is designed specifically for relatives who want to configure their smart speakers with ease, providing step-by-step guidance and helpful tips to make the process as seamless as possible.

                                        Whether you're new to the world of smart speakers or a seasoned pro, our site is here to support you every step of the way. From setting up your device for the first time to customizing its features and capabilities to suit your unique needs, we've got you covered.

                                        At our site, we believe that technology should be easy and accessible for everyone. That's why we've created a user-friendly platform that's easy to navigate and packed with helpful resources to make your smart speaker experience a breeze. So why wait? Get started today and start enjoying all the amazing benefits of your smart speaker like never before!{" "}
                                    </div>
                                </div>
                            </div>
                            
                                    {/* Section to welcome user*/}
                                     {/* the css for the gradient text box */}
                                <div className="text-white bg-gradient-to-br from-teal-600 to-indigo-700 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 rounded-2xl textBox ">
                                        <div className="text-2xl">Welcome</div>
                                        <div className="text-lg">
                                            User, welcome to the website da da da{" "}
                                        </div>
                                    </div>
                                
                                 {/* the css for the gradient text box */}
                                 <div className="text-white bg-gradient-to-br from-teal-600 to-indigo-700 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 rounded-2xl textBox ">
                                    {/* Section to welcome user*/}
                                    <div className="flex h-full flex-col items-center justify-center">
                                        <div className="text-2xl">Welcome</div>
                                        <div className="text-lg">
                                            User, welcome to the website da da da{" "}
                                        </div>
                                    </div>
                                </div>
                            <div className="">
                                {/* Weather widget, Flex, First box is current weather, second box is 5 days forcast */}
                                <div className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 rounded-2xl  ">
                                    <HomePageWeather />
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
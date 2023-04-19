import React from "react";
import { Box, Container } from "@mantine/core";
import { Grid } from "@mantine/core";
import "../styling/Home.css"
import HomePageWeather from "./HomePageWeather";
import NavBar from "./Navbar";
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
                    <Navbar />

                    {/* Main Content */}
                    <div className="mx-20 flex flex-1 flex-col items-center ml-96 justify-center">
                        <div className="grid h-full w-full grid-flow-col grid-cols-2 grid-rows-1 gap-20">
                            <div className="flex w-full flex-col gap-6">
                                <div className="h-24 w-full rounded-2xl bg-indigo-900">
                                    {/* Section to welcome user*/}
                                    <div className="flex h-full flex-col items-center justify-center">
                                        <div className="text-2xl">Welcome</div>
                                        <div className="text-lg">
                                            User, welcome to the website da da da{" "}
                                        </div>
                                    </div>
                                </div>
                                <div className="">
                                    <div className="flex h-24 flex-row  rounded-2xl ">
                                        <div className="flex w-full flex-row gap-8 overflow-auto border border-white">
                                            <div className="w-20 bg-indigo-700">s</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="h-24 w-full rounded-2xl bg-indigo-900">
                                    {/* Section to welcome user*/}
                                    <div className="flex h-full flex-col items-center justify-center">
                                        <div className="text-2xl">Welcome</div>
                                        <div className="text-lg">
                                            User, welcome to the website da da da{" "}
                                        </div>
                                    </div>
                                </div>
                                <div className="h-24 w-full rounded-2xl bg-indigo-900">
                                    {/* Section to welcome user*/}
                                    <div className="flex h-full flex-col items-center justify-center">
                                        <div className="text-2xl">Welcome</div>
                                        <div className="text-lg">
                                            User, welcome to the website da da da{" "}
                                        </div>
                                    </div>
                                </div>
                                <div className="flex justify-center h-24 w-full rounded-2xl ">
                                    {/* Section to welcome user*/}
                                    <div className="flex h-full flex-col items-center justify-center box">
                                        <div className="text-2xl">Welcome</div>
                                        <div className="text-lg">
                                            User, welcome to the website da da da{" "}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="">
                                {/* Weather widget, Flex, First box is current weather, second box is 5 days forcast */}
                                <div className="flex h-full w-full flex-col box ">
                                    <HomePageWeather />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
// absolute div on the left hand most side and which will have the nav bar - verically aligned
export default HomePage;
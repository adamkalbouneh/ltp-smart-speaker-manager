import React from "react";
import { Box, Container } from "@mantine/core";
import { Button } from "@mantine/core";
import "../styling/Home.css"
import NavBar from "../components/SideNavbar";

import { Link } from 'react-router-dom';
import DashboardHeader from "../components/DashboardHeader";

const AccountPage = () => {
    return (
        <>
            <div className=" min-h-screen bg-indigo-950 text-3xl text-white">
                {/* Top NAV */}
                <div>
                    <div className="mb-4 flex h-20 items-center justify-between bg-indigo-800 px-5mb-4 flex h-20 items-center justify-between bg-gradient-to-br from-teal-600 to-indigo-700 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-md text-md px-5 py-2.5 text-center rounded-2xl">
                        <Link to="/home" className="logo-box-image" />
                        <div style={{ fontSize: "30px", paddingLeft: "100px" }}>Account</div>
                        <div>Marwa</div>
                    </div>
                </div>

                {/* Left Side Bar Nav */}
                <div className="flex mt-10">
                    <NavBar />

                    {/* Main Content */}
                    <div className="mx-20 flex flex-1 flex-col items-center justify-center">
                        <div className="grid h-full w-full grid-flow-col grid-cols-1 grid-rows-3 gap-12">
                            {/* Section to change user's name*/}
                            <div className="text-white bg-gradient-to-br from-teal-600 to-indigo-700 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center rounded-2xl textBox">
                                <div className="text-2xl">Name</div>
                                <div className="text-lg">Marwa Omar{" "}<Button>Change</Button></div>
                            </div>
                            {/* Section to change user's email*/}
                            <div className="text-white bg-gradient-to-br from-teal-600 to-indigo-700 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center rounded-2xl textBox">
                                <div className="text-2xl">Email</div>
                                <div className="text-lg">omarfm@cardiff.ac.uk{" "}<Button>Change</Button></div>
                            </div>
                            {/* Section to change user's password*/}
                            <div className="text-white bg-gradient-to-br from-teal-600 to-indigo-700 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center rounded-2xl textBox">
                                <div className="text-2xl">Password</div>
                                <div className="text-lg">********{" "}<Button>Change</Button></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AccountPage;
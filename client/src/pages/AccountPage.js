import React from "react";
import { Box, Container } from "@mantine/core";
import { Button } from "@mantine/core";
import "../styling/Home.css"
import NavBar from "../components/NavBar";
import DashboardHeader from "../components/DashboardHeader";

const AccountPage = () => {
    return (
        <>
        <div className=" min-h-screen bg-indigo-950 text-3xl text-white">
                {/* Top NAV */}
                <div>
                    <div className="pt-4 ">
                        <div className="mb-4 flex h-20 items-center justify-between bg-indigo-800 px-5">
                            <div></div>
                            <div>Account</div>
                            <div></div>
                        </div>
                    </div>
                </div>

                {/* Left Side Bar Nav */}
                <div className="flex">
                    <NavBar />

                {/* Main Content */}
                <div className="mx-20 flex flex-1 flex-col items-center justify-center">
                    <div className="grid h-full w-full grid-flow-col grid-cols-2 grid-rows-1 gap-20">
                        <div className="flex flex-col gap-6">
                            <div className="h-24 w-full rounded-2xl bg-indigo-900">
                                {/* Section to change user's name*/}
                                <div className="flex h-full flex-col ml-10 justify-center">
                                    <div className="text-2xl">Name</div>
                                    <div className="text-lg">
                                        Marwa Omar{" "}<Button>Change</Button>
                                    </div>
                                </div>
                            </div>
                            <div className="h-24 w-full rounded-2xl bg-indigo-900">
                                {/* Section to change user's email*/}
                                <div className="flex h-full flex-col ml-10 justify-center">
                                    <div className="text-2xl">Email</div>
                                    <div className="text-lg">
                                        omarfm@cardiff.ac.uk{" "}<Button>Change</Button>
                                    </div>
                                </div>
                            </div>
                            <div className="h-24 w-full rounded-2xl bg-indigo-900">
                                {/* Section to change user's password*/}
                                <div className="flex h-full flex-col ml-10 justify-center">
                                    <div className="text-2xl">Password</div>
                                    <div className="text-lg">
                                        ********{" "}<Button>Change</Button></div>
                                    </div>
                                    <div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </>
    );
}

export default AccountPage;
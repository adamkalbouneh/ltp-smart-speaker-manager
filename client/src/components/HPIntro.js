import React from "react";

const IntroductionSection = () => {
    return (
        <div className="text-white bg-gradient-to-br from-teal-600 to-indigo-700 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 rounded-2xl textBox">
            <div className="text-2xl">Welcome</div>
            <div style={{ fontSize: "18px" }}>
                Welcome to our site, the perfect companion for your smart speaker! We're thrilled to have you here and can't wait to help you get the most out of your device.
                <br /><br />
                Our site is designed specifically for relatives who want to configure their smart speakers with ease, providing step-by-step guidance and helpful tips to make the process as seamless as possible.
                <br /><br />
                At our site, we believe that technology should be easy and accessible for everyone. That's why we've created a user-friendly platform that's easy to navigate and packed with helpful resources to make your smart speaker experience a breeze.
                <br /><br />
                So why wait? Get started today and start enjoying all the amazing benefits of your smart speaker like never before!{" "}
            </div>
        </div>
    );
};

export default IntroductionSection;

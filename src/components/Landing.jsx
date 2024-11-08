import LandingImage from '../assets/images/1.png'
import React from 'react';

const SchoolManagementLandingPage = () => {
    return (
        <div className="flex items-center justify-center h-screen w-full px-6">
            <div className="flex flex-row justify-center align-middle items-center ml-24 w-full">
                {/* Left Section - Illustration */}
                <div className="flex justify-center landing-left">
                    <img
                        src={LandingImage}
                        alt="Illustration"
                        className="max-w-full h-auto"
                    />
                </div>

                {/* Right Section - Text and Buttons */}
                <div className=" text-center md:text-left -mt-24 px-20 ml-12 landing-right">
                    <h1 className="text-3xl md:text-6xl font-bold mb-6 text-gray-800">
                        Welcome to InvenTrek
                    </h1>
                    <p className="text-lg mb-8 text-gray-600">
                    Say goodbye to manual tracking and inefficiencies. InvenTrak is designed to simplify file movement between departments and automate inventory processes at IIIT Bhubaneswar. Our goal is to improve operational efficiency, enhance transparency, and reduce administrative overhead.
                    </p>

                    <div className="flex justify-center md:justify-start space-x-4 mb-4">
                        <button className="bg-[#114fee] w-32 text-center text-xl text-white py-2 px-6 rounded "><a href='/login'>Login</a>
                           
                        </button>
                       
                    </div>

                    <p className="text-gray-600">
                        Don’t have an account? <a href="/signup" className="text-[#114fee] hover:underline">Sign up</a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SchoolManagementLandingPage;

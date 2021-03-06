import React from "react"
import html from "../Images/HTML5_Logo_512-removebg-preview.png"
import CSS from "../Images/CSS3_logo_and_wordmark.svg-removebg-preview.png"
import JavaScript from "../Images/javascript-logo-editorial-illustrative-white-background-javascript-logo-editorial-illustrative-white-background-eps-download-208329455-removebg-preview.png"
import ReactJS from "../Images/638-6386507_10-years-of-experience-react-native-logo-svg-removebg-preview.png"
import Redux from "../Images/redux-react-javascript-freecodecamp-npm-png-favpng-6F2x50visKuC0trBQ0952Cm1E_t-removebg-preview.png"
import Tailwind from "../Images/Tailwind-removebg-preview.png"

export const Tech = () => {
    return (
        <>
            <p className="text-center text-4xl font-bold text-gray-500 mt-8">Tech Stack</p>
            <div className="grid grid-cols-2 grid-rows-2 sm:flex m-auto sm:justify-evenly w-full md:w-full lg:w-3/4 xl:w-3/5 mt-10">

                <div className="m-auto mt-2 sm:m-0">
                    <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-full p-4 bg-green-700 ">
                        <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-white flex justify-center items-center">
                            <img src={html} alt="html logo" className="w-16" />
                        </div>
                    </div>
                    <p className="text-center pt-2 text-lg font-bold">HTML5</p>
                </div>

                <div className="m-auto sm:m-0">
                    <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-full p-4 bg-green-700 ">
                        <div className="w-24 h-24 sm:w-28 sm:h-28  rounded-full bg-white flex justify-center items-center">
                            <img src={CSS} alt="css logo" className="w-12" />
                        </div>
                    </div>
                    <p className="text-center pt-2 text-lg font-bold">CSS3</p>
                </div>

                <div className="m-auto sm:m-0">
                    <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-full p-4 bg-green-700 ">
                        <div className="w-24 h-24 sm:w-28 sm:h-28  rounded-full bg-white">
                            <img src={JavaScript} alt="js logo" />
                        </div>
                    </div>
                    <p className="text-center pt-2 text-lg font-bold">JAVASCRIPT</p>
                </div>

                <div className="m-auto sm:m-0">
                    <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-full p-4 bg-green-700 ">
                        <div className="w-24 h-24 sm:w-28 sm:h-28  rounded-full bg-white">
                            <img src={ReactJS} alt="react js logo" className="p-2" />
                        </div>
                    </div>
                    <p className="text-center pt-2 text-lg font-bold">REACT JS</p>
                </div>

            </div>

            <div className="grid grid-cols-2 grid-rows-1 sm:flex sm:justify-evenly w-full m-auto md:w-2/4 lg:w-2/5 xl:w-1/3 mt-4 mb-10">

                <div className="m-auto sm:m-0">
                    <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-full p-4 bg-green-700 ">
                        <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-white flex justify-center items-center">
                            <img src={Redux} alt="html logo" className="w-16" />
                        </div>
                    </div>
                    <p className="text-center pt-2 text-lg font-bold">REDUX</p>
                </div>

                <div className="m-auto sm:m-0">
                    <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-full p-4 bg-green-700 ">
                        <div className="w-24 h-24 sm:w-28 sm:h-28  rounded-full bg-white flex justify-center items-center">
                            <img src={Tailwind} alt="css logo" className="w-24" />
                        </div>
                    </div>
                    <p className="text-center pt-2 text-lg font-bold">TAILWIND CSS</p>
                </div>

            </div>
            <hr className="h-1 bg-gray-200" />
        </>
    )
}
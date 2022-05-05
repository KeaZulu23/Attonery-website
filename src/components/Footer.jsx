import React from 'react'

import logo from '../assets/logoBlack.png';

const Footer = () => {
  return (
    <div className=" bg-linear-pink-invert pb-12" >
                <div className="mx-auto container pt-20 lg:pt-72 flex flex-col items-center justify-center">
                    <div>
                        <img src={logo} />
                    </div>
                    <div className="text-black flex flex-col md:items-center f-f-l pt-3">
                        <h1 className="text-2xl font-black">Your Intense Legal Solutions.</h1>
                        <div className="my-6 text-base text-color f-f-l">
                            <ul className="md:flex items-center">
                                <li className=" md:mr-6 cursor-pointer pt-4 lg:py-0">About</li>
                                <li className=" md:mr-6 cursor-pointer pt-4 lg:py-0">Practice Area</li>
                                <li className=" md:mr-6 cursor-pointer pt-4 lg:py-0">Attorneys</li>
                                <li className=" md:mr-6 cursor-pointer pt-4 lg:py-0">Contact</li>
                                <li className="cursor-pointer pt-4 lg:py-0">Privacy Policy</li>
                            </ul>
                        </div>
                        <div className="text-sm text-color mb-10 f-f-l">
                            <p> © 2022 N.F MALEKA ATTORNEYS. All rights reserved</p>
                        </div>
                    </div>
                </div>
            </div>
  )
}

export default Footer
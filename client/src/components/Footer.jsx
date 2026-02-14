import React from 'react'
import { assets } from '../assets/assets'
import logo from "../assets/logo.svg";


const Footer = () => {
  return (
        <footer className="px-6 md:px-16 lg:px-36 mt-40 w-full text-gray-300">
            <div className="flex flex-col md:flex-row justify-between w-full gap-10 border-b border-gray-500 pb-14">
                <div className="md:max-w-96">
                    <img alt="" className="w-36 h-auto" src={logo} />
                    <p className="mt-6 text-sm">
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </p>
                    <div className="flex items-center gap-2 mt-4">
                        <img src={assets.googlePlay} alt="google play" className="h-9 w-auto " />
                        <img src={assets.appStore} alt="app store" className="h-9 w-auto" />
                    </div>
                </div>
                <div className="flex-1 flex items-start md:justify-end gap-20 md:gap-40">
                    <div>
                        <h2 className="font-semibold mb-5">Company</h2>
                        <ul className="text-sm space-y-2">
                            <li><a href="#">Home</a></li>
                            <li><a href="#">About us</a></li>
                            <li><a href="#">Contact us</a></li>
                            <li><a href="#">Privacy policy</a></li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="font-semibold mb-5">Get in touch</h2>
                        <div className="text-sm space-y-2">
                            <p>+1-234-567-890</p>
                            <p>contact@example.com</p>
                        </div>
                    </div>
                </div>
            </div>
            <p className="pt-4 text-center text-sm pb-5">
                Copyright {new Date().getFullYear()} © YrShow. All Right Reserved.
            </p>
        </footer>

  )
}

export default Footer

// <svg width="145" height="27" viewBox="0 0 145 27" fill="none" xmlns="http://www.w3.org/2000/svg">
//   <rect width="145" height="27" fill="black"/>

//   <text
//     x="50%"
//     y="50%"
//     text-anchor="middle"
//     dominant-baseline="middle"
//     font-family="Arial, Helvetica, sans-serif"
//     font-size="18"
//     font-weight="700">

//     <tspan fill="#FF0000">Y</tspan><tspan fill="#FFFFFF">rShow</tspan>

//   </text>
// </svg>

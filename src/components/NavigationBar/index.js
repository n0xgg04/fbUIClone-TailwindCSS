import React from 'react';
import '../../styles/tailwind.scss'
import {AiFillHome,AiTwotoneShop} from 'react-icons/ai'
import {MdOutlineOndemandVideo} from 'react-icons/md'
import {HiUserGroup} from 'react-icons/hi'
import {FaGamepad} from 'react-icons/fa'
import {BsMessenger} from 'react-icons/bs'
import {IoApps, IoNotifications} from 'react-icons/io5'
import {GrSearch} from 'react-icons/gr'

export default function NavigationBar(){
    return(
        <React.Fragment>
            <nav className="bg-[#242526] flex flex-row w-full justify-between items-center h-14 pr-5 pl-5 border-b-2 border-[#38393a] shadow-gray">
                <div className="inleft flex flex-row gap-2">
                    <div className="logo">
                        <svg viewBox="0 0 36 36" style={{
                            color: "rgb(56, 88, 152)"
                        }}
                             fill="url(#:Rq9lad5qq75b5klba:)" height="40" width="40">
                            <defs>
                                <linearGradient x1="50%" x2="50%" y1="97.0782153%" y2="0%" id=":Rq9lad5qq75b5klba:">
                                    <stop offset="0%" stopColor="#0062E0"></stop>
                                    <stop offset="100%" stopColor="#19AFFF"></stop>
                                </linearGradient>
                            </defs>
                            <path
                                d="M15 35.8C6.5 34.3 0 26.9 0 18 0 8.1 8.1 0 18 0s18 8.1 18 18c0 8.9-6.5 16.3-15 17.8l-1-.8h-4l-1 .8z"></path>
                            <path className="xe3v8dz"
                                  d="M25 23l.8-5H21v-3.5c0-1.4.5-2.5 2.7-2.5H26V7.4c-1.3-.2-2.7-.4-4-.4-4.1 0-7 2.5-7 7v4h-4.5v5H15v12.7c1 .2 2 .3 3 .3s2-.1 3-.3V23h4z"></path>
                        </svg>
                    </div>
                    <div className="search flex items-center gap-2">
                        <div className="pl-5 rounded-full bg-[#3a3b3c] pt-2 pb-2 pr-5 text-[#797a7d] w-full shadow-amber-50 flex items-center gap-1">
                            <label htmlFor="searchBar text-white">
                                <GrSearch className="text-[#797a7d]"/>
                            </label>
                          <input id="searchBar" className="bg-transparent focus:outline-0 w-full text-1xl" type="text" placeholder="Search"/>
                        </div>
                    </div>
                </div>
                <div className="tab">
                    <ul className="flex flex-row gap-16 select-none">
                        <li className="text-2xl cursor-pointer text-[#797a7d]"><AiFillHome/></li>
                        <li className="text-2xl cursor-pointer text-[#797a7d]"><MdOutlineOndemandVideo/></li>
                        <li className="text-2xl cursor-pointer text-[#797a7d]"><AiTwotoneShop/></li>
                        <li className="text-2xl cursor-pointer text-[#797a7d]"><HiUserGroup/></li>
                        <li className="text-2xl cursor-pointer text-[#797a7d]"><FaGamepad/></li>
                    </ul>
                </div>
                <div className="inright">
                    <ul className="flex flex-row gap-2 select-none">
                        <li className="cursor-pointer bg-[#3a3b3c] grid place-items-center w-10 h-10 text-xl text-[#e3e6ea] rounded-full relative"><IoApps/></li>
                        <li className="cursor-pointer bg-[#3a3b3c] grid place-items-center w-10 h-10 text-xl text-[#e3e6ea] rounded-full relative"><BsMessenger/></li>
                        <li className="cursor-pointer bg-[#3a3b3c] grid place-items-center w-10 h-10 text-xl text-[#e3e6ea] rounded-full relative">
                            <IoNotifications/>
                            <span className="bg-[#e31e3f] w-5 h-4 grid place-items-center text-xs rounded-full absolute top-0 -right-2">3</span>
                        </li>
                        <li className="cursor-pointer bg-[#3a3b3c] grid place-items-center w-10 h-10 text-xl text-[#e3e6ea] rounded-full relative">
                            <img className="rounded-full" src="https://cdn.sforum.vn/sforum/wp-content/uploads/2022/04/p2.jpg" alt="avt"/>
                        </li>
                    </ul>
                </div>
            </nav>
        </React.Fragment>
    )
}
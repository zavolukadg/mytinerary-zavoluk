import Label from "./Label" 
import Display from "./Display"
import { useState } from "react"

export default function NavBar() {
    let [show,setShow] = useState(false)
    let options = [
        {to: "/", title: "Home"},
        {to: "/pages/cities", title: "Cities"},
        {to: "/pages/signin", title: "Log In", backgroundColor: "#4F46E5", color: "white"}
    ]

    return (
        <>
            <header className='h-[64px] bg-[#ebebeb] flex justify-between px-[80px]'>
                {/* <img class="w-[50px] h-[50px] p-1 rounded "  src="../../public/img/logo.png" alt="logo"></img> */}
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-[50px] h-[50px] bg-white mt-2 p-[4px] rounded-xl cursor-pointer md:hidden"
                    onClick={() => setShow(!show)}>
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    />
                </svg>
                {/* {show ? <Display options={options}/> : null} */} {/* if else */}
                {show && <Display options={options} />} {/* if */}
                <div className="w-full flex justify-between items-center">
                    <h1 className="hidden text-[30px] md:flex">
                        MyTinerary
                    </h1>
                    <Label options={options} />
                </div>
            </header>
        </>
    )
}

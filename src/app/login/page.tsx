"use client"

import { useRef, useState } from "react"

export default function LoginPage() {

    const mailRef = useRef<HTMLInputElement>(null);
    const passRef = useRef<HTMLInputElement>(null);
    const [isButtonActive, setIsButtonActive] = useState(false);

    const handleInputChange = () => {
        const isEmailFilled = mailRef.current?.value !== "";
        const isPasswordFilled = passRef.current?.value !== "";
        setIsButtonActive(isEmailFilled && isPasswordFilled);
    };

    return (
        <div className=" bg-gradient-to-b from-white to-[#AFA3FF] w-full h-screen flex justify-center">
            <div className="flex flex-col bg-white items-center justify-center max-h-[400px] w-[500px] min-w-[300px] rounded-lg gap-4 p-14 mt-20">
                <h1 className="text-3xl font-semibold">Welcome to <a href="./" className="text-[#4534AC]">Workflo</a>!</h1>
                
                <input ref={mailRef} className="bg-[#EBEBEB] w-full mt-4 p-2 rounded-md" type="email" name="email" placeholder="Your email" onChange={handleInputChange} />

                <input ref={passRef} className="bg-[#EBEBEB] w-full p-2 rounded-md" type="password" name="password" placeholder="Password" onChange={handleInputChange} />

                <button className={`${isButtonActive ? 'bg-[#3C2BA1]' : 'bg-[#7469B9]'} text-white w-full rounded-md p-2`}>Login</button>
                <h3 className="text-sm font-medium text-gray-500 mt-2">Don't have an account? Create a <a className="text-[#4534AC]" href="/signup">new account.</a></h3>
            </div>
        </div>
    )
}
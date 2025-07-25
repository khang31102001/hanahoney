"use client"
import { Phone } from "lucide-react"
import { useState } from "react";
const SocialSidebar = ()=> {
    const [isHover, setIsHover] = useState(false);
    return(
        <div className="fixed bottom-2 right-0 md:right-12 z-50">
            <div className=" flex flex-col gap-4 items-center justify-center p-4">
                <a
                    href="tel:(+61) 0432189874"
                    className="w-12 h-12 bg-honey-400 rounded-full flex items-center justify-center shadow-lg hover:bg-honey-500 transition-all duration-300 transform hover:scale-110  "
                    aria-label="Gọi điện"
                    onMouseMove={() => setIsHover(true)}
                    onMouseLeave={() => setIsHover(false)}
                >
                    <Phone className={`text-white ${isHover} ? animate-shake : ''`} size={22} />
                    {/* Tooltip số điện thoại */}
                    <div
                    className="phone-tooltip absolute right-14 bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden"
                        style={{
                            width: isHover ? '140px' : '0px',
                            padding: isHover ? '0.5rem 0.75rem' : '0.5rem 0',
                            opacity: isHover ? 1 : 0,
                            visibility: isHover ? 'visible' : 'hidden'
                        }}
                    >
                    <div className="flex items-center justify-center flex-grow"> 
                        <span className="text-gray-700 text-sm whitespace-nowrap font-medium">
                        (+61) 0432189874
                        </span>
                    </div>
                    </div>
                 </a>

                 <a
                    href="#"
                    onClick={(e) => {
                    e.preventDefault();
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="w-12 h-12 bg-honey-400 rounded-full flex items-center justify-center shadow-lg hover:bg-honey-500 transition-all duration-300 transform hover:scale-110"
                    aria-label="Về đầu trang"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                    <path d="M12 19V5M5 12l7-7 7 7" />
                    </svg>
                </a>
            </div>
        </div>
    )
}

export default SocialSidebar;

import Ripple from "material-ripple-effects";
import { AnimatePresence, motion } from "framer-motion";
import { FaRegEnvelope, FaUser } from "react-icons/fa6";
import { useState, useRef, useEffect } from "react";


const DropdownProfile = () => {
    const [show, setShow] = useState(false)
    const myRef = useRef()
    const ripple = new Ripple();

    const handleShow = () => {
        setShow(!show)
    }

    useEffect(() => {
        const clickOut = (e) => {
            if (!myRef.current.contains(e.target)) {
                setShow(false)
            }
        }
        document.addEventListener('click', clickOut)
        return () => {
            document.removeEventListener('click', clickOut)
        }
    })

    return (
        <>
            <div ref={myRef} className="relative ">
                <div
                onClick={() => handleShow()}
                    onMouseUp={(e) => ripple.create(e, "dark")}
                    onMouseEnter={(e) => ripple.create(e, "dark")}
                    className={` cursor-pointer rounded-full  hover:bg-slate-100 `}
                >
                    <img
                        className="rounded-full object-cover h-11 w-11 "
                        src="/profile.jpg"
                        alt=""
                    />
                </div>

                <AnimatePresence>
                    {show && (
                        <motion.div
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        exit={{opacity: 0}}
                        >
                        <div
                            className={`w-[300px] rounded-lg  absolute right-0 top-14 bg-white border z-[200]`}
                        >
                            <div className="relative ">
                                <div className="absolute -top-2 right-3 border-l border-t bg-white h-4 w-4 rotate-45 "></div>
                            </div>
    
                            <div className="p-6 flex flex-col">
                                <h1 className="font-bold">User Profile</h1>
                                <div className="after:content-[''] after:border-t after:w-full after:block">
                                    <div className="flex gap-4 py-4  ">
                                        <img
                                            className="border rounded-full h-20"
                                            src="/profile.jpg"
                                            alt=""
                                        />
                                        <div className="flex flex-col gap-1 justify-center text-slate-600">
                                            <h1 className="font-semibold text-sm">
                                                Apep Kurniawan
                                            </h1>
                                            <h1 className="text-sm">
                                                Administrator
                                            </h1>
                                            <div className="flex items-center gap-2">
                                                <EnvelopeIcon className=" h-4 w-4 " />
                                                <h1 className="text-sm ">
                                                    Apepmvp@gmail.com
                                                </h1>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col mt-7 gap-7">
                                    <div className="flex gap-4 group/list cursor-pointer">
                                        <div
                                            onMouseEnter={(e) =>
                                                ripple.create(e, "light")
                                            }
                                            className="bg-blue-200 p-2 rounded-lg "
                                        >
                                            <FaUser className="h-6 w-6 text-blue-700" />
                                        </div>
                                        <div className="flex flex-col justify-center space-y-1 text-slate-600">
                                            <h1 className="font-semibold text-sm group-hover/list:text-blue-500 transition-all duration-200">
                                                My Profile
                                            </h1>
                                            <h1 className="text-xs">
                                                Account Setting
                                            </h1>
                                        </div>
                                    </div>
                                    <div className="flex gap-4 group/list cursor-pointer">
                                        <div
                                            onMouseEnter={(e) =>
                                                ripple.create(e, "light")
                                            }
                                            className="bg-blue-200 p-2 rounded-lg "
                                        >
                                            <FaUser className="h-6 w-6 text-blue-700" />
                                        </div>
                                        <div className="flex flex-col justify-center space-y-1 text-slate-600">
                                            <h1 className="font-semibold text-sm group-hover/list:text-blue-500 transition-all duration-200">
                                                My Profile
                                            </h1>
                                            <h1 className="text-xs">
                                                Account Setting
                                            </h1>
                                        </div>
                                    </div>
                                    <div className="flex gap-4 group/list cursor-pointer">
                                        <div
                                            onMouseEnter={(e) =>
                                                ripple.create(e, "light")
                                            }
                                            className="bg-blue-200 p-2 rounded-lg "
                                        >
                                            <FaUser className="h-6 w-6 text-blue-700" />
                                        </div>
                                        <div className="flex flex-col justify-center space-y-1 text-slate-600">
                                            <h1 className="font-semibold text-sm group-hover/list:text-blue-500 transition-all duration-200">
                                                My Profile
                                            </h1>
                                            <h1 className="text-xs">
                                                Account Setting
                                            </h1>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-8">
                                    {/* <ButtonOutline style="border border-blue-400 text-blue-400 py-1.5 w-full text-xs">
                                        LOG OUT
                                    </ButtonOutline> */}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                    )}
                
                </AnimatePresence>
            </div>
        </>
    );
};

export default DropdownProfile;

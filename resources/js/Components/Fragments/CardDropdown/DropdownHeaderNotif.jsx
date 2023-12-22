import {
    MagnifyingGlassIcon,
    BellAlertIcon,
    MoonIcon,
    EnvelopeIcon,
    UserIcon,
} from "@heroicons/react/24/outline";
import ButtonOutline from "@/Components/Elements/Button/ButtonOutline";
import Ripple from "material-ripple-effects";
import { motion } from "framer-motion";

const animate = {
    show: { opacity: 1 },
    hidden: { opacity: 0 },
    textHidden: { opacity: 0 },
    duration: { duration: 0.3 },
};

const DropdownNotif = ({ show, onClick }) => {
    const ripple = new Ripple();
    return (
        <div className="relative">
            <div
                onClick={onClick}
                onMouseUp={(e) => ripple.create(e, "dark")}
                onMouseEnter={(e) => ripple.create(e, "dark")}
                className={` ${
                    show ? "sm:bg-slate-200 group notif" : ""
                } sm:h-[50px] sm:w-[50px] cursor-pointer rounded-full  hover:bg-slate-100 flex items-center justify-center sm:p-3 transition-all duration-200 `}
            >
                <BellAlertIcon className="group-[.notif]:text-purple-500 transition-all duration-200 h-5" />
            </div>
            <motion.div
                variants={animate}
                initial="hidden"
                animate={show ? "show" : "hidden"}
                transition={{ duration: 0.4 }}
            >
                <div
                    className={`${
                        show ? "" : "pointer-events-none"
                    } w-[300px] rounded-lg p-6 sm:top-[60px] sm:right-0  -right-[49px] top-[36px] absolute bg-white border z-[200]`}
                >
                    <div className=" flex flex-col">
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
                                    <h1 className="text-xs">Administrator</h1>
                                    <div className="flex items-center gap-2">
                                        <EnvelopeIcon className=" h-3 w-3 " />
                                        <h1 className="text-[11px] ">
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
                                    <UserIcon className="h-6 w-6 text-blue-700" />
                                </div>
                                <div className="flex flex-col justify-center space-y-1 text-slate-600">
                                    <h1 className="font-semibold text-sm group-hover/list:text-blue-500 transition-all duration-200">
                                        My Profile
                                    </h1>
                                    <h1 className="text-xs">Account Setting</h1>
                                </div>
                            </div>
                            <div className="flex gap-4 group/list cursor-pointer">
                                <div
                                    onMouseEnter={(e) =>
                                        ripple.create(e, "light")
                                    }
                                    className="bg-blue-200 p-2 rounded-lg "
                                >
                                    <UserIcon className="h-6 w-6 text-blue-700" />
                                </div>
                                <div className="flex flex-col justify-center space-y-1 text-slate-600">
                                    <h1 className="font-semibold text-sm group-hover/list:text-blue-500 transition-all duration-200">
                                        My Profile
                                    </h1>
                                    <h1 className="text-xs">Account Setting</h1>
                                </div>
                            </div>
                            <div className="flex gap-4 group/list cursor-pointer">
                                <div
                                    onMouseEnter={(e) =>
                                        ripple.create(e, "light")
                                    }
                                    className="bg-blue-200 p-2 rounded-lg "
                                >
                                    <UserIcon className="h-6 w-6 text-blue-700" />
                                </div>
                                <div className="flex flex-col justify-center space-y-1 text-slate-600">
                                    <h1 className="font-semibold text-sm group-hover/list:text-blue-500 transition-all duration-200">
                                        My Profile
                                    </h1>
                                    <h1 className="text-xs">Account Setting</h1>
                                </div>
                            </div>
                        </div>
                        <div className="mt-8">
                            <ButtonOutline style="border border-blue-400 text-blue-400 py-1.5 w-full text-xs">
                                LOG OUT
                            </ButtonOutline>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default DropdownNotif;

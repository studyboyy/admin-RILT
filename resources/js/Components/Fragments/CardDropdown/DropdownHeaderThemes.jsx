import { MoonIcon, EnvelopeIcon, UserIcon } from "@heroicons/react/24/outline";
import ButtonOutline from "@/Components/Elements/Button/ButtonOutline";
import Ripple from "material-ripple-effects";
import { motion } from "framer-motion";

const animate = {
    show: { opacity: 1 },
    hidden: { opacity: 0 },
    textHidden: { opacity: 0 },
    duration: { duration: 0.3 },
};

const DropdownThemes = ({ show, onClick }) => {
    const ripple = new Ripple();
    return (
        <div className="relative">
            <div
                onClick={onClick}
                onMouseUp={(e) => ripple.create(e, "dark")}
                onMouseEnter={(e) => ripple.create(e, "dark")}
                className={`${
                    show ? "sm:bg-slate-200 group themes" : ""
                } sm:h-[50px] sm:w-[50px] cursor-pointer rounded-full  hover:bg-slate-100 flex items-center justify-center sm:p-3 transition-all duration-200`}
            >
                <MoonIcon className="group-[.themes]:text-purple-500 transition-all duration-200 h-5" />
            </div>
        </div>
    );
};

export default DropdownThemes;

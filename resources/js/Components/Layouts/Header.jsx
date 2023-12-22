
import { MdArrowBack } from "react-icons/md";
import { useEffect, useRef, useState } from "react";
import DropdownProfile from "../Fragments/CardDropdown/DropdownHeaderProfile";
import { Link } from "@inertiajs/react";
import useSidebarStore from "@/store/sidebarStore";

const Header = () => {
    const refUse = useRef();
    const [show, setShow] = useState(0);

    const { isOpen, toggleSidebar } = useSidebarStore();

    const handleDropdown = (value) => {
        setShow(show === value ? 0 : value);
    };

    useEffect(() => {
        const handler = (e) => {
            if (show) {
                if (!refUse.current.contains(e.target)) {
                    setShow(false);
                }
            }
        };
        document.addEventListener("click", handler);
        return () => {
            document.removeEventListener("click", handler);
        };
    });

    return (
        <>
            <header className="bg-white w-full fixed top-0 left-0 right-0 z-50 py-4 px-6">
                <div className="flex items-center justify-between">
                    <div className="">
                        <div className="flex items-center w-[270px] ">
                            <Link className="flex items-center gap-2 grow ">
                                <img src="/logome.png" className="h-8" alt="" />
                                <h1 className="font-bold text-lg">WHYME</h1>
                            </Link>
                            <div
                                onClick={toggleSidebar}
                                className="flex items-center justify-center h-8 w-8 rounded-full bg-slate-100 shadow-md cursor-pointer group hover:bg-slate-200 transisi "
                            >
                                <MdArrowBack
                                    className={`${
                                        isOpen ? "" : "rotate-180"
                                    } h-6 text-slate-500 transisi`}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center gap-5">
                        {/* <DropdownProfile /> */}
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;

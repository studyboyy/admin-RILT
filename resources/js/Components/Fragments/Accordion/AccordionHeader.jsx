import { GoChevronDown } from "react-icons/go";
import { motion, AnimatePresence } from "framer-motion";
import useSidebarStore from "@/store/sidebarStore";
import { useEffect, useRef, useState } from "react";
import { usePage } from "@inertiajs/react";
import { clsx } from "clsx";

const AccordionHeader = ({ children, title, startUrl, IconLink: IconLink }) => {
    const [open, setOpen] = useState(false);
    const { isOpen, openSidebar } = useSidebarStore();
    const [maxHeight, setMaxHeight] = useState("0px");
    const contentRef = useRef();
    const { url } = usePage();
    useEffect(() => {
        if (!isOpen) {
            setOpen(false);
        }
        const height = !open ? "0px" : `${contentRef.current.scrollHeight}px`;
        setMaxHeight(height);
    }, [open]);

    const openAccordion = () => {
        setOpen(!open);
        if (!isOpen) {
            openSidebar();
            setOpen(true);
        }
    };

    return (
        <>
            <div
                onClick={openAccordion}
                className={clsx(
                    url.startsWith(startUrl) && "bg-blue-50",
                    "group/header flex cursor-pointer items-center justify-between rounded-lg p-2.5 transition-all duration-300 hover:bg-blue-100/40",
                )}
                role="button"
            >
                <div
                    className={clsx(
                        url.startsWith(startUrl)
                            ? "text-blue-500"
                            : "text-slate-500",
                        "flex items-center gap-3",
                    )}
                >
                    {IconLink && (
                        <IconLink className="text-xl leading-none transition-all group-hover/header:text-blue-500" />
                    )}
                    <AnimatePresence>
                        {isOpen && (
                            <motion.span
                                className="whitespace-nowrap text-base leading-none transition-all group-hover/header:text-blue-500"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                            >
                                {title}
                            </motion.span>
                        )}
                    </AnimatePresence>
                </div>
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            className={clsx(url.startsWith(startUrl) ? "text-blue-500" : "text-slate-500")}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                        >
                            <GoChevronDown
                                className={clsx(!open && "-rotate-90", "text-lg group-hover/header:text-blue-500 leading-none transition-transform duration-500")}
                            />
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
            <div
                ref={contentRef}
                style={isOpen ? { maxHeight } : { maxHeight: 0 }}
                className="relative overflow-hidden pl-5 transition-all duration-300"
            >
                <div className="before:absolute before:block before:h-full before:w-[1px] before:bg-slate-200 before:content-['']">
                    <div className="ml-3 ">{children}</div>
                </div>
            </div>
        </>
    );
};

export default AccordionHeader;

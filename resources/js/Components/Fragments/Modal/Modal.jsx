import { useEffect, useState, useRef, Children } from "react";
import Button from "../Button/Button";
import { AiOutlineClose } from "react-icons/ai";
import { motion, AnimatePresence } from "framer-motion";

const Modal = ({ open, onClose, closeCLickOut = false, children, width }) => {
    const contentRef = useRef();

    const handleClickOutside = (e) => {
        if (!contentRef.current.contains(e.target)) {
            onClose();
        }
    };

    useEffect(() => {
        if (open && closeCLickOut) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [open]);

    const widthModal = () => {
        switch (width) {
            case "xs":
                return 400;
            case "sm":
                return 640;
            case "md":
                return 768;
            case "lg":
                return 1024;
            case "xl":
                return 1280;
            case "full":
                return "100%";
            default:
                return "";
        }
    };

    return (
        <>
            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 5 }}
                        className="fixed z-[99] top-0 right-0 left-0 bottom-0 bg-black/10 backdrop-blur-md"
                    >
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            className=" w-full h-full flex items-center justify-center "
                        >
                            <div
                                ref={contentRef}
                                style={{ maxWidth: widthModal() }}
                                className={`${
                                    widthModal() ? "w-full" : ""
                                } relative  max-h-[calc(100%-9rem)]  rounded-xl shadow-sm border bg-white`}
                            >
                                <div className="flex justify-end px-6 pt-6 bg-sla">
                                    <div
                                        onClick={onClose}
                                        className="flex group/close items-center justify-center bg-slate-100 h-7 w-7 rounded-full hover:bg-slate-200 transition-colors duration-200 cursor-pointer "
                                    >
                                        <AiOutlineClose className="cursor-pointer text-slate-600 group-hover/close:text-blue-400 transition-colors duration-200" />
                                    </div>
                                </div>

                                <div className="px-7 pb-8 h-full ">
                                    
                                    <div className=" h-full max-h-[640px]  rounded-xl">
                                        {children}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Modal;

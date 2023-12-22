import { Link, usePage } from "@inertiajs/react";
import { motion, AnimatePresence } from "framer-motion";
import useSidebarStore from "@/store/sidebarStore";
import { clsx } from "clsx";

const Linkside = ({ children, IconLink: IconLink, href, page }) => {
    const { component } = usePage();
    const { isOpen } = useSidebarStore();

    
    return (
        <>
            <Link
                href={href}
                className={clsx(component === page ? "bg-blue-50 text-blue-500 "
                : "text-slate-500", "block rounded-lg p-2.5 transition-all  duration-300  hover:bg-blue-100 hover:text-blue-500" )}
            >
                <div className="flex items-center gap-3">
                    <div className="text-xl leading-none" >
                        {IconLink && (
                            <IconLink />
                        )}
                    </div>
                    <AnimatePresence>
                        {isOpen && (
                            <motion.span
                                className="whitespace-nowrap text-base leading-none"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                            >
                                {children}
                            </motion.span>
                        )}
                    </AnimatePresence>
                </div>
            </Link>
        </>
    );
};

export default Linkside;

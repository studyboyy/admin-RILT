import { LuDot } from "react-icons/lu";
import { Link, usePage } from "@inertiajs/react";
import { clsx } from "clsx";

const AccordionLink = ({ children, route, page }) => {
    const { component } = usePage();
    return (
        <>
            <Link
                href={route}
                className={clsx(
                    component === page && "bg-blue-50 text-blue-500",
                    "mt-2  block rounded-lg p-1.5  text-slate-500 transition-all duration-300 hover:bg-blue-100 hover:text-blue-500",
                )}
            >
                <div
                    className={clsx(component === page && "text-blue-500", "flex items-center")}
                >
                    <div >
                        <LuDot />
                    </div>
                    <span className="ml-1 whitespace-nowrap">{children}</span>
                </div>
            </Link>
        </>
    );
};

export default AccordionLink;

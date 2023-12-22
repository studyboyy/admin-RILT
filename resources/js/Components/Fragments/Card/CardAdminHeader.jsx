import { HiOutlineHomeModern } from "react-icons/hi2";
import { Link, usePage } from "@inertiajs/react";

const CardAdminHeader = ({ children }) => {
    const { url, props } = usePage();

    const urlParts = url
        .split("/")
        .filter((part) => part !== "" && part !== "admin");

    return (
        <div className="w-full bg-white p-4 rounded-lg border shadow-sm">
            <div className="flex flex-col gap-2">
                <h1 className="text-lg text-blue-400 font-bold uppercase">
                    {children}
                </h1>
                <div className="flex items-center gap-1">
                    <Link href="http://127.0.0.1:8000/admin">
                        <HiOutlineHomeModern className="h-5 w-5 text-blue-400" />
                    </Link>
                    <p className="text-slate-400 font-semibold mx-1">/</p>
                    <div className="flex items-center font-semibold ">
                        {urlParts.map((url, index) => {
                            return (
                                <p
                                    className="capitalize text-slate-600"
                                    key={index}
                                >
                                    {url}
                                    {index < urlParts.length - 1 && (
                                        <span className="text-slate-400 font-semibold mx-1">
                                            /
                                        </span>
                                    )}
                                </p>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardAdminHeader;

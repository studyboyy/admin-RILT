import { Link } from "@inertiajs/react";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";
import Select from "../../Select/Select";
import { limitTable } from "@/data/data";

const TablePagination = ({ onChange, links, params }) => {
    const selectFormat = () => {
        return limitTable.map((item) => ({
            value: item.id,
            label: item.label,
        }));
    };
    return (
        <>
            <div className="flex items-center text-sm gap-2">
                <div className="flex items-center gap-3">
                    <span>Baris Per Halaman</span>
                    <Select
                        data={selectFormat}
                        onChange={onChange}
                        params={params.limit ? params.limit : 5}
                    />
                </div>
                <div className="flex items-center gap-1  ">
                    {links.map((link, index) => {
                        const label =
                            link.label == "prev" || link.label == "next";
                        const active = link.active;
                        return (
                            <Link
                                key={index}
                                className={`${
                                    label
                                        ? "mx-2"
                                        : active
                                          ? " bg-blue-500 text-white hover:text-white hover:border-none "
                                          : ""
                                }  h-7 w-7 rounded-full hover:border hover:text-blue-500 hover:border-blue-200 flex items-center leading-none justify-center transition-all duration-150`}
                                preserveScroll
                                href={link.url}
                                as="button"
                            >
                                {link.label == "prev" ? (
                                    <GoChevronLeft />
                                ) : link.label === "next" ? (
                                    <GoChevronRight />
                                ) : (
                                    link.label
                                )}
                            </Link>
                        );
                    })}
                </div>
            </div>
        </>
    );
};

export default TablePagination;

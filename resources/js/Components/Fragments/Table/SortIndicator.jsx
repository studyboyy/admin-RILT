import { PiArrowUpLight } from "react-icons/pi";

const SortIndicator = ({ label, field, column, direction }) => {
    const arrow =
        field === column && direction === "asc"  ? "rotate-180"  : field === column && direction === "desc" ? "rotate-0" : "rotate-180 opacity-0";
    return (
        <>
            <div className="flex items-center justify-center gap-2 group/item">
                <span>{label}</span>
                <PiArrowUpLight
                    className={`${arrow} text-sm group-hover/item:opacity-100 transition-all duration-500`}
                />
            </div>
        </>
    );
};

export default SortIndicator;

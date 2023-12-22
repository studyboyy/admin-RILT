import { PiArrowUpLight } from "react-icons/pi";

const TableHead = ({ column = [], handleSorting, params }) => {
    const handleSort = (accessor) => {
        const accessorParts = accessor.split(".");
        const newAccessor =
            accessorParts.length > 1 ? accessorParts.shift() + "_id" : accessor;

        let newDirection = params?.direction ?? "asc";

        if (newAccessor === params?.field) {
            newDirection = newDirection === "asc" ? "desc" : "asc";
        }
        handleSorting(newAccessor, newDirection);
    };

    return (
        <>
            <thead>
                <tr>
                    <th>
                        <input
                            type="checkbox"
                            className="rounded-sm border-slate-400/60 focus:ring-0 cursor-pointer text-blue-500"
                        />
                    </th>
                    <th>No</th>
                    {column.map(({ label, accessor, sortable }) => {
                        const accessorParts = accessor.split(".");
                        const newAccessor =
                            accessorParts.length > 1
                                ? accessorParts.shift() + "_id"
                                : accessor;
                        const arrow = sortable
                            ? params?.field === newAccessor &&
                              params?.direction === "asc"
                                ? "rotate-180"
                                : params?.field === newAccessor &&
                                    params?.direction === "desc"
                                  ? "rotate-0"
                                  : "rotate-180 opacity-0"
                            : "";
                        return (
                            <th key={accessor}>
                                <div
                                    onClick={
                                        sortable
                                            ? () => handleSort(accessor)
                                            : null
                                    }
                                    className="flex items-center justify-center gap-2 group/item "
                                >
                                    {label}
                                    {sortable && (
                                        <PiArrowUpLight
                                            className={`${arrow} text-sm group-hover/item:opacity-100 transition-all duration-300`}
                                        />
                                    )}
                                </div>
                            </th>
                        );
                    })}
                    <th>Action</th>
                </tr>
            </thead>
        </>
    );
};

export default TableHead;

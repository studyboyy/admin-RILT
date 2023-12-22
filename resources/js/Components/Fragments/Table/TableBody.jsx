import moment from "moment/moment";
import "moment/locale/id";
import { BsDatabaseSlash } from "react-icons/bs";

const TableBody = ({ tableData = [], column = [], indexData, children }) => {
    const checkbokTes = (id) => {
        console.log(id);
    };

    return (
        <>
            <tbody>
                {tableData.length > 0 ? (
                    tableData?.map((data, index) => {
                        return (
                            <tr
                                className="odd:bg-white even:bg-blue-50/40 hover:odd:bg-blue-50/40 hover:even:bg-white transition-colors "
                                key={data.id}
                            >
                                <td>
                                    <input
                                        type="checkbox"
                                        onChange={() => checkbokTes(data.id)}
                                        className="rounded-sm border-slate-400/60 focus:ring-0 cursor-pointer text-blue-500"
                                    />
                                </td>
                                <td>{indexData + index}</td>
                                {column.map(({ accessor }) => {
                                    const tData = data[accessor]
                                        ? data[accessor]
                                        : "--";

                                    return (
                                        <td
                                            className="pr-[38px]"
                                            key={accessor}
                                        >
                                            {renderCellContent(data, accessor)}
                                        </td>
                                    );
                                })}
                                <td>{children ? children({ data }) : "--"}</td>
                            </tr>
                        );
                    })
                ) : (
                    <tr>
                        <td colSpan={column.length + 3}>
                            <div className="h-44 flex flex-col items-center justify-center gap-3">
                                <div className="text-4xl text-blue-400">
                                    <BsDatabaseSlash />
                                </div>
                                <span className="font-bold">
                                    Tidak Ada Data
                                </span>
                            </div>
                        </td>
                    </tr>
                )}
            </tbody>
        </>
    );
};

function renderCellContent(data, accessor) {
    const accessorPath = accessor.split(".");
    let value = data;
    const formatDay = (date) => {
        const day = moment(date).format("dddd D MMMM YYYY");
        return day;
    };

    for (const path of accessorPath) {
        value = value[path];
        if (value === undefined || value === null) {
            break;
        }
    }
    if (accessor === "created_at") {
        return formatDay(value);
    }

    return value !== undefined && value !== null ? value : "--";
}

export default TableBody;

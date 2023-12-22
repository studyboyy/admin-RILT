import TableBody from "./TableBody";
import TableHead from "./TableHead";
import TablePageInfo from "./Partials/TablePageInfo";
import TablePagination from "./Partials/TablePagination";
import { useState } from "react";
import { useFilter } from "@/hooks/useFilter";
import InputSearch from "../Input/InputSearch";

const Table = ({
    column,
    data,
    pageInfo = false,
    pagination = false,
    only,
    routes,
    children,
}) => {
    const [params, setParams] = useState(data[only].state);

    useFilter({
        route: route(routes),
        values: params,
        only: [only],
    });

    const handleSort = (accessor, newDirection) => {
        setParams({ ...params, field: accessor, direction: newDirection });
    };

    const changeLimit = (e) => {
        setParams({ ...params, limit: e.value });
    };

    const onChangeSearch = (e) => {
        setParams({ ...params, page: "", [e.target.name]: e.target.value });
    };

    return (
        <>
            <div className="bg-white rounded-lg shadow-sm">
                <div className=" w-full flex p-6 px-6 ">
                    <InputSearch
                        type={"text"}
                        name={"search"}
                        value={params?.search || ""}
                        onChange={onChangeSearch}
                    />
                </div>
                <div className="">
                    <table>
                        <TableHead
                            column={column}
                            params={params}
                            handleSorting={handleSort}
                        />
                        <TableBody
                            column={column}
                            tableData={data[only].data}
                            indexData={data[only].meta.from}
                        >
                            {children}
                        </TableBody>
                    </table>
                    {(pageInfo || pagination) && (
                        <div className="flex items-center justify-between  w-full  p-6">
                            {pageInfo && (
                                <TablePageInfo datameta={data[only].meta} />
                            )}
                            {pagination && (
                                <TablePagination
                                    links={data[only].links}
                                    meta={data[only].meta}
                                    onChange={changeLimit}
                                    params={params}
                                />
                            )}
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default Table;

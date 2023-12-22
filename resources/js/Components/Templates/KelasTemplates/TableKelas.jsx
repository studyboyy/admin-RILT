import InputSearch from "@/Components/Fragments/Input/InputSearch";
import moment from "moment/moment";
import "moment/locale/id";
import { useState } from "react";
import { useFilter } from "@/hooks/useFilter";
import { PiArrowUpLight } from "react-icons/pi";
import SortIndicator from "@/Components/Fragments/Table/SortIndicator";
import TablePageInfo from "@/Components/Fragments/Table/Partials/TablePageInfo";
import TablePagination from "@/Components/Fragments/Table/Partials/TablePagination";

const TableKelas = ({ data, pageInfo, pagination }) => {
    const [params, setParams] = useState(data.kelas.state);
    const formatDay = (date) => {
        const day = moment(date).format("dddd D MMMM YYYY");
        return day;
    };

    useFilter({
        route: route("kelas.index"),
        values: params,
        only: ["kelas"],
    });

    const handleSort = (accessor) => {
        let newDirection = params?.direction ?? "asc";

        if (accessor === params?.field) {
            newDirection = newDirection === "asc" ? "desc" : "asc";
        }
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
                <table>
                    <thead>
                        <tr>
                            <th>No</th>
                            <th onClick={() => handleSort("kelas")}>
                                <SortIndicator
                                    field={params?.field}
                                    column={"kelas"}
                                    direction={params?.direction}
                                    label={"Kelas"}
                                />
                            </th>
                            <th onClick={() => handleSort("jurusan_id")}>
                                <SortIndicator
                                    field={params?.field}
                                    column={"jurusan_id"}
                                    direction={params?.direction}
                                    label={"jurusan"}
                                />
                            </th>
                            <th onClick={() => handleSort("jumlah_siswa")}>
                                <SortIndicator
                                    field={params?.field}
                                    column={"jumlah_siswa"}
                                    direction={params?.direction}
                                    label={"Jumlah Siswa"}
                                />
                            </th>
                            <th>Wali Kelas</th>
                            <th>Tanggal</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* {data.kelas.data.data.map((datas, index) => {
                            return (
                                <tr key={datas.id}>
                                    <td>{data.kelas.data.from + index}</td>
                                    <td>
                                        <span >Kelas</span>
                                       {}
                                    </td>
                                    <td>{datas.jurusan.jurusan}</td>
                                    <td>{datas.jumlah_siswa}</td>
                                    <td>{datas.wali_kelas}</td>
                                    <td>{formatDay(datas.created_at)}</td>
                                </tr>
                            );
                        })} */}
                        {data.kelas.data.data.map((datas, index) => {
                           return (
                            <tr key={datas.id}>
                                <td>{data.kelas.data.from + index}</td>
                                <td>{datas.kelas}</td>
                                <td>
                                    {datas.jurusan.length > 0 ? datas.jurusan.map((j,i) => (
                                        <ul key={j.id}>
                                            <li>{j.jurusan}</li>
                                        </ul>
                                    )): (datas.jurusan)}
                                </td>
                            </tr>
                           )
                        })}
                    </tbody>
                </table>
                {(pageInfo || pagination) && (
                    <div className="flex items-center justify-between  w-full  p-6">
                        {pageInfo && (
                            <TablePageInfo datameta={data.kelas.data} />
                        )}
                        {pagination && (
                            <TablePagination
                                links={data.kelas.data.links}
                                onChange={changeLimit}
                                params={params}
                            />
                        )}
                    </div>
                )}
            </div>
        </>
    );
};

export default TableKelas;

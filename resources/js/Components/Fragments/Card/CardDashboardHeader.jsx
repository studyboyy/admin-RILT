import { HiOutlineHomeModern } from "react-icons/hi2";

const DahsboardHeader = () => {
    return (
        <div className="w-full bg-white p-4 rounded-lg border shadow-sm">
            <div className="flex flex-col gap-2">
                <h1 className="text-lg text-slate-600 font-bold">
                    Selamat Datang{" "}
                    <span className="text-blue-400">Apep Kurniawan</span>
                </h1>
                <div className="flex items-center gap-2">
                    <HiOutlineHomeModern className="h-5 w-5 text-blue-400" />
                    <p className=" text-slate-400 font-semibold">/</p>
                    <p className="text-base text-slate-600 font-semibold">
                        Dashboard
                    </p>
                </div>
            </div>
        </div>
    );
};

export default DahsboardHeader;

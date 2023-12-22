
import CardDahboard from "@/Components/Fragments/Card/CardDashboard";
import DahsboardHeader from "@/Components/Fragments/Card/CardDashboardHeader";
import {
    PiChalkboardTeacherLight,
    PiUsersThreeLight,
    PiDoorLight,
    PiGearFineLight,
    PiStackLight,
} from "react-icons/pi";

const DashboardLayout = () => {
    return (
        <div className="main  h-full overflow-y-auto">
            <div className="grid grid-cols-1 sm:gap-5 gap-2">
                <div className="">
                    <DahsboardHeader />
                </div>
                <div className="grid sm:grid-cols-4 grid-cols-1 sm:gap-5 gap-2">
                    <CardDahboard
                        count={120}
                        IconCard={PiChalkboardTeacherLight}
                        percentage={20}
                        bgIcon={"bg-green-200"}
                        colorIcon={"text-green-700"}
                    >
                        Guru
                    </CardDahboard>
                    <CardDahboard
                        count={500}
                        IconCard={PiUsersThreeLight}
                        percentage={15.4}
                        bgIcon={"bg-blue-200"}
                        colorIcon={"text-blue-700"}
                    >
                        Siswa
                    </CardDahboard>
                    <CardDahboard
                        count={12}
                        IconCard={PiDoorLight}
                        percentage={0}
                        bgIcon={"bg-red-200"}
                        colorIcon={"text-red-700"}
                    >
                        Kelas
                    </CardDahboard>
                    <CardDahboard
                        count={5}
                        IconCard={PiGearFineLight}
                        percentage={0}
                        bgIcon={"bg-yellow-200"}
                        colorIcon={"text-yellow-700"}
                    >
                        Jurusan
                    </CardDahboard>
                    <CardDahboard
                        count={15}
                        IconCard={PiGearFineLight}
                        percentage={9}
                        bgIcon={"bg-yellow-200"}
                        colorIcon={"text-yellow-700"}
                    >
                        Mata Pelajaran
                    </CardDahboard>
                    <CardDahboard
                        count={5}
                        IconCard={PiStackLight}
                        percentage={0}
                        bgIcon={"bg-purple-200"}
                        colorIcon={"text-purple-700"}
                    >
                        Ekstrakurikuler
                    </CardDahboard>
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;

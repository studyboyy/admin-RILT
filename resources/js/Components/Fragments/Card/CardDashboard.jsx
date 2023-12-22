
import { FaArrowTrendUp } from "react-icons/fa6";

const CardDahboard = ({ children, IconCard: IconCard, count, percentage, bgIcon, colorIcon }) => {
    return (
        <div className="hover:shadow-xl  transition-shadow duration-300 bg-white rounded-lg shadow-sm border p-4 px-5 space-y-4 cursor-pointer">
            <div className="flex  justify-between items-center">
                <div className="flex flex-col gap-3 ">
                    <h1 className="font-bold text-lg text-slate-600 uppercase">
                        {children}
                    </h1>
                    <h1 className="font-bold text-3xl">{count}</h1>
                </div>
                <div className={`${bgIcon} p-2 rounded-full`}>
                    {IconCard && <IconCard className={`${colorIcon} text-4xl `} />}
                </div>
            </div>
            <div className="flex items-center gap-2">
                <span className="flex items-center gap-1 text-green-500">
                    
                    {percentage} % <FaArrowTrendUp className="h-4 " /> 
                </span>
                <h1 className="text-slate-500">dalam satu bulan terakhir</h1>
            </div>
        </div>
    );
};

export default CardDahboard;

const TablePageInfo = ({ datameta }) => {
    const { from, to, total } = datameta;
    return (
        <>
            <div className="space-x-2 text-sm text-slate-600">
                <span>Menampilkan</span>
                <strong>{from ? from : 0}</strong>
                <span>Hingga</span>
                <strong>{to ? to : 0} </strong>
                <span>Dari</span>
                <strong>{total}</strong>
                <span>Hasil</span>
            </div>
        </>
    );
};

export default TablePageInfo;

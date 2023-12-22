import Button from "@/Components/Fragments/Button/Button";
import Input from "@/Components/Fragments/Input/Input";
import InputSelect from "@/Components/Fragments/Input/InputSelect";
import Modal from "@/Components/Fragments/Modal/Modal";
import { useState } from "react";
import { useForm } from "@inertiajs/react";
import UseAnimations from "react-useanimations";
import loading from "react-useanimations/lib/loading";
import { toast } from "react-toastify";

const ModalInsertKelas = ({dataselect}) => {
    const [openModal, setOpenModal] = useState(false);

  

    const { data, setData, post, processing, errors, clearErrors, reset } =
        useForm({
            kelas: "",
            jurusan_id: "",
            jumlah_siswa: "",
            wali_kelas: "",
        });

    const submit = (e) => {
        e.preventDefault();
        post(route("kelas.store"), {
            onSuccess: () => {
                setOpenModal(false);
                reset();
                toast.success("Data Berhasil Disimpan");
            },
            onError: () => {
                if (Object.keys(errors).length > 0 && openModal) {
                    Object.keys(errors).map((key) => {
                        setData((prevData) => ({
                            ...prevData,
                            [key]: "",
                        }));
                    });
                }
                toast.error("Gagal menyimpan data. Periksa kembali formulir.");
            },
        });
    };

    const selectFormat = () => {
        return dataselect.map((item) => ({
            value: item.id,
            label: item.jurusan,
        }));
    };

    const handleCloseModal = () => {
        setOpenModal(false);
        reset();
        clearErrors();
    };

    return (
        <>
            <div className="modal-container">
                <Button
                    type={"button"}
                    variant={"primary"}
                    onClick={() => setOpenModal(true)}
                >
                    Tambah Data
                </Button>
                <Modal width={"sm"} open={openModal} onClose={handleCloseModal}>
                    <div className="grid grid-cols-1 px-2  ">
                        <h1 className="font-bold text-xl text-slate-600 mb-6">
                            Tambah Data Kelas
                        </h1>
                        <form onSubmit={submit}>
                            <div className="grid grid-cols-1 gap-5">
                                <div className="grid grid-cols-2 gap-x-3">
                                    <div className="">
                                        <Input
                                            onChange={(e) =>
                                                setData("kelas", e.target.value)
                                            }
                                            value={data.kelas}
                                            type="text"
                                            htmlFor="kelas"
                                            placeholder="Kelas"
                                            withError={errors.kelas}
                                            clearErrors={() =>
                                                clearErrors("kelas")
                                            }
                                        >
                                            Kelas
                                        </Input>
                                    </div>
                                    <InputSelect
                                        onChange={(e) =>
                                            setData("jurusan_id", e.value)
                                        }
                                        selectdata={selectFormat}
                                        withError={errors.jurusan_id}
                                        clearErrors={() =>
                                            clearErrors("jurusan_id")
                                        }
                                    >
                                        Jurusan
                                    </InputSelect>
                                </div>
                                <Input
                                    onChange={(e) =>
                                        setData("jumlah_siswa", e.target.value)
                                    }
                                    type={"text"}
                                    htmlFor={"jumlah_siswa"}
                                    placeholder={"Jumlah Siswa"}
                                    withError={errors.jumlah_siswa}
                                    clearErrors={() =>
                                        clearErrors("jumlah_siswa")
                                    }
                                >
                                    Jumlah Siswa
                                </Input>
                                <InputSelect
                                    onChange={(e) =>
                                        setData("wali_kelas", e.label)
                                    }
                                    selectdata={selectFormat}
                                    withError={errors.wali_kelas}
                                    clearErrors={() =>
                                        clearErrors("wali_kelas")
                                    }
                                >
                                    Wali Kelas
                                </InputSelect>
                                <div className="flex justify-end mt-3">
                                    <div className="flex items-center justify-center gap-x-2">
                                        <Button
                                            type={"button"}
                                            onClick={handleCloseModal}
                                            variant={"outline"}
                                        >
                                            Batal
                                        </Button>
                                        <Button
                                            type={"submit"}
                                            variant={"primary"}
                                            disabled={processing}
                                        >
                                            {processing ? (
                                                <div className="flex items-center gap-2 ">
                                                    <UseAnimations
                                                        animation={loading}
                                                        size={17}
                                                        wrapperStyle={{
                                                            fill: "purple",
                                                        }}
                                                    />
                                                    <span>Menyimpan</span>
                                                </div>
                                            ) : (
                                                <span>Simpan</span>
                                            )}
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </Modal>
            </div>
        </>
    );
};

export default ModalInsertKelas;

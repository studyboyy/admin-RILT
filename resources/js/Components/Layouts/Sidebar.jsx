import Linkside from "../Fragments/Accordion/LinkSide";
import useSidebarStore from "@/store/sidebarStore";
import Accordion from "../Fragments/Accordion/Accordion";
import AccordionHeader from "../Fragments/Accordion/AccordionHeader";
import AccordionLink from "../Fragments/Accordion/AccordionLink";
import {
    PiBookBookmarkLight,
    PiHouseLineLight,
    PiGearLight,
} from "react-icons/pi";
import { clsx } from "clsx";

const Sidebar = () => {
    const { isOpen } = useSidebarStore();

    return (
        <>
            <aside
                className={clsx(
                    isOpen ? "max-w-[280px]" : "max-w-[74px]",
                    "fixed left-0 top-0 h-screen w-full bg-white transition-all duration-500",
                )}
            >
                <div className="mt-24 h-screen overflow-y-auto ">
                    <div className="mb-60 space-y-3 px-4  ">
                        <Linkside
                            href={route("admin.dashboard")}
                            page={"Admin/Dashboard"}
                            IconLink={PiHouseLineLight}
                        >
                            Dashboard
                        </Linkside>
                        <Accordion>
                            <AccordionHeader
                                title={"Akademik"}
                                startUrl={"/"}
                                IconLink={PiBookBookmarkLight}
                            >
                                <AccordionLink
                                    route={route("admin.dashboard")}
                                    page={"Admin/Dashboard"}
                                >
                                    Jurusan
                                </AccordionLink>
                                <AccordionLink page={"Admin/Akademik/Kelas"}>
                                    Kelas
                                </AccordionLink>
                                <AccordionLink page={"Admin/Akademik/Mapel"}>
                                    Mata Pelajaran
                                </AccordionLink>
                            </AccordionHeader>
                        </Accordion>
                        {/* <Linkside
                            href={route("guru.index")}
                            page={"Admin/Guru/Guru"}
                            IconLink={PiChalkboardTeacher}
                        >
                            Guru Tenaga Kerja
                        </Linkside>
                        <Linkside
                            href={"/admin/blog"}
                            IconLink={PiNewspaperClippingLight}
                        >
                            Blog
                        </Linkside>
                        <Linkside
                            href={"/admin/product"}
                            IconLink={PiBasketLight}
                        >
                            Product
                        </Linkside> */}
                        {/* <Accordion>
                            <AccordionHeader
                                title={"Administrator"}
                                startUrl={"/admin/administrator"}
                                IconLink={PiUserCircleGearLight}
                            >
                                <AccordionLink
                                    href={"/admin/administrator/admin"}
                                >
                                    Admin
                                </AccordionLink>
                                <AccordionLink
                                    href={"/admin/administrator/guru"}
                                >
                                    Guru
                                </AccordionLink>
                                <AccordionLink
                                    href={"/admin/administrator/siswa"}
                                >
                                    Siswa
                                </AccordionLink>
                                <AccordionLink
                                    href={"/admin/administrator/guest"}
                                >
                                    Guest
                                </AccordionLink>
                                <AccordionLink
                                    href={"/admin/administrator/role"}
                                >
                                    Hak Akses
                                </AccordionLink>
                            </AccordionHeader>
                        </Accordion> */}
                        <Linkside
                            href={"/admin/pengaturan"}
                            IconLink={PiGearLight}
                        >
                            Pengaturan
                        </Linkside>
                    </div>
                </div>
            </aside>
        </>
    );
};

export default Sidebar;

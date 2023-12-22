import { create } from "zustand";

const useSidebarStore = create((set) => ({
    isOpen: true,
    toggleSidebar: () => set((state) => ({isOpen: !state.isOpen})),
    closeSidebar: () => set({isOpen: false}),
    openSidebar: () => set({isOpen: true})
}))

export default useSidebarStore;
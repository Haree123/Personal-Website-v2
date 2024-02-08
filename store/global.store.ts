import { create } from "zustand";

type GlobalStoreTye = {
  isMenuOpen: boolean;
  handleMenuOpen: () => void;
};

const useGlobalStore = create<GlobalStoreTye>((set) => ({
  isMenuOpen: false,
  handleMenuOpen: () => set((state) => ({ isMenuOpen: !state.isMenuOpen })),
}));

export default useGlobalStore;

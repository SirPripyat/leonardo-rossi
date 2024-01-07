import { create } from "zustand";

type State = {
  menuMobileIsOpen: boolean;
  toggleMenuMobile: () => void;
};

export const useMenuMobileStore = create<State>((set) => ({
  menuMobileIsOpen: false,
  toggleMenuMobile: () =>
    set((state) => ({ menuMobileIsOpen: !state.menuMobileIsOpen })),
}));

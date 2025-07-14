import { create } from 'zustand'

interface Bear {
  id: number;
  name: string;
}

interface BearState {
    bears: Bear[];
    blackBears: number;
    polarBears: number;
    pandaBears: number;
    increaseBlackBears: (by: number) => void;
    increasePolarBears: (by: number) => void;
    increasePandaBears: (by: number) => void;
    doNothing: () => void;
}

const useBearStore = create<BearState>()((set) => ({
  bears: [{ id: 1, name: 'Oso #1'}],
  blackBears: 10,
  polarBears: 5,
  pandaBears: 1,
  increaseBlackBears: (by: number) => set((state) => ({
    blackBears: state.blackBears + by
  })),
  increasePolarBears: (by: number) => set((state) => ({
    polarBears: state.polarBears + by
  })),
  increasePandaBears: (by: number) => set((state) => ({
    pandaBears: state.pandaBears + by
  })),
  doNothing: () => set((state) => ({bears: [...state.bears]})),
}))

export default useBearStore;
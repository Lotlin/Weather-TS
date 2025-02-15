import { useSelector } from "react-redux";
import type { AppDispatch, RootState } from "./store/store";
import { TypedUseSelectorHook, useDispatch } from "react-redux";


export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootState } from "../Redux/redux-store";

//Файл в котором мы пишем касомный селектор,типизируя его, чтобы избежать долгих прокидываний стейта.
export const appTypedSelector:TypedUseSelectorHook<RootState> = useSelector;
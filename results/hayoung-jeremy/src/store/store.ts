import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// hooks :
// 각각의 component 에서 useSelector 를 사용할 때마다 훅의 parameter 로 매번 RootState 를 가져와서 선언해주는 수고로움을 덜어줌
// dispatch 역시 위와 동일
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>();

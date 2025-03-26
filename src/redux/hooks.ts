import { useSelector, useDispatch, TypedUseSelectorHook } from 'react-redux'
import { RootState, AppDispatch } from '@/redux'  

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

// Create a typed version of useDispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()
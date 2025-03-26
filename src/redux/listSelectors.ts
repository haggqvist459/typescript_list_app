// Selectors
import { RootState } from './store' 

export const selectTitle = (state: RootState) => state.list.title

export const selectItems = (state: RootState) => state.list.items
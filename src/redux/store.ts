import { configureStore } from "@reduxjs/toolkit";
import listReducer from '@/redux/listSlice';
import { loadData, saveData, VISIBILITY_FILTERS } from '@/utils';

const preloadedState = {
    list: loadData() ?? {
      title: 'A Simple List',
      visibilityFilter: VISIBILITY_FILTERS.UNMARKED,
      items: [],
    },
  };
  
  export const store = configureStore({
    reducer: {
      list: listReducer,
    },
    preloadedState,
  });
  
  // Save to localStorage on any state change
  store.subscribe(() => {
    saveData(store.getState().list);
  });

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
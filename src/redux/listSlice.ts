import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { v4 as uuidv4 } from 'uuid'
import { VISIBILITY_FILTERS, ListItemData, VisibilityFilterData } from '@/utils'


export type ListState = {
  title: string,
  visibilityFilter: VisibilityFilterData
  items: ListItemData[]
}

const initialState: ListState = {
  title: 'Grocery List',
  visibilityFilter: VISIBILITY_FILTERS.UNMARKED,
  items: []
}

const listSlice = createSlice({
  name: 'list',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<string>) => {
      state.items.push({
        id: uuidv4(),
        text: action.payload,
        completed: false
      })
    },
    toggleCompletion: (state, action: PayloadAction<string>) => {
      const item = state.items.find(item => item.id === action.payload)
      if (item) {
        item.completed = !item.completed
      }
    },
    deleteItem: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter(item => item.id !== action.payload)
    },
    clearList: (state) => {
      state.items = [];
    },
    updateTitle: (state, action: PayloadAction<string>) => {
      const trimmed = action.payload.trim().slice(0, 18)
      state.title = trimmed;
    },
    setVisibilityFilter: (state, action: PayloadAction<VisibilityFilterData>) => {
      state.visibilityFilter = action.payload;
    }
  }
})

export const { addItem, toggleCompletion, deleteItem, clearList, updateTitle, setVisibilityFilter } = listSlice.actions;
export default listSlice.reducer;
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { v4 as uuidv4 } from 'uuid'

export type ListItem = {
  id: string
  text: string
  completed: boolean
}

type ListState = {
  title: string
  items: ListItem[]
}

const initialState: ListState = {
  title: 'My List',
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
      const trimmed = action.payload.trim().slice(0, 21)
      state.title = trimmed;
    }
  }
})

export const { addItem, toggleCompletion, deleteItem, clearList, updateTitle } = listSlice.actions;
export default listSlice.reducer;
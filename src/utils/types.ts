import { VISIBILITY_FILTERS } from "./constants";

export type ListItemData = {
  id: string
  text: string
  completed: boolean
}


export type ListState = {
  title: string,
  visibilityFilter: VisibilityFilterData
  items: ListItemData[]
}

export type VisibilityFilterData = typeof VISIBILITY_FILTERS[keyof typeof VISIBILITY_FILTERS];
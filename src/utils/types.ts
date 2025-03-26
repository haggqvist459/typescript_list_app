import { VISIBILITY_FILTERS } from "./constants";

export type ListItemData = {
    id: string
    text: string
    completed: boolean
  }

export type VisibilityFilterData = typeof VISIBILITY_FILTERS[keyof typeof VISIBILITY_FILTERS];
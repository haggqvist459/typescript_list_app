import { RootState } from './store' 
import { VISIBILITY_FILTERS, ListItemData } from '@/utils'

export const selectTitle = (state: RootState) => state.list.title
export const selectVisibilityFilter = (state: RootState) => state.list.visibilityFilter;

export const selectItems = (state: RootState) => {
    const items = state.list.items;
    const filter = state.list.visibilityFilter;
  
    switch (filter) {
      case VISIBILITY_FILTERS.MARKED:
        return items.filter((item: ListItemData) => item.completed);
      case VISIBILITY_FILTERS.UNMARKED:
        return items.filter((item: ListItemData) => !item.completed);
      case VISIBILITY_FILTERS.ALL:
      default:
        return items;
    }
  };
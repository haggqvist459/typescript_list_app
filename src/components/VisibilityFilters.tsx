import { useAppDispatch, setVisibilityFilter, useAppSelector, selectVisibilityFilter } from '@/redux';
import { VISIBILITY_FILTERS, VisibilityFilterData } from "@/utils";


const VisibilityFilters = () => {

  const dispatch = useAppDispatch();
  const activeFilter = useAppSelector(selectVisibilityFilter);

  console.log("activeFilter: ", activeFilter);

  return (
    <div className="flex justify-between mx-5 my-2">
      {Object.values(VISIBILITY_FILTERS).map((filter: VisibilityFilterData) => (
        <button
          key={filter}
          className={`menu-option ${filter === activeFilter ? 'underline inline-block text-primary' : ''}`}
          onClick={() => dispatch(setVisibilityFilter(filter))}>
          {filter}
        </button>
      ))}
    </div>
  )
}

export default VisibilityFilters;
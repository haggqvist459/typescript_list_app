import { useAppSelector, selectItems, useAppDispatch, toggleCompletion, deleteItem, selectVisibilityFilter } from '@/redux';
import { ListItemData } from '@/utils';
import { ListItem } from '@/components'

const List = () => {

    const items = useAppSelector(selectItems);
    const activeFilter = useAppSelector(selectVisibilityFilter)
    const dispatch = useAppDispatch();

    return (
        <div className='flex flex-col items-center mx-5'>
            {items.map((item: ListItemData) => (
                <ListItem
                    key={item.id}
                    text={item.text}
                    completed={item.completed}
                    onToggle={() => dispatch(toggleCompletion(item.id))}
                    onDelete={() => dispatch(deleteItem(item.id))}
                    activeFilter={activeFilter}
                />
            ))}
        </div>
    )
}

export default List;
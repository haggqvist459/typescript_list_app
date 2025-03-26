import { useState } from 'react'
import { addItem, useAppDispatch } from '@/redux'
import { AddItemIcon } from '@/components';

const AddItem = () => {

  const dispatch = useAppDispatch();
  const [value, setValue] = useState('');

  const handleAddItemClick = (value: string) => {
    dispatch(addItem(value));
    setValue('');
  }
  
  return (
    <div className="flex flex-row mx-5 justify-between space-x-1 border-b-2 border-b-primary">
      <div>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="focus:outline-none "
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              handleAddItemClick(value);
            }
          }}
        />
      </div>
      <div onClick={() => handleAddItemClick(value)}>
        <AddItemIcon />
      </div>
    </div>
  )
}

export default AddItem;


import { useState, useRef } from 'react'
import { addItem, useAppDispatch } from '@/redux'
import { AddItemIcon } from '@/components';

const AddItem = () => {

  const dispatch = useAppDispatch();
  const [value, setValue] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  const handleAddItemClick = (value: string) => {
    const trimmed = value.trim();
    if (!trimmed) return;
    dispatch(addItem(trimmed));
    setValue('');
  }

  const focusInput = () => {
    inputRef.current?.focus();
  };


  return (
    <div
      onClick={focusInput}
      className="flex flex-row mx-5 justify-between space-x-1 border-b-2 border-b-tertiary">
      <div>
        <input
          ref={inputRef}
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="focus:outline-none text-tertiary"
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


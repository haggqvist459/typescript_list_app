import { useState, useRef } from 'react'
import { CheckboxIcon, TrashcanIcon } from "@/components";
import { VISIBILITY_FILTERS } from '@/utils';

type Props = {
  text: string,
  completed: boolean,
  onDelete: () => void,
  onToggle: () => void,
  activeFilter: (typeof VISIBILITY_FILTERS)[keyof typeof VISIBILITY_FILTERS];
}

const ListItem = ({ text, completed, onDelete, onToggle, activeFilter }: Props) => {

  const [showDelete, setShowDelete] = useState(false)
  const [isSliding, setIsSliding] = useState(false);

  const touchStartX = useRef(0);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const deltaX = e.changedTouches[0].clientX - touchStartX.current;

    // Trigger show if swiped left more than 30px
    if (deltaX < -30) setShowDelete(true);
    // Optional: hide if swiped right
    if (deltaX > 30) setShowDelete(false);
  };

  const handleToggle = () => {
    setIsSliding(true);

    // wait for animation to complete before toggling state
    setTimeout(() => {
      setIsSliding(false);
      onToggle();
    }, 300); // match your transition duration
  };

  return (
    <div
      className={`flex justify-between items-baseline w-full mx-5 my-1 py-1 transition-transform duration-300 ease-in-out ${isSliding
          ? activeFilter === VISIBILITY_FILTERS.UNMARKED
            ? 'translate-x-full'
            : activeFilter === VISIBILITY_FILTERS.MARKED
              ? '-translate-x-full'
              : ''
          : 'translate-x-0'
        }`}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div onClick={handleToggle} className="flex flex-grow items-center space-x-1">
        <CheckboxIcon completed={completed} />
        <span className={`item-text text-tertiary ${completed ? 'line-through' : ''}`}>{text}</span>
      </div>
      <div
        className={`py-1 transition-all duration-300 overflow-hidden ${showDelete ? 'w-8 opacity-100' : 'w-0 opacity-0'
          }`}
        onClick={onDelete}
      >
        <TrashcanIcon completed={completed} />
      </div>
    </div>
  )
}

export default ListItem;
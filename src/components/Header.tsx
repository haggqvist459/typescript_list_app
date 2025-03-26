import { useState, useRef, useEffect } from 'react';
import { useAppDispatch, useAppSelector, updateTitle, selectTitle, clearList } from '@/redux';
import { TrashcanHeaderIcon } from '@/components';
import Modal from '@/components/Modal';

const Header = () => {
  const title = useAppSelector(selectTitle);
  
  const dispatch = useAppDispatch();

  const [newTitle, setNewTitle] = useState('');
  const [editing, setEditing] = useState(false);
  const [pressedLongEnough, setPressedLongEnough] = useState(false)
  const [showModal, setShowModal] = useState(false);

  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const inputRef = useRef<HTMLInputElement | null>(null)
 
  const setThemeColor = (color: string) => {
    const metaTag = document.querySelector('meta[name="theme-color"]');
    if (metaTag) {
      metaTag.setAttribute('content', color);
    }
  }

  // Shade the status bar when modal is open
  useEffect(() => {
    if (showModal) {
      setThemeColor('#5FA28A'); // rgba(0,0,0,0.2)
    } else {
      setThemeColor('#77CAAC'); // or your default
    }
  }, [showModal]);


  // Functions for long press on title
  const handleLongPressStart = () => {
    timerRef.current = setTimeout(() => {
      setPressedLongEnough(true)
    }, 300) // or whatever delay you want
  }

  const handleLongPressEnd = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current)
      timerRef.current = null
    }

    if (pressedLongEnough) {
      setEditing(true)
      setPressedLongEnough(false)

      // Immediate focus — still counts as part of the gesture
      setTimeout(() => {
        inputRef.current?.focus()
      }, 0)
    }
  }

  // Change the title value
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTitle(e.target.value)
  }

  // update redux + simple validation
  const handleBlur = () => {
    const trimmed = newTitle.trim();
    if (trimmed.length > 0) {
      dispatch(updateTitle(trimmed));
    }
    setEditing(false);
  };

  const onTrashConfirm = () => {
    dispatch(clearList())
    setShowModal(false)
  }


  return (
    <header className="flex justify-between items-baseline m-5 bg-mint-light ">
      <div
        onMouseDown={handleLongPressStart}
        onMouseUp={handleLongPressEnd}
        onTouchStart={handleLongPressStart}
        onTouchEnd={handleLongPressEnd}
      >
        {editing ? (
          <input
            type="text"
            placeholder='Update title'
            value={newTitle}
            onChange={handleChange}
            onBlur={handleBlur}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                e.currentTarget.blur();
              }
            }}
            autoFocus
            maxLength={15}
            className="title px-1 py-1 focus:outline-none bg-transparent"
          />
        ) : (
          <h1 className="title">{title}</h1>
        )}

      </div>
      <div onClick={() => setShowModal(true)}>
        <TrashcanHeaderIcon />
      </div>
      <Modal 
        isOpen={showModal}
        onCancel={() => setShowModal(false)}
        onConfirm={() => onTrashConfirm()}
        title='Clear the list'
        description='Do you want to delete the entire list? This action can not be undone.'
      />
    </header>
  )
}

export default Header;

// long press on header to swap header with input field for customised  title 
// dustbin in corner
// modal popup, no direct delete

import { useState, useRef, useEffect } from 'react';
import { useAppDispatch, useAppSelector, updateTitle, selectTitle, clearList } from '@/redux';
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
    dispatch(clearList)
    setShowModal(false)
  }


  return (
    <header className="flex flex-row justify-between items-baseline ml-2 mt-5 p-3 bg-mint-light ">
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
            maxLength={18}
            className="title px-1 py-1 focus:outline-none bg-transparent"
          />
        ) : (
          <h1 className="title">{title}</h1>
        )}

      </div>
      <div onClick={() => setShowModal(true)}>
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className="size-8 mr-2">
          <path fillRule="evenodd" d="M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z" clipRule="evenodd" />
        </svg>
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

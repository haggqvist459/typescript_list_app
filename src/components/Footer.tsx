import { useState, useEffect } from 'react'
import { CogWheel, Settings } from "@/components";
import { setStatusBarColor } from '@/utils';

const Footer = () => {

  const [showSettings, setShowSettings] = useState(false)
  
    useEffect(() => {
      setStatusBarColor(showSettings);
    }, [showSettings]);


  return (
    <footer className='flex justify-center items-center h-10 relative'>
      <div className="absolute left-5" onClick={() => setShowSettings(true)}>
        <CogWheel />
      </div>
      <a href="https://github.com/haggqvist459/typescript_list_app" target='_blank' className='underline text-s text-mint-white'>Code on GitHub</a>
      {showSettings &&
        <Settings handleClose={() => setShowSettings(false)} isOpen={showSettings} />
      }
    </footer>
  )
}

export default Footer;
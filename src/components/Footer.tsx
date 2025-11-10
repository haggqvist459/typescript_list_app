import { useState } from 'react'
import { CogWheel, Settings } from "@/components";

const Footer = () => {

  const [showSettings, setShowSettings] = useState(false)

  return (
    <footer className='flex justify-center items-center h-10 relative'>
      <div className="absolute left-5" onClick={() => setShowSettings(true)}>
        <CogWheel />
      </div>
      <a href="https://github.com/haggqvist459/typescript_list_app" target='_blank' className='underline text-sm text-tertiary'>Code on GitHub</a>
      <Settings handleClose={() => setShowSettings(false)} isOpen={showSettings} />
    </footer>
  )
}

export default Footer;
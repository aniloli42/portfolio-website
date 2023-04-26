import { useEffect, useState } from 'react'
import { MdNightlight, MdWbSunny } from 'react-icons/md'
import NavBar from '../NavBar'

const addDarkinHead = () =>
  window.document.querySelector('html').classList.add('dark')

const removeDarkinHead = () =>
  window.document.querySelector('html').classList.remove('dark')

const Header = () => {
  const [colorMode, setColorMode] = useState('dark')

  useEffect(() => {
    const userColorModePrefs = localStorage?.getItem('color-mode')
    if (userColorModePrefs == null || userColorModePrefs === 'dark') {
      setColorMode('dark')
      addDarkinHead()
    } else {
      setColorMode('light')
      removeDarkinHead()
    }
  }, [])

  const handleColorMode = () => {
    if (colorMode === 'dark') {
      localStorage.setItem('color-mode', 'light')
      removeDarkinHead()
    } else {
      localStorage.setItem('color-mode', 'dark')
      addDarkinHead()
    }

    setColorMode((prevColorMode) =>
      prevColorMode === 'dark' ? 'light' : 'dark'
    )
  }

  return (
    <header className='flex sticky top-0 z-50 items-center px-6 py-4 w-full shadow-md bg-secondary dark:bg-zinc-800'>
      <h2 className='text-2xl font-black text-main dark:text-secondary/90 dark:text-'>
        Anil Oli
      </h2>

      {/* Color Mode */}
      <button
        onClick={handleColorMode}
        className='mr-5 ml-auto md:mr-0 md:ml-0 md:order-3'
        aria-label='dark mode toggle button'
      >
        {colorMode === 'light' ? (
          <MdNightlight className='text-2xl -rotate-45 text-main/40' />
        ) : (
          <MdWbSunny className='text-2xl text-gray-200' />
        )}
      </button>

      <NavBar />
    </header>
  )
}

export default Header

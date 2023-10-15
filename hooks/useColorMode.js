import { useEffect } from 'react'
import { useState } from 'react'

const addDarkHeadClass = () =>
  window.document.querySelector('html').classList.add('dark')

const removeDarkHeadClass = () =>
  window.document.querySelector('html').classList.remove('dark')

const useColorMode = () => {
  const [colorMode, setColorMode] = useState()

  useEffect(() => {
    const themeMode = localStorage.getItem('colorMode')
    if (themeMode === 'light') return setColorMode('light')
    setColorMode('dark')
  }, [])

  const handleColorMode = () => {
    if (colorMode === 'dark') {
      localStorage.setItem('colorMode', 'light')
      removeDarkHeadClass()
    }

    if (colorMode === 'light') {
      localStorage.setItem('colorMode', 'dark')
      addDarkHeadClass()
    }

    setColorMode((prevColorMode) =>
      prevColorMode === 'dark' ? 'light' : 'dark'
    )
  }

  return {
    handleColorMode,
    colorMode,
  }
}

export default useColorMode

import { useEffect, useState } from 'react'

const addDarkHeadClass = () =>
  window.document.querySelector('html').classList.add('dark')

const removeDarkHeadClass = () =>
  window.document.querySelector('html').classList.remove('dark')

const useColorMode = () => {
  const [colorMode, setColorMode] = useState()

  useEffect(() => {
    const userColorModePrefs = localStorage.getItem('colorMode')

    if (userColorModePrefs == null || userColorModePrefs === 'dark') {
      addDarkHeadClass()
      setColorMode('dark')
      return
    }

    setColorMode('light')
    removeDarkHeadClass()
  }, [])

  const handleColorMode = () => {
    console.log(colorMode)
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

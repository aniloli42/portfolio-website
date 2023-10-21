import { MdNightlight, MdWbSunny } from 'react-icons/md'
import useColorMode from '../hooks/useColorMode'

const ColorModeButton = () => {
  const { colorMode, handleColorMode } = useColorMode()

  return (
    <>
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
    </>
  )
}
export default ColorModeButton

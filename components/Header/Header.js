import Link from 'next/link'
import ColorModeButton from '../ColorModeButton'
import NavBar from '../NavBar'

const Header = () => {
  return (
    <header className='flex sticky top-0 z-50 items-center px-6 py-4 w-full shadow-md bg-secondary dark:bg-zinc-800'>
      <Link href='/'>
        <a>
          <h1 className='text-2xl font-black text-main dark:text-secondary/90'>
            Anil Oli
          </h1>
        </a>
      </Link>
      <ColorModeButton />
      <NavBar />
    </header>
  )
}

export default Header

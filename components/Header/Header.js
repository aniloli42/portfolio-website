import NavBar from '../NavBar'

const Header = () => {
  return (
    <header className='sticky top-0 z-50 flex items-center justify-between w-full px-6 py-4 shadow-md bg-secondary dark:bg-zinc-800'>
      <h2 className='text-2xl font-black text-main dark:text-secondary/90 dark:text-'>
        Anil Oli
      </h2>
      <NavBar />
    </header>
  )
}

export default Header

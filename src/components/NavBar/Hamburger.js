const Hamburger = ({ toggleMobileNav }) => {
  return (
    <div
      className='flex flex-col w-8 h-4 gap-1 cursor-pointer md:hidden'
      onClick={toggleMobileNav}
    >
      <HamburgerBar />
      <HamburgerBar />
      <HamburgerBar />
    </div>
  )
}

const HamburgerBar = () => (
  <span className='w-full h-1 bg-main dark:bg-secondary/90'></span>
)

export default Hamburger

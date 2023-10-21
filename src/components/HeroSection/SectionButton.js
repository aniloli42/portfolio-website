import Link from 'next/link'

const SectionButton = ({ name, link }) => {
  return (
    <Link href={link}>
      <a className='w-full px-20 py-4 text-base font-medium text-center text-white outline-none bg-main hover:bg-main/90 focus-visible:bg-main/90 dark:bg-zinc-700 dark:focus-visible:bg-zinc-600 dark:hover:bg-zinc-600'>
        {name}
      </a>
    </Link>
  )
}

export default SectionButton

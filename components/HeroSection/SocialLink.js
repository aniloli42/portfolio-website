import Link from 'next/link'

const SocialLink = ({ link, icon, ariaLabel }) => {
  return (
    <Link href={link}>
      <a
        target={'_blank'}
        rel={'nofollow'}
        className='text-3xl outline-none group text-main dark:text-secondary/70 hover:text-main/80 dark:hover:text-secondary/90 dark:focus-visible:text-secondary/90'
        aria-label={ariaLabel}
      >
        {icon}
      </a>
    </Link>
  )
}

export default SocialLink

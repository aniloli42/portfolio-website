const Journey = ({
	startdate,
	startmonth,
	enddate,
	endmonth,
	title,
	description,
}) => {
	return (
		<div className='relative mb-3 pl-6 shadow-sm after:absolute after:left-0 after:top-0 after:h-6 after:w-6 after:-translate-x-[55%] after:rounded-full after:border-4 after:border-main/50 dark:after:border-secondary/50  after:bg-secondary dark:after:bg-zinc-900 after:[content:""] md:pl-8'>
			<div className='custom-shadow relative rounded-md bg-secondary dark:bg-zinc-700 px-4 py-2 after:absolute after:top-0 after:left-0 after:h-0 after:w-0 after:-translate-x-full  after:translate-y-1/4 after:border-t-[8px] after:border-b-[8px] after:border-r-[10px] after:border-main/40 after:border-t-transparent after:border-b-transparent after:[content:""]'>
				<div>
					<pre className='text-md text-sm text-main/80 dark:text-secondary/60'>
						{`${
							startdate && enddate
								? `${startmonth ? `${startmonth} ` : ''}${startdate} - ${
										endmonth ? `${endmonth} ` : ''
								  }${enddate}`
								: startdate
								? `From ${startmonth ? `${startmonth} ` : ''}${startdate}`
								: `End ${endmonth ? `${endmonth} ` : ''}${enddate}`
						}`}
					</pre>
				</div>
				<h2 className='text-xl font-semibold text-main dark:text-secondary/80'>
					{title}
				</h2>
				<p className='my-2 text-main/80 dark:text-secondary/60 font-medium'>
					{description}
				</p>
			</div>
		</div>
	)
}

export default Journey

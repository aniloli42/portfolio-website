import { Experience } from '@@types/experience.type'
import { RiExternalLinkFill } from 'react-icons/ri'
import Image from 'next/image'
import React from 'react'

type Props = Experience & {}

const Experience = ({
	companyLogo,
	companyName,
	companyURL,
	position,
	joinDate,
	endDate
}: Props) => {
	return (
		<div className="flex items-center gap-3 ">
			{companyLogo && (
				<Image
					src={companyLogo}
					width={36}
					height={36}
					alt={companyName}
					className="object-cover"
				/>
			)}
			<div>
				<h4 className="text-gray-300 font-medium sm:text-lg leading-5">
					<a
						href={companyURL}
						target="_blank"
						className="hover:underline hover:text-gray-400 focus-visible:text-gray-400 focus-visible:underline outline-none flex gap-1 flex-wrap items-center"
					>
						{position}
						<span>-</span>
						{companyName}
						<RiExternalLinkFill />
					</a>
				</h4>
				<p className="text-gray-500 ">
					{joinDate} - {endDate}
				</p>
			</div>
		</div>
	)
}

export default Experience

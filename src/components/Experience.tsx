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
					objectFit="cover"
					alt={companyName}
				/>
			)}
			<div>
				<h4 className="text-gray-400 font-medium text-lg flex gap-1">
					{position}
					<span>-</span>
					<a
						href={companyURL}
						target="_blank"
						className="hover:underline focus-visible:underline outline-none flex items-center gap-1"
					>
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

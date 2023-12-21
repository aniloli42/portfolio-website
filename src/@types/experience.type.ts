import { StaticImageData } from 'next/image'

export type Experience = {
	companyName: string
	companyLogo?: string | StaticImageData
	companyURL: string
	position: string
	joinDate: string
	endDate: string
}

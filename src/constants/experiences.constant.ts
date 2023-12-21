import { Experience } from '@@types/experience.type'
import InternsathiLogo from '@assets/images/internsathi.png'

const EXPERIENCES: Experience[] = [
	{
		companyName: 'Internsathi',
		companyLogo: InternsathiLogo,
		companyURL: 'https://www.linkedin.com/company/internsathi/',
		position: 'Junior Backend Developer',
		joinDate: 'Apr 2023',
		endDate: 'Jul 2023'
	},
	{
		companyName: 'Internsathi',
		companyLogo: InternsathiLogo,
		companyURL: 'https://www.linkedin.com/company/internsathi/',
		position: 'Backend Developer Intern',
		joinDate: 'Jan 2023',
		endDate: 'Mar 2023'
	}
] as const

export default EXPERIENCES

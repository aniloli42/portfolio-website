import { Skill } from '@@types/skill.type'
import {
	SiCss3,
	SiDocker,
	SiExpress,
	SiFirebase,
	SiGit,
	SiGithub,
	SiGooglemaps,
	SiGooglesheets,
	SiGraphql,
	SiHtml5,
	SiJavascript,
	SiMongodb,
	SiMongoose,
	SiMysql,
	SiNestjs,
	SiNextdotjs,
	SiNodedotjs,
	SiPostgresql,
	SiPrisma,
	SiPuppeteer,
	SiReact,
	SiRender,
	SiSass,
	SiTailwindcss,
	SiTypescript
} from 'react-icons/si'

type SkillType = {
	[key: string]: Skill[]
}

export const SKILLS: SkillType = {
	experienced: [
		{
			name: 'Nest.js',
			logo: SiNestjs
		},
		{
			name: 'Node.js',
			logo: SiNodedotjs
		},
		{
			name: 'Express.js',
			logo: SiExpress
		},
		{
			name: 'Typescript',
			logo: SiTypescript
		},
		{
			name: 'Javascript',
			logo: SiJavascript
		},
		{
			name: 'Next.js',
			logo: SiNextdotjs
		},
		{
			name: 'React',
			logo: SiReact
		},
		{
			name: 'Tailwind CSS',
			logo: SiTailwindcss
		},
		{
			name: 'HTML5',
			logo: SiHtml5
		},
		{
			name: 'CSS3',
			logo: SiCss3
		},
		{
			name: 'Docker',
			logo: SiDocker
		},
		{
			name: 'Git',
			logo: SiGit
		},
		{
			name: 'Github',
			logo: SiGithub
		},
		{
			name: 'Puppeteer',
			logo: SiPuppeteer
		},
		{
			name: 'Mongoose',
			logo: SiMongoose
		},
		{
			name: 'Prisma',
			logo: SiPrisma
		},
		{
			name: 'Mongo DB',
			logo: SiMongodb
		},
		{
			name: 'Postgres DB',
			logo: SiPostgresql
		},
		{
			name: 'REST API'
		}
	],
	familiar: [
		{
			name: 'React Native'
		},
		{
			name: 'TypeORM'
		},
		{
			name: 'GraphQL',
			logo: SiGraphql
		},
		{
			name: 'MySQL',
			logo: SiMysql
		},
		{
			name: 'Google Maps API',
			logo: SiGooglemaps
		},
		{
			name: 'Google Sheets API',
			logo: SiGooglesheets
		},
		{
			name: 'Firestore',
			logo: SiFirebase
		},
		{
			name: 'AWS ECS'
		},
		{
			name: 'Render',
			logo: SiRender
		},
		{
			name: 'SCSS',
			logo: SiSass
		}
	]
} as const

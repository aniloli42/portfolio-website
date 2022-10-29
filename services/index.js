import { gql, GraphQLClient } from 'graphql-request'

const GRAPHQL_API = process.env.NEXT_PUBLIC_GRAPHCMS_API_ENDPOINT
const graphcms = new GraphQLClient(GRAPHQL_API)

export const getProjects = async () => {
	try {
		const query = gql`
			{
				projectsConnection {
					edges {
						node {
							id
							projectTitle
							description
							liveLink
							repoLink
							projectTypes {
								type
							}
							skill {
								id
								programming
							}
						}
					}
				}
			}
		`

		const results = await graphcms.request(query)

		return results.projectsConnection.edges
	} catch (err) {
		console.error(err.message)
		return null
	}
}

export const getProjectTypes = async () => {
	try {
		const query = gql`
			{
				projectTypesConnection {
					edges {
						node {
							id
							type
						}
					}
				}
			}
		`

		const results = await graphcms.request(query)

		return results.projectTypesConnection.edges
	} catch (err) {
		console.error(err.message)
		return null
	}
}

export const getSkills = async () => {
	try {
		const query = gql`
			{
				skillsConnection(where: { feature: true }) {
					edges {
						node {
							programming
							id
						}
					}
				}
			}
		`

		const results = await graphcms.request(query)

		return results.skillsConnection.edges
	} catch (err) {
		console.error(err.message)
		return null
	}
}

export const getJourneys = async () => {
	try {
		const query = gql`
			{
				journeysConnection(orderBy: startdate_DESC) {
					edges {
						node {
							id
							title
							startdate
							startmonth
							enddate
							endmonth
							description
						}
					}
				}
			}
		`

		const results = await graphcms.request(query)

		return results.journeysConnection.edges
	} catch (error) {
		console.log(error.message)
		return null
	}
}

export const getResumeLink = async () => {
	try {
		const query = gql`
			{
				resumeLinksConnection {
					edges {
						node {
							resumeLink
						}
					}
				}
			}
		`

		const results = await graphcms.request(query)

		return results.resumeLinksConnection.edges[0].node.resumeLink
	} catch (error) {
		console.error(error)
		return null
	}
}

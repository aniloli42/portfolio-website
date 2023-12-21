export default function capitalizeFirstletter(text: string): string {
	const words = text.split(' ')

	return words.map((word) => capitalizeWordToTitleCase(word)).join(' ')
}

const capitalizeWordToTitleCase = (word: string): string => {
	const firstletter = word.charAt(0)
	const restletters = word.slice(1).toLowerCase()

	return `${firstletter.toUpperCase()}${restletters}`
}

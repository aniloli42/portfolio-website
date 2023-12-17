export default function capitalizeFirstletter(word: string) {
	const firstLetter = word.charAt(0)
	const restLetters = word.slice(1).toLowerCase()

	return `${firstLetter.toUpperCase()}${restLetters}`
}

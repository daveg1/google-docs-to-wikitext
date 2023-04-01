import { convertToWikiText } from './modules/convertToWikiText'
import './style.css'

const htmlBox = document.querySelector('#html-box') as HTMLDivElement
const wikiTextBox = document.querySelector('#wikitext-box') as HTMLTextAreaElement
const convertButton = document.querySelector('#convert-button') as HTMLButtonElement
const clearButton = document.querySelector('#clear-button') as HTMLButtonElement

convertButton.onclick = () => {
	const root = htmlBox.firstElementChild

	if (!root) {
		return
	}

	const wikiText = convertToWikiText(root as HTMLElement)
	wikiTextBox.disabled = false
	wikiTextBox.value = wikiText
}

clearButton.onclick = () => {
	htmlBox.innerHTML = ''
	wikiTextBox.value = ''
	wikiTextBox.disabled = true
}

export class Formatter {
	static isEmpty(node: HTMLElement) {
		return !node.textContent || (node.textContent && node.textContent === '')
	}

	static isWhiteSpace(node: HTMLElement) {
		return node.textContent && node.textContent.trim() === ''
	}

	static hasLeadingWhiteSpace(node: HTMLElement) {
		return node.textContent && node.textContent.trimStart().length !== node.textContent.length
	}

	static hasTrailingWhiteSpace(node: HTMLElement) {
		return node.textContent && node.textContent.trimEnd().length !== node.textContent.length
	}

	static isUnderlined(node: HTMLElement) {
		return node.style.textDecorationLine === 'underline'
	}

	static isBold(node: HTMLElement) {
		return node.style.fontWeight === '700'
	}

	static isItalics(node: HTMLElement) {
		return node.style.fontStyle === 'italic'
	}

	static isColoured(node: HTMLElement) {
		return !!node.style.color
	}
}

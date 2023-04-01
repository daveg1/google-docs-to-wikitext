import { Formatter } from '../classes/Formatter'
import { rgbToHex } from './rgbToHex'

export function formatText(node: HTMLElement) {
	// Sometimes Google Docs has empty formatting elements lying around
	// E.g. <span style="font-weight: 700"></span>
	if (Formatter.isEmpty(node)) {
		return ''
	}

	// Sometimes Google Docs has empty formatting elements,
	// but contain a necessary space
	// E.g. He sat<span style="font-weight: 700"> </span>down.
	if (Formatter.isWhiteSpace(node)) {
		return ' '
	}

	// Store text and progressively wrap it with different formatting options
	// Note: textContent can never be null because
	// 			 isNotAcceptedNode() prevents documents being accepted
	let content = node.textContent!
	let leadingSpace = ''
	let trailingSpace = ''

	// Sometimes the formatting contains text and a necessary space within
	// E.g. He<span ...> ordered</span> food
	// E.g. He <span ...>sat </span>down
	if (Formatter.hasLeadingWhiteSpace(node)) {
		content = content.trim()
		leadingSpace = ' '
	}

	if (Formatter.hasTrailingWhiteSpace(node)) {
		content = content.trim()
		trailingSpace = ' '
	}

	if (Formatter.isUnderlined(node)) {
		content = `<u>${content}</u>`
	}

	if (Formatter.isBold(node)) {
		content = `'''${content}'''`
	}

	if (Formatter.isItalics(node)) {
		content = `''${content}''`
	}

	if (Formatter.isColoured(node)) {
		const { color } = node.style

		content = `<span style="color:${rgbToHex(color)}">${content}</span>`
	}

	// Combine formatted text
	return leadingSpace + content + trailingSpace
}

import { formatText } from './formatText'

function isNotAcceptedNode(node: Node) {
	return !['H1', 'H2', 'H3', 'P', 'BR'].includes(node.nodeName)
}

export function convertToWikiText(root: HTMLElement): string {
	const lines: string[] = []
	let prevElem = document.body

	for (const node of root.children) {
		if (isNotAcceptedNode(node)) {
			continue
		}

		// If line contains multiple elements
		if (node.hasChildNodes()) {
			const parts = []

			// Convert each subelement to wikitext
			for (const child of node.children) {
				const part = formatText(child as HTMLElement)
				parts.push(part)
			}

			let line = parts.join('')

			if (node.nodeName === 'P' && node.nextSibling?.nodeName === 'P') {
				line += '<BR>'
			}

			lines.push(line + '\n')
		}

		// If line is a break
		if (node.nodeName === 'BR' && prevElem?.nodeName !== 'BR') {
			lines.push('\n')
		}

		prevElem = node as HTMLElement
	}

	return lines.join('')
}

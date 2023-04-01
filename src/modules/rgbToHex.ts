function hex(x: string) {
	return ('0' + parseInt(x).toString(16)).slice(-2)
}

export function rgbToHex(rgb: string) {
	if (/^#[0-9A-F]{6}$/i.test(rgb)) return rgb

	const cols = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/)!

	return '#' + hex(cols[1]) + hex(cols[2]) + hex(cols[3])
}

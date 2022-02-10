/**
 * @param {String} char
 */
function charToUnicode(char) {
	return typeof char !== 'string' ? char : char.codePointAt(0).toString(16);
}
/**
 * @param {String} str
 */
function strToBin(str) {
	return typeof str !== 'string'
		? str
		: [...str].map(char => char.charCodeAt(0).toString(2)).join(' ');
}
/**
 * @param {String} binString
 */
function binToString(binString) {
	return typeof binString !== 'string'
		? binString
		: binString
				.split(' ')
				.map(bin => String.fromCharCode(parseInt(bin, 2)))
				.join('');
}

/**
 * @param {(String|Number)} bin
 * @param {String} emoji
 */
function piriBinary(bin, emoji) {
	const emojiUnicode = charToUnicode(emoji);
	const binRegExp = new RegExp(`${bin}`, 'ig');
	/**
	 * @param {String} binStr
	 */
	function replaceBin(binStr) {
		if (typeof binStr !== 'string') return binStr;
		return binStr.replace(binRegExp, emoji);
	}
	/**
	 * @param {String} str
	 */
	function replaceEmoji(str) {
		if (typeof str !== 'string') return str;
		let output = '';
		for (const char of str) {
			output += charToUnicode(char) === emojiUnicode ? bin : char;
		}
		return output;
	}
	return Object.defineProperties(
		{},
		{
			replaceBin: { value: replaceBin },
			replaceEmoji: { value: replaceEmoji },
		}
	);
}

const PIRI_BINARIES = [
	piriBinary('0', '🍻'),
	piriBinary('1', '🌶'),
	piriBinary(' ', '😂'),
];

/**
 * @param {String} str
 * @returns {String}
 */
function encode(str) {
	if (typeof str !== 'string') {
		throw 'PIRI.pirify function only acceps a string as parameter';
	}
	return PIRI_BINARIES.reduce((acc, char) => {
		return char.replaceBin(acc);
	}, strToBin(str));
}

/**
 * @param {String} piriString
 * @returns {String}
 */
function decode(piriString) {
	if (typeof piriString !== 'string') {
		throw 'PIRI.parse function only acceps a string as parameter';
	}
	return binToString(
		PIRI_BINARIES.reduce((acc, char) => {
			return char.replaceEmoji(acc);
		}, piriString)
	);
}

const PIRI = { encode, decode };
export default PIRI;

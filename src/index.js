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
function binToStr(binString) {
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
			output += `${char}` === `${emoji}` ? bin : char;
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
 * @param {any} data
 * @returns {String}
 */
function encode(data) {
	return PIRI_BINARIES.reduce((acc, char) => {
		return char.replaceBin(acc);
	}, strToBin(typeof data === 'string' ? data : JSON.stringify(data)));
}

/**
 * @param {String} piriString
 * @returns {any}
 */
function decode(piriString) {
	const str = binToStr(
		PIRI_BINARIES.reduce((acc, char) => {
			return char.replaceEmoji(acc);
		}, piriString)
	);
	try {
		return JSON.parse(str);
	} catch (e) {
		return str;
	}
}

const PIRI = { encode, decode };
export default PIRI;

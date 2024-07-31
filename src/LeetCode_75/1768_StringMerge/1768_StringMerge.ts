function mergedAlternately(word1: string, word2: string): string {
	let mergedString: string[] = [];
	let len1: number = word1.length;
	let len2: number = word2.length;
	let i: number = 0;
	let j: number = 0;

	while (i < len1 || j < len2) {
		if (i < len1) {
			mergedString.push(word1[i]);
			i++
		}

		if (j < len2) {
			mergedString.push(word2[j]);
			j++
		}
	}

	let result: string = mergedString.join('');
	return result;

};

// Test examples
console.log(mergeAlternately("abc", "pqr"));    // Output: "apbqcr"
console.log(mergeAlternately("ab", "pqrs"));    // Output: "apbqrs"
console.log(mergeAlternately("abcd", "pq"));    // Output: "apbqcd"
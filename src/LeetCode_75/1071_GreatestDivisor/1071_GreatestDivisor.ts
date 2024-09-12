// # 1071. Greatest Common Divisor of Strings
// # Easy
// # Topics
// # Companies
// # Hint
// # For two strings s and t, we say "t divides s" if and only if s = t + t + t + ... + t + t (i.e., t is concatenated with itself one or more times).

// # Given two strings str1 and str2, return the largest string x such that x divides both str1 and str2.

// # Example 1:
// # Input: str1 = "ABCABC", str2 = "ABC"
// # Output: "ABC"

// # Example 2:
// # Input: str1 = "ABABAB", str2 = "ABAB"
// # Output: "AB"

// # Example 3:
// # Input: str1 = "LEET", str2 = "CODE"
// # Output: ""

// # Constraints:
// # 1 <= str1.length, str2.length <= 1000
// # str1 and str2 consist of English uppercase letters.

// Solution Steps:
// Define a helper function to calculate the GCD of two numbers (the lengths of the two strings).
// Use this GCD value to get a candidate substring. 
// Check if this substring can generate both strings by repeating itself.


function gcd(a: number, b: number): number { //the Euclidean algorithm to find the greatest common divisor of the lengths of str1 and str2
	while (b !== 0) {
		const temp = b;
		b = a % b;
		a = temp;
	}
	return a;
}

function gcdOfStrings(str1: string, str2: string): string {
	// Check if str1 + str2 is equal to str2 + str1. This ensures they have a common divisor string.
	if (str1 + str2 !== str2 + str1) {
		return "";
	}

	// Find the GCD of the lengths of the two strings
	const gcdLength = gcd(str1.length, str2.length);

	// Return the substring of str1 or str2 with length gcdLength
	return str1.substring(0, gcdLength);
}

// Example Usage:
console.log(gcdOfStrings("ABCABC", "ABC")); // Output: "ABC"
console.log(gcdOfStrings("ABABAB", "ABAB")); // Output: "AB"
console.log(gcdOfStrings("LEET", "CODE"));   // Output: ""


// Complexity:
// Time Complexity: O(n + m), where n is the length of str1 and m is the length of str2.
// Space Complexity: O(n + m), for storing the concatenated strings in the divisibility check.
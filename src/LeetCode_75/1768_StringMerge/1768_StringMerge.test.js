import {expect} from 'chai';
import {describe, it} from 'mocha';
import mergeAlternately from './1768_StringMerge.js'; // Import the function to be tested

describe('mergeAlternately', ()=>{
	
	it('Should merge alternately', ()=>{
		const word1 = "abc";
		const word2 = "pqr";
		const result = mergeAlternately(word1, word2);
		expect(result).to.equal("apbqcr");
	});

	it('Should merge alternately', ()=>{
		const word1 = "ab";
		const word2 = "pqrs";
		const result = mergeAlternately(word1, word2);
		expect(result).to.equal("apbqrs");
	});


})
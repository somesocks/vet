
import inspect from 'object-inspect';

import isProbablyURL from './isProbablyURL';

const TESTS = [
	{ input: 'http://www.test.com', expected: true },
	{ input: 'https://www.test.com', expected: true },
	{ input: 'http://test.com', expected: true },
	{ input: 'https://test.com', expected: true },
  { input: 'http://foo.com/blah_blah', expected: true },
  { input: 'http://foo.com/blah_blah/', expected: true },
  { input: 'http://foo.com/blah_blah_(wikipedia)', expected: true },
  { input: 'http://foo.com/blah_blah_(wikipedia)_(again)', expected: true },
  { input: 'http://www.example.com/wpstyle/?p=364', expected: true },
  { input: 'https://www.example.com/foo/?bar=baz&inga=42&quux', expected: true },
  { input: 'http://✪df.ws/123', expected: true },
  { input: 'http://userid:password@example.com:8080', expected: true },
  { input: 'http://userid:password@example.com:8080/', expected: true },
  { input: 'http://userid@example.com', expected: true },
  { input: 'http://userid@example.com/', expected: true },
  { input: 'http://userid@example.com:8080', expected: true },
  { input: 'http://userid@example.com:8080/', expected: true },
  { input: 'http://userid:password@example.com', expected: true },
  { input: 'http://userid:password@example.com/', expected: true },
  { input: 'http://142.42.1.1/', expected: true },
  { input: 'http://142.42.1.1:8080/', expected: true },
  { input: 'http://➡.ws/䨹', expected: true },
  { input: 'http://⌘.ws', expected: true },
  { input: 'http://⌘.ws/', expected: true },
  { input: 'http://foo.com/blah_(wikipedia)#cite-1', expected: true },
  { input: 'http://foo.com/blah_(wikipedia)_blah#cite-1', expected: true },
  { input: 'http://foo.com/unicode_(✪)_in_parens', expected: true },
  { input: 'http://foo.com/(something)?after=parens', expected: true },
  { input: 'http://☺.damowmow.com/', expected: true },
  { input: 'http://code.google.com/events/#&product=browser', expected: true },
  { input: 'http://j.mp', expected: true },
  { input: 'ftp://foo.bar/baz', expected: true },
  { input: 'http://foo.bar/?q=Test%20URL-encoded%20stuff', expected: true },
  { input: 'http://مثال.إختبار', expected: true },
  { input: 'http://例子.测试', expected: true },
  { input: 'http://उदाहरण.परीक्षा', expected: true },
  { input: 'http://-.~_!$&\'()*+,;=:%40:80%2f::::::@example.com', expected: true },
  { input: 'http://1337.net', expected: true },
  { input: 'http://a.b-c.de', expected: true },
  { input: 'http://223.255.255.254', expected: true },
  { input: 'https://hoyer-live.imgix.net/products/2720390/by_malene_birger-otter-kjole-m_nster-dame-midikjole.jpg?ch=Width,DPR,Save-Data&auto=format,compress&fit=fill&w=800&h=800&fill=white', expected: true },

  { input: 'http://', expected: false },
  { input: 'http://.', expected: false },
  { input: 'http://..', expected: false },
  { input: 'http://../', expected: false },
  { input: 'http://?', expected: false },
  { input: 'http://??', expected: false },
  { input: 'http://??/', expected: false },
  { input: 'http://#', expected: false },
  { input: 'http://##', expected: false },
  { input: 'http://##/', expected: false },
  { input: 'http://foo.bar?q=Spaces should be encoded', expected: false },
  { input: '//', expected: false },
  { input: '//a', expected: false },
  { input: '///a', expected: false },
  { input: '///', expected: false },
  { input: 'http:///a', expected: false },
  { input: 'foo.com', expected: false },
  { input: 'rdar://1234', expected: false },
  { input: 'h://test', expected: false },
  { input: 'http:// shouldfail.com', expected: false },
  { input: ':// should fail', expected: false },
  { input: 'http://foo.bar/foo(bar)baz quux', expected: false },
  { input: 'ftps://foo.bar/', expected: false },
  { input: 'http://-error-.invalid/', expected: false },
  // { input: 'http://a.b--c.de/', expected: false }, // known issue with this
  { input: 'http://-a.b.co', expected: false },
  { input: 'http://a.b-.co', expected: false },
  { input: 'http://0.0.0.0', expected: false },
  { input: 'http://10.1.1.0', expected: false },
  { input: 'http://10.1.1.255', expected: false },
  { input: 'http://224.1.1.1', expected: false },
  { input: 'http://1.1.1.1.1', expected: false },
  { input: 'http://123.123.123', expected: false },
  { input: 'http://3628126748', expected: false },
  { input: 'http://.www.foo.bar/', expected: false },
  // { input: 'http://www.foo.bar./', expected: false }, // known issue with this
  { input: 'http://.www.foo.bar./', expected: false },
  { input: 'http://10.1.1.1', expected: false },

	{ input: '', expected: false },
	{ input: 'a string', expected: false },
	{ input: undefined, expected: false },
	{ input: null, expected: false },
	{ input: 0, expected: false },
	{ input: false, expected: false },
	{ input: true, expected: false },
	{ input: {}, expected: false },
	{ input: [], expected: false },
	{ input: () => {}, expected: false },
	{ input: /a/, expected: false },
];

describe('vet/strings/isProbablyURL', () => {

	const _validator = isProbablyURL;
	const validator : typeof _validator = _validator;

	TESTS.forEach((test) => {
		it(
			`validator(${inspect(test.input)}) returns ${test.expected}`,
			(done) => done(
				validator(test.input) === test.expected ? null : new Error()
			)
		);

		it(
			`validator.assert(${inspect(test.input)}) should ${test.expected ? 'pass' : 'fail'}`,
			(done) => {
				let error = false;
				try {
					validator.assert(test.input);
				} catch (e) {
					error = true;
				}

				//no error should be thrown if a expected is expected
				done(!error == test.expected ? null : new Error());	
			}
		);
	});

});

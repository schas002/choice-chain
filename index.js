const sample = require('lodash.sample');
const defaults = require('lodash.defaults');

const START = -1;
const END = -2;

function evolve(network, options) {
	options = defaults({start: START, end: END, sample});
	if (typeof options.sample !== 'function') {
		throw new TypeError(
			`I don't know how to call an object of the ${typeof options.sample} type`
		);
	}

	let token = options.start;
	let output = []; // eslint-disable-line prefer-const

	while (token !== options.end) {
		let possible = []; // eslint-disable-line prefer-const
		network.forEach(_ => {
			if (_[0] === token) {
				possible.push(_[1]);
			}
		});
		token = options.sample(possible);
		output.push(token);
	}

	output.pop();
	return output;
}

module.exports = {
	START,
	END,
	evolve
};

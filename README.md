# choice-chain

[![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/sindresorhus/xo) ![Powered by love... and awoo](https://img.shields.io/badge/powered_by_love...-and_awoo-ff69b4.svg)

> A choice chain evolver

It's *like* a Markov chain, but instead of randomly selecting from inputs using probabilities, you do so by choosing a token. Well, guess what next.

## Install

```sh
$ npm install schas002/choice-chain
```

## Usage

```javascript
const choiceChain = require('choice-chain');

// At least one token is assumed to have choiceChain.START as item 0,
// and at least one token is assumed to have choiceChain.END as item 1
const network = [
	[choiceChain.START, 'a'],
	['a', 'a'],
	['a', 'b'],
	['b', 'a'],
	['b', 'b'],
	['b', choiceChain.END]
];

choiceChain.evolve(network); // returns an array consisting of some 'a's and 'b's
```

## API

### const <a id="START">`START`</a> = -1

The default start token. If, when passed to [`evolve(network, options)`](#evolve(network.2C.20options)), `options.start` is omitted or `undefined`, `evolve()` defaults to this.

### const <a id="END">`END`</a> = -2

The default end token. If, when passed to `evolve(network, options)`, `options.end` is omitted or `undefined`, `evolve()` defaults to this.

### function <a id="evolve(network)">`evolve(network)`</a>

Calls `evolve(network, options)` with default options. Basically, the `options` object is optional.

- **See Also**: [`evolve(network, options)`](#evolve(network.2C.20options))

### function <a id="evolve(network.2C.20options)">`evolve(network, options)`</a>

Evolves a choice chain network by its definition array.

A network is defined by an array of 2-tuples. The first item contains the item to start *from*, and the second contains the item to continue *to*.

At least one token is ***assumed*** to have `START` as item 0, and at least one token is assumed to have `END` as item 1.

- **Returns**: an array with the evolution output.

#### Parameters

- **network** the definition array of the network
- **options** the options object
  - **options.start** the start token in the definition array. Defaults to [`START`](#START).
  - **options.end** the end token in the definition array. Defaults to [`END`](#END).
  - **options.sample** the sample function. Called with an array of possible choices, returns one of those. Defaults to Lodash's [`sample`](https://lodash.com/docs#sample) function.

#### Throws

- **TypeError** if `options.sample` is not of the function type

## Maintainer

- Andrew Zyabin - @schas002 - [@zyabin101@botsin.space](https://botsin.space/@zyabin101)

## Contribute

A huge aye on that! Every issue and PR is welcome.

Every contributor to this repository must follow the code of conduct, which is: don't be rude.

## License

[MIT](LICENSE) © Andrew Zyabin

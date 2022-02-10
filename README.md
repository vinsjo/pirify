# pirify

Spice up your life

A great way to increase the size of your data and reduce the performance in your application at the same time!

## Installation

`npm i pirify`

Example:

```js
import PIRI from 'pirify';

const encoded = PIRI.encode({ piri: 'spicy' });
// => '🌶🌶🌶🌶🍻🌶🌶😂🌶🍻🍻🍻🌶🍻😂🌶🌶🌶🍻🍻🍻🍻😂🌶🌶🍻🌶🍻🍻🌶😂🌶🌶🌶🍻🍻🌶🍻😂🌶🌶🍻🌶🍻🍻🌶😂🌶🍻🍻🍻🌶🍻😂🌶🌶🌶🍻🌶🍻😂🌶🍻🍻🍻🌶🍻😂🌶🌶🌶🍻🍻🌶🌶😂🌶🌶🌶🍻🍻🍻🍻😂🌶🌶🍻🌶🍻🍻🌶😂🌶🌶🍻🍻🍻🌶🌶😂🌶🌶🌶🌶🍻🍻🌶😂🌶🍻🍻🍻🌶🍻😂🌶🌶🌶🌶🌶🍻🌶'
const decoded = PIRI.decode(encoded);
// => { piri: 'spicy' }
```

# pirify

Spice up your life

A great way to increase the size of your data and reduce the performance in your application at the same time!

## Installation

`npm i pirify`

Example:

```js
import PIRI from 'pirify';

const encoded = PIRI.encode({ piri: 'spicy' });
// => 'πΆπΆπΆπΆπ»πΆπΆππΆπ»π»π»πΆπ»ππΆπΆπΆπ»π»π»π»ππΆπΆπ»πΆπ»π»πΆππΆπΆπΆπ»π»πΆπ»ππΆπΆπ»πΆπ»π»πΆππΆπ»π»π»πΆπ»ππΆπΆπΆπ»πΆπ»ππΆπ»π»π»πΆπ»ππΆπΆπΆπ»π»πΆπΆππΆπΆπΆπ»π»π»π»ππΆπΆπ»πΆπ»π»πΆππΆπΆπ»π»π»πΆπΆππΆπΆπΆπΆπ»π»πΆππΆπ»π»π»πΆπ»ππΆπΆπΆπΆπΆπ»πΆ'
const decoded = PIRI.decode(encoded);
// => { piri: 'spicy' }
```

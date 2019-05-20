# key-keeper

[![Build Status](https://travis-ci.org/oychao/key-manage.svg?branch=master)](https://travis-ci.org/oychao/key-manage) [![996.icu](https://img.shields.io/badge/link-996.icu-red.svg)](https://996.icu)

## What and Why and How it works

In React and Vue applications when you don't have stable IDs for list items, you may use index as a key for identification, but there will be issues when it comes to components with state. Here is a React official post for an [in-depth explanation on the negative impacts of using an index as a key][1].

It is recommended to use an ID or email or something unique as a key for each item, but sometimes, we just don't have it. Of course we can generate some unique IDs, meanwhile your data schema will be changed.

What if we manage all keys somewhere else, like in a Map which uses list item (i.e. an object) as a key?

## How to use

```bash
npm install --save key-keeper
```

```jsx
// some React Component
import k from 'key-keeper';

// ...
<ul>
  {list.map((item, idx) => (
    <Item.view
      key={k(item)}
      title={item.title}
      remove={() => this.handleRemoveItem(idx)}
    />
  ))}
</ul>
// ...
```

Here is an [demo project][2].

## Caveats

You should always use an object as a parameter in key-keeper, for only objects are unique regardless of their values are equal, so we can tell a difference in a Map.

```javascript
'abcd' === 'abcd' // true
{ title: 'abcd' } === { title: 'abcd' } // false
```

If you are handling a list with basic typed values, decorate it before using key-keeper.

```javascript
['foo', 'foo', 'bar', 'bar'] // origin list
['foo', 'foo', 'bar', 'bar'].map(_ => ({ val: _ })) // decorated list
```

## License

[![LICENSE](https://img.shields.io/badge/license-Anti%20996-blue.svg)](https://github.com/996icu/996.ICU/blob/master/LICENSE)

[1]: https://medium.com/@robinpokorny/index-as-a-key-is-an-anti-pattern-e0349aece318
[2]: https://github.com/oychao/key-keeper/tree/master/demo

# Claviature

This lib allows you to render a flexible SVG piano claviature on the web. This package is a successor to [svg-piano](https://github.com/felixroos/svg-piano). To find out more about why this lib exists, check out the [blog post](https://loophole-letters.vercel.app/claviature).

## Install

```sh
npm i claviature --save
```

## Usage

```js
import { getClaviature } from 'claviature';
const svg = getClaviature({
    options,
    onClick,
    onMouseDown,
    onMouseUp,
    onMouseLeave,
  });
console.log(svg);
// do something with svg
```

This library is framework agnostic, which allows it to be framework agnostic.
To render the object you get from `getClaviature`, just wire it up with your favorite view library.

## React example

This is how you render with react:

```js
export default function Claviature({
  options,
  onClick,
  onMouseDown,
  onMouseUp,
  onMouseLeave,
}: any) {
  const svg = getClaviature({
    options,
    onClick,
    onMouseDown,
    onMouseUp,
    onMouseLeave,
  });
  return (
    <svg {...svg.attributes}>
      {svg.children.map((el, i) => {
        const TagName = el.name;
        return (
          <TagName key={`${el.name}-${i}`} {...el.attributes}>
            {el.value}
          </TagName>
        );
      })}
    </svg>
  );
}
```

## Options

You can customize the claviature using the following options:

### range

```js
<Claviature options={{ range: ['A1', 'C4'] }} />
```

<!-- <Claviature options={{ range: ['A1', 'C4'] }} /> -->

### palette

```js
<Claviature options={{ palette: ['#F2F2EF', '#39383D'] }} />
```

<!-- <Claviature options={{ palette: ['#F2F2EF', '#39383D'] }} /> -->

### stroke

```js
<Claviature options={{ stroke: 'steelblue' }} />
```

<!-- <Claviature options={{ stroke: 'steelblue' }} /> -->

### colorize

```js
<Claviature
  options={{
    colorize: [
      { keys: ['C3', 'E3', 'G3'], color: 'steelblue' },
      { keys: ['A3', 'C#4', 'E4'], color: 'tomato' },
    ],
  }}
/>
```

<Claviature
  options={{
    colorize: [
      { keys: ['C3', 'E3', 'G3'], color: 'steelblue' },
      { keys: ['A3', 'C#4', 'E4'], color: 'tomato' },
    ],
  }}
/>

### scaleX + scaleX

```js
<Claviature options={{ scaleX: 0.5, scaleY: 0.5 }} />
```

<!-- <Claviature options={{ scaleX: 0.5, scaleY: 0.5 }} /> -->

### upperHeight + lowerHeight

```js
<Claviature options={{ upperHeight: 50, lowerHeight: 20 }} />
```

<!-- <Claviature options={{ upperHeight: 50, lowerHeight: 20 }} /> -->

### onClick

```js
<Claviature
  onClick={(key) => {
    console.log('clicked', key);
    alert(`clicked ${key}`);
  }}
/>
```

<!-- <Claviature
  onClick={(key) => {
    console.log('clicked', key);
    alert(`clicked ${key}`);
  }}
/> -->

### labels

```js
<Claviature
  options={{
    colorize: [{ keys: ['C3', 'E3', 'G3', 'Bb3'], color: 'steelblue' }],
    labels: { C3: '1', E3: '3', G3: '5', Bb3: 'b7' },
  }}
/>
```

<!-- <Claviature
  options={{
    colorize: [{ keys: ['C3', 'E3', 'G3', 'Bb3'], color: 'steelblue' }],
    labels: { C3: '1', E3: '3', G3: '5', Bb3: 'b7' },
  }}
/> -->

### topLabels

```js
<Claviature
  options={{
    topLabels: true,
    colorize: [{ keys: ['C3', 'E3', 'G3', 'Bb3'], color: 'steelblue' }],
    labels: { C3: '1', E3: '3', G3: '5', Bb3: 'b7' },
  }}
/>
```

<!-- <Claviature
  options={{
    topLabels: true,
    colorize: [{ keys: ['C3', 'E3', 'G3', 'Bb3'], color: 'steelblue' }],
    labels: { C3: '1', E3: '3', G3: '5', Bb3: 'b7' },
  }}
/> -->

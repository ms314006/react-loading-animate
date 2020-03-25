# react-loading-animate
A simple animate for loading with React component.

Animate style and design reference [this pen](https://codepen.io/Manoz/pen/pydxK), thank [Manoz](https://codepen.io/Manoz)!

## Installation

Install from npm:
```bash
npm install react-loading-animate --save
```
Import in your project:

```javascript
import Loading from 'react-loading-animate';
// Be sure to include styles at during use react-loading-animate.
import 'react-loading-animate/dist/main.css';
```

## Usage

react-loading-animate is easy to generate animate for loading with React component.

### Basic Usage

<img src="./docs/assets/gif/simpleDemo.gif" style="width:100%;height:400px;">

#### Code

```jsx
import React, { useState } from 'react';
import Loading from 'react-loading-animate';
import 'react-loading-animate/dist/main.css';

const App = () => {
  const [isLoading, setIsLading] = useState(false);
  const loading = () => {
    setIsLading(true);
    setTimeout(() => { setIsLading(false); }, 3000);
  };
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: '#000',
      }}
    >
      <button type="button" onClick={loading}>Start loading!</button>
      {isLoading ? <Loading /> : null}
    </div>
  );
};
```

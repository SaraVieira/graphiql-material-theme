# Material Theme for GraphiQL

[Demo](https://iamsaravieira.com)

![demo](https://file-aymjezcxxa.now.sh/)

## How to use:

```bash
yarn add graphiql-material-theme --dev
```


```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import GraphiQL from 'graphiql';
import fetch from 'isomorphic-fetch';
import 'graphiql-material-theme';

function graphQLFetcher(graphQLParams) {
  return fetch(window.location.origin + '/graphql', {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(graphQLParams),
  }).then(response => response.json());
}

ReactDOM.render(<GraphiQL fetcher={graphQLFetcher} />, document.body);

```



## License: MIT

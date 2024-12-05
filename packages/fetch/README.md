# @evlmaistrenko/utils-fetch

Utilities for [FetchAPI](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
.

## Usage

```bash
npm i @evlmaistrenko/utils-fetch
```

```javascript
import * as fetchUtils from "@evlmaistrenko/utils-fetch";

// Check for error
await fetch("<some-url>").then(fetchUtils.ResponseError.check);
```

## Api docs

See [here](./docs/README.md).

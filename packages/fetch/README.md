# @evlmaistrenko/utils-fetch

[![NPM Version](https://img.shields.io/npm/v/%40evlmaistrenko%2Futils-fetch)](https://www.npmjs.com/package/@evlmaistrenko/utils-fetch)

Utilities for [FetchAPI](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
.

## Usage

```bash
npm i @evlmaistrenko/utils-fetch
```

```javascript
import * as fetchUtils from "@evlmaistrenko/utils-fetch";

// Check for error
try {
  await fetch("<some-url>").then((response) =>
    fetchUtils.StringError.check(response),
  );
} catch (error) {
  if (!(error instanceof fetchUtils.ResponseError)) throw error;
  console.log(error.response.status, error.parsed?.message);
}
```

### Extending `ResponseError`

Assuming that your response body contains comma-separated list of errors.

```typescript
import * as fetchUtils from "@evlmaistrenko/utils-fetch";

class MyResponseError extends fetchUtils.ResponseErrorBase<{
  errors: string[];
}> {
  async parse() {
    const json = await this.response.json();
    this.parsedValue = json.errors.split(", ");
  }
}
```

## Api docs

See [here](./docs/README.md).

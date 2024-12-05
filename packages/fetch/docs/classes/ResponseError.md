[**@evlmaistrenko/utils-fetch**](../README.md)

---

[@evlmaistrenko/utils-fetch](../README.md) / ResponseError

# Class: ResponseError

Represents error of `fetch` response

## Extends

- `Error`

## Constructors

### new ResponseError()

> **new ResponseError**(`response`): [`ResponseError`](ResponseError.md)

#### Parameters

##### response

`Response`

Corresponded response

#### Returns

[`ResponseError`](ResponseError.md)

#### Overrides

`Error.constructor`

#### Defined in

[response-error.ts:3](https://github.com/evlmaistrenko/js-utils/blob/71180528002bc2c31ceacaa99620003a0ef86378/packages/fetch/src/response-error.ts#L3)

## Properties

### response

> `readonly` **response**: `Response`

Corresponded response

#### Defined in

[response-error.ts:5](https://github.com/evlmaistrenko/js-utils/blob/71180528002bc2c31ceacaa99620003a0ef86378/packages/fetch/src/response-error.ts#L5)

## Methods

### check()

> `static` **check**(`response`): `Promise`\<`void`\>

Checks response for errors

#### Parameters

##### response

`Response`

Response to check

#### Returns

`Promise`\<`void`\>

#### Example

```ts
await fetch("<some-url>").then(ResponseError.check);
```

#### Throws

If there is an error

#### Defined in

[response-error.ts:19](https://github.com/evlmaistrenko/js-utils/blob/71180528002bc2c31ceacaa99620003a0ef86378/packages/fetch/src/response-error.ts#L19)

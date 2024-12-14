[**@evlmaistrenko/utils-fetch**](../README.md)

---

[@evlmaistrenko/utils-fetch](../README.md) / ResponseErrorBase

# Class: `abstract` ResponseErrorBase\<TParsed\>

Represents error of `fetch` response

## Extends

- `Error`

## Extended by

- [`ResponseError`](ResponseError.md)

## Type Parameters

• **TParsed**

## Constructors

### new ResponseErrorBase()

> **new ResponseErrorBase**\<`TParsed`\>(`response`): [`ResponseErrorBase`](ResponseErrorBase.md)\<`TParsed`\>

#### Parameters

##### response

`Response`

Corresponded response

#### Returns

[`ResponseErrorBase`](ResponseErrorBase.md)\<`TParsed`\>

#### Overrides

`Error.constructor`

#### Defined in

[response-error.ts:3](https://github.com/evlmaistrenko/js-utils/blob/d97d1004096313b64ca27d2104133f55e1be59a5/packages/fetch/src/response-error.ts#L3)

## Properties

### parsedValue?

> `protected` `optional` **parsedValue**: `TParsed`

Store for parsed response body

#### Defined in

[response-error.ts:31](https://github.com/evlmaistrenko/js-utils/blob/d97d1004096313b64ca27d2104133f55e1be59a5/packages/fetch/src/response-error.ts#L31)

---

### response

> `readonly` **response**: `Response`

Corresponded response

#### Defined in

[response-error.ts:5](https://github.com/evlmaistrenko/js-utils/blob/d97d1004096313b64ca27d2104133f55e1be59a5/packages/fetch/src/response-error.ts#L5)

## Accessors

### parsed

#### Get Signature

> **get** **parsed**(): `undefined` \| `TParsed`

Parsed response body. In general available only after executing `this.parse`

##### Returns

`undefined` \| `TParsed`

#### Defined in

[response-error.ts:34](https://github.com/evlmaistrenko/js-utils/blob/d97d1004096313b64ca27d2104133f55e1be59a5/packages/fetch/src/response-error.ts#L34)

## Methods

### parse()

> `abstract` `protected` **parse**(): `Promise`\<`void`\>

Parses response body

#### Returns

`Promise`\<`void`\>

#### Defined in

[response-error.ts:39](https://github.com/evlmaistrenko/js-utils/blob/d97d1004096313b64ca27d2104133f55e1be59a5/packages/fetch/src/response-error.ts#L39)

---

### check()

> `static` **check**(`response`, `parse`): `Promise`\<`void`\>

Checks response for errors

#### Parameters

##### response

`Response`

Response to check

##### parse

`boolean` = `true`

Whether to parse response body

#### Returns

`Promise`\<`void`\>

#### Example

```ts
await fetch("<some-url>").then((error) => ResponseError.check(error));
```

#### Defined in

[response-error.ts:19](https://github.com/evlmaistrenko/js-utils/blob/d97d1004096313b64ca27d2104133f55e1be59a5/packages/fetch/src/response-error.ts#L19)

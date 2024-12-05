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

[packages/fetch/src/response-error.ts:3](https://github.com/evlmaistrenko/js-utils/blob/ec03561880806c70a0d34b82b8c4882757237094/packages/fetch/src/response-error.ts#L3)

## Properties

### cause?

> `optional` **cause**: `unknown`

#### Inherited from

`Error.cause`

#### Defined in

node_modules/typescript/lib/lib.es2022.error.d.ts:26

---

### message

> **message**: `string`

#### Inherited from

`Error.message`

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1077

---

### name

> **name**: `string`

#### Inherited from

`Error.name`

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1076

---

### response

> `readonly` **response**: `Response`

Corresponded response

#### Defined in

[packages/fetch/src/response-error.ts:5](https://github.com/evlmaistrenko/js-utils/blob/ec03561880806c70a0d34b82b8c4882757237094/packages/fetch/src/response-error.ts#L5)

---

### stack?

> `optional` **stack**: `string`

#### Inherited from

`Error.stack`

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1078

---

### prepareStackTrace()?

> `static` `optional` **prepareStackTrace**: (`err`, `stackTraces`) => `any`

Optional override for formatting stack traces

#### Parameters

##### err

`Error`

##### stackTraces

`CallSite`[]

#### Returns

`any`

#### See

https://v8.dev/docs/stack-trace-api#customizing-stack-traces

#### Inherited from

`Error.prepareStackTrace`

#### Defined in

node_modules/@types/node/globals.d.ts:143

---

### stackTraceLimit

> `static` **stackTraceLimit**: `number`

#### Inherited from

`Error.stackTraceLimit`

#### Defined in

node_modules/@types/node/globals.d.ts:145

## Methods

### captureStackTrace()

> `static` **captureStackTrace**(`targetObject`, `constructorOpt`?): `void`

Create .stack property on a target object

#### Parameters

##### targetObject

`object`

##### constructorOpt?

`Function`

#### Returns

`void`

#### Inherited from

`Error.captureStackTrace`

#### Defined in

node_modules/@types/node/globals.d.ts:136

---

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

[packages/fetch/src/response-error.ts:19](https://github.com/evlmaistrenko/js-utils/blob/ec03561880806c70a0d34b82b8c4882757237094/packages/fetch/src/response-error.ts#L19)

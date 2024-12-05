import * as assert from "node:assert"
import { describe, it } from "node:test"

import { ResponseError } from "../dist/index.js"

describe("#response-error", () => {
	describe("#check", () => {
		it("Throws if there is error in response", async () => {
			const response = new Response(null, {
				status: 400,
				statusText: "Bad request",
			})
			await assert.rejects(() => ResponseError.check(response))
		})
		it("Does nothing if there is no error in response", async () => {
			const response = new Response(null, {
				status: 200,
				statusText: "Everything fine",
			})
			await ResponseError.check(response)
		})
	})
})

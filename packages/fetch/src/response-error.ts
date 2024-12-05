/** Represents error of `fetch` response */
export class ResponseError extends Error {
	constructor(
		/** Corresponded response */
		public readonly response: Response,
	) {
		super(`${response.status}. ${response.statusText}`)
	}

	/**
	 * Checks response for errors
	 *
	 * @example
	 * 	await fetch("<some-url>").then(ResponseError.check)
	 *
	 * @param response Response to check
	 * @throws {ResponseError} If there is an error
	 */
	static async check(response: Response): Promise<void> {
		if (response.ok) return
		const error = new ResponseError(response)
		throw error
	}
}

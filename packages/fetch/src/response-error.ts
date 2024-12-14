/** Represents error of `fetch` response */
export abstract class ResponseErrorBase<TParsed> extends Error {
	constructor(
		/** Corresponded response */
		readonly response: Response,
	) {
		super(`${response.status}. ${response.statusText}`)
	}

	/**
	 * Checks response for errors
	 *
	 * @example
	 * 	await fetch("<some-url>").then((error) => ResponseError.check(error))
	 *
	 * @param response Response to check
	 * @param parse Whether to parse response body
	 */
	static async check(response: Response, parse = true): Promise<void> {
		if (response.ok) return
		// @ts-ignore
		const error = new this(response)
		if (parse) {
			// @ts-ignore
			await error.parse()
		}
		throw error
	}

	/** Store for parsed response body */
	protected parsedValue?: TParsed

	/** Parsed response body. In general available only after executing `this.parse` */
	get parsed() {
		return this.parsedValue
	}

	/** Parses response body */
	protected abstract parse(): Promise<void>
}

export type TParsedMessage = { message?: string }

/** Implementation with some basic parsing */
export class ResponseError extends ResponseErrorBase<TParsedMessage> {
	/** Parses text or json body */
	protected async parse() {
		const text = await this.response.text()
		let message = text
		if (
			/application\/json/.test(this.response.headers.get("Content-Type") ?? "")
		) {
			const json = JSON.parse(text)
			message = json?.error?.message ?? json?.message ?? text
		}
		this.parsedValue = { message }
	}
}

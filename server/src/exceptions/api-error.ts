import { HTTPStatusCode } from "../enums"
import { ValuesOf } from '../types'

type ErrorCode = ValuesOf<typeof HTTPStatusCode>

class ApiError extends Error{
    errorCode: ErrorCode

    constructor(message: string, errorCode: ErrorCode = HTTPStatusCode.InternalServerError){
        super(message)

        this.errorCode = errorCode

        Object.setPrototypeOf(this, Error.prototype)
    }
    serializeErrors() {
        return [{message: this.message }]
    }
}

export { ApiError };
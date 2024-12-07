import { HTTPStatusCode } from "../enums"
import { ValuesOf } from '../types'


class ApiError extends Error{
    errorCode: ValuesOf<typeof HTTPStatusCode>

    constructor(message: string, errorCode=HTTPStatusCode.InternalServerError){
        super(message)

        this.errorCode = errorCode

        Object.setPrototypeOf(this, Error.prototype)
    }
    serializeErrors() {
        return [{message: this.message }]
    }
}

export { ApiError };
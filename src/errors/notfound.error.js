const BaseError = require("./base.error");

class NotFoundError extends BaseError {
    constructor(details) {
        super("NotFoundError", 404, "Resource Not Found", details);
    }
}


module.exports = NotFoundError;
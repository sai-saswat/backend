const { constants } = require("../constant");

const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode ?? 500;
    switch (statusCode) {
        case constants.NOT_FOUND:
            res.json({
                title: "Not found",
                message: err.message,
                stackTrace: err.stack
            });
            break;

        case constants.VALIDATION_ERROR:
            res.json({
                title: "validation failed",
                message: err.message,
                stackTrace: err.stack
            });
            break;

        case constants.UNAUTHORIZED:
            res.json({
                title: "Unathorized",
                message: err.message,
                stackTrace: err.stack
            });
            break;
        case constants.FORBIDDEN:
            res.json({
                title: "Forbidden",
                message: err.message,
                stackTrace: err.stack
            });
            break;

        case constants.SERVER_ERROR:
            res.json({
                title: "Server Erorr",
                message: err.message,
                stackTrace: err.stack
            });
            break;
        // default:
        //     res.json({
        //         title: "Server Down",
        //         message: err.message,
        //         stackTrace: err.stack
        //     });
        //     break;
    }
};


module.exports = errorHandler;
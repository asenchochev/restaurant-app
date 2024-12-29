class ErrorHandler extends Error{
    constructor(message, statusCode){
        super(message);
        this.statusCode = statusCode;
    }
}

export const errormiddleware = (err, req, res, next) => {
    err.message = err.message || "Internal server  Error!";
    err.statusCode = err.statusCode || 500;

    return res.statusCode(err.statusCode).json({
        success: false,
        message: err.message,
    });
};

export default ErrorHandler; 
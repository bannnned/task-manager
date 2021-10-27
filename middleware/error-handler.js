const {CustomAPIError} = require('../middleware/custom-error')

const errorHandlerMiddleware = (err, req, res, next) => {
    if(err instanceof CustomAPIError) {
        console.log(err.statusCode)
        return res.status(200).json( {msg: err.message} )
    }
    return res.status(500).json({msg: 'Something went wrong, try again later'})
}

module.exports = errorHandlerMiddleware
const _logger = (level, data) => {
    console.log(`[${new Date().toISOString()}]-[${level.toUpperCase()}]: ${data}`)
}

const info = (data) => {
    _logger('INFO', data)
}

const warning = (data) => {
    _logger('WARNING', `\x1b[93m${data}\x1b[0m`)
}

const error = (data) => {
    _logger('ERROR', `\x1b[91m${data}\x1b[0m`)
}

function requestLogger () {
    return function _requestLogger (req, res, next) {
        const oldSend = res.send
        const _startTime = new Date().getTime()

        res.send = function (data) {
            const _endTime = new Date().getTime()
            console.log(
              `[${new Date().toISOString()}]: ${req.method.toUpperCase()} ${req.originalUrl} ${res.statusCode} ${_endTime - _startTime} ms`
            )

            oldSend.apply(res, arguments)
        }
        next()
    }
}

module.exports = {info, warning, error, requestLogger}

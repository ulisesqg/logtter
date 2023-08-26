const _logger = (level, data) => {
    console.log(`[${new Date().toISOString()}]-[${level.toUpperCase()}]: ${data}`)
}

const info = (data) => {
    _logger('INFO', data)
}

const warning = (data) => {
    _logger('WARNING', data)
}

const error = (data) => {
    _logger('ERROR', data)
}

info('information')
warning('warning')
error('error')

export {info, warning, error}
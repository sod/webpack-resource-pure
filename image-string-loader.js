const {basename} = require('path');

module.exports.pitch = function(remainingRequest) {
    return `export default /*#__PURE__*/ ${JSON.stringify(basename(remainingRequest) + '-via-pure-loader')}`;
}
 
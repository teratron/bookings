const path = require('path')
const root = path.resolve(__dirname, '../')

module.exports = {
    root: root,
    src: path.resolve(root, 'src'),
    build: path.resolve(root, 'build'),
    public: path.resolve(root, 'public')
}

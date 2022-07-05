import fs from 'fs'
import packageJSON from '../../package.json'

export const props = {
    title: 'Bookings',
    description: 'Bookings - hotels etc.',
    keyword: 'bookings,hotel',
    publicURL: '',
    version: packageJSON.version,
    page: function () {
        let page = {}
        fs.readdirSync('./src/templates/pages')
            .filter(fileName => fileName.endsWith('.js'))
            .forEach(key => {
                key = key.replace(/\.js/gi, '')
                let value = key
                if (key === 'index') value = 'home'
                page[key] = {
                    title: value.replace(/[_|-]/, ' ').trim(),
                    url: `./${key}.html`
                }
            })
        console.log(page)
        return page
    }()
}

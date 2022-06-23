import fs from 'fs';
import packageJSON from '../../package.json'

export const props = {
    title: 'Bookings',
    description: 'Bookings - hotels etc.',
    keyword: 'bookings,hotel',
    publicURL: '',
    version: packageJSON.version,
    pages: fs.readdirSync('./src/templates/pages')
        .filter(fileName => fileName.endsWith('.js'))
        .map(page => page.replace(/.js/gi, '')),
    page: function () {
        const list = fs.readdirSync('./src/templates/pages')
            .filter(fileName => fileName.endsWith('.js'))
            .map(page => page.replace(/.js/gi, ''))

        let page = {}

        for (const key of list) {
            let val = key
            if (key === 'index') val = 'home'
            page[key] = {
                title: val.replace(/[_|-]/, ' ').trim(),
                url: `./${val}.html`
            }
        }

        return page
    }()
}

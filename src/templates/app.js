import fs from 'fs';
import packageJSON from '../../package.json'


export const props = {
    title: 'Bookings',
    description: 'Bookings - hotels etc.',
    keyword: 'bookings,hotel',
    publicURL: '',
    version: packageJSON.version,
    //navigation: {},
    pages: fs.readdirSync('./src/templates/pages')
        .filter(fileName => fileName.endsWith('.js'))
        .map(page => page.replace(/.js/gi, ''))
}

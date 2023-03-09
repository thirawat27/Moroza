const { readdirSync } = require('fs');

module.exports = (client) => {
    client.handComponents= async () => {
        const componentFolder = readdirSync('./src/components')
    }
}
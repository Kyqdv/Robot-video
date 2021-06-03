const readLine = require('readLine-sync')
const robots = {
    text: require('./robots/text.js')
}

async function start() {
    const content = {}

    content.searchTerm = askAndReturnSearchTerm()
    content.prefix = askAndReturnPrefix()
    
    await robots.text(content)
    
    function askAndReturnSearchTerm() {
        return readLine.question('Type a Wikipedia search term: ')    
    }
    function askAndReturnPrefix() {
        const prefixes = ['Who is', 'What is', 'The History of']
        const selectedPrefixIndex = readLine.keyInSelect(prefixes, 'Choose one option: ')
        const selectedPrefixText = prefixes[selectedPrefixIndex]
        
        return selectedPrefixText

        console.log(selectedPrefixText)
    }

    console.log(content)
}

start()

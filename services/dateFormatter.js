class DateFormattter {

    now() {
        const now = new Date()
        const date = now.getDate()
        const month = now.getMonth()
        const year = now.getFullYear()
        return `${date}/${month}/${year}`
    }
}

module.exports = new DateFormattter()
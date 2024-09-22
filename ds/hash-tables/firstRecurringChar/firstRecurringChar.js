function firstRecurringChar(arr) {
    const map = new Map()

    for (n of arr) {
        if (!map[n]) {
            map[n] = 1
        } else {
            return n
        }
    }

    return undefined
}


module.exports = firstRecurringChar
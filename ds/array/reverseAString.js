function reverse(str) {
    // check input
    if (!str || str.length < 2 || typeof str !== 'string') {
        return 'need a valid string'
    }

    let ans = '';

    const totalItems = str.length - 1;
    for (let i = totalItems; i >= 0; i--) {
        ans += str[i]
    }

    return ans;
}

module.exports = reverse;
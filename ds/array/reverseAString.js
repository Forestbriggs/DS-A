function reverse(str) {
    let ans = '';
    let splitStr = str.split('');

    for (let i = splitStr.length - 1; i >= 0; i--) {
        ans += splitStr[i]
    }

    return ans;
}

module.exports = reverse;
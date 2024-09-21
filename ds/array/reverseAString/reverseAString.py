def reverse(s):
    # check input
    if (not s or type(s) != str or len(s) < 2):
        return 'need a valid string'
    
    ans = ''
    
    totalItems = len(s) - 1
    for i in range(totalItems, -1, -1):
        ans += s[i]
    
    return ans

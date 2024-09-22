def first_recurring_char(arr):
    mp = {}
    
    for n in arr:
        if not mp.get(n):
            mp[n] = n
        else:
            return n
    
    return None
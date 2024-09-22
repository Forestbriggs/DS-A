package dsa

func firstRecurringChar(arr []int) any {
	mp := map[int]int{}

	for _, n := range arr {
		_, ok := mp[n]
		if !ok {
			mp[n] = n
		} else {
			return n
		}
	}

	return nil
}

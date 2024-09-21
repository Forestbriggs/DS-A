package dsa

import "errors"

func reverse(s string) (string, error) {
	if len(s) < 2 {
		return "", errors.New("need a string")
	}

	ans := ""

	totalItems := len(s) - 1

	for i := totalItems; i >= 0; i-- {
		// go returns a byte when we index into a string so we must convert back to string
		ans += string(s[i])
	}

	return ans, nil
}

package dsa

import "testing"

func TestReverseString(t *testing.T) {
	s := "Hello"
	expected := "olleH"
	ans, err := reverse(s)
	if ans != expected || err != nil {
		t.Fatalf(`reverse("Hello") = %q, want match for %q`, ans, expected)
	}
}

func TestReverseEmpty(t *testing.T) {
	ans, err := reverse("")
	if ans != "" || err == nil {
		t.Fatalf(`reverse("") = %q, %v, want""`, ans, err)
	}
}

package dsa

import (
	"testing"
)

func TestFirstRecurringInvalid(t *testing.T) {
	arr := []int{1, 2, 3}
	res := firstRecurringChar(arr)
	if res != nil {
		t.Fatalf(`firstRecurringChar([1, 2, 3]) = %v, want match for %v`, res, nil)
	}
}

func TestFirstRecurringEmpty(t *testing.T) {
	arr := []int{}
	res := firstRecurringChar(arr)
	if res != nil {
		t.Fatalf(`firstRecurringChar([]) = %v, want match for %v`, res, nil)
	}
}

func TestFirstRecurringSingle(t *testing.T) {
	arr := []int{1}
	res := firstRecurringChar(arr)
	if res != nil {
		t.Fatalf(`firstRecurringChar([]) = %v, want match for %v`, res, nil)
	}
}

func TestFirstRecurringValid(t *testing.T) {
	arr := []int{1, 2, 3, 1}
	expected := 1
	res := firstRecurringChar(arr)
	if res != expected {
		t.Fatalf(`firstRecurringChar([1, 2, 3, 1]) = %v, want match for %v`, res, expected)
	}
}

from pytest import mark
from firstRecurringChar import first_recurring_char


@mark.parametrize("s", [[2, 3, 4, 5], [], [1]])
@mark.parametrize("expected", [None])
def test_works_with_invalid_input(s, expected):
    assert first_recurring_char(s) == expected
    
    
@mark.parametrize("s,expected", [([1, 2, 3, 1], 1), ([1, 1, 2, 3], 1)])
def test_works_with_valid_input(s, expected):
    assert first_recurring_char(s) == expected
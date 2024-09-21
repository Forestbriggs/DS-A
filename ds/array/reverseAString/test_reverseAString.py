from pytest import mark
from reverseAString import reverse


@mark.parametrize("s", ['', 2, 1000000, 'I', {}, []])
@mark.parametrize("expected", ['need a valid string'])
def test_works_with_invalid_input(s, expected):
    assert reverse(s) == expected
    

@mark.parametrize("s,expected", [("Hello world", "dlrow olleH"), ("sum", "mus")])
def test_works_with_valid_input(s,expected):
    assert reverse(s) == expected
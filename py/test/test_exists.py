# BankLogos SDK exists test

import pytest
from banklogos_sdk import BankLogosSDK


class TestExists:

    def test_should_create_test_sdk(self):
        testsdk = BankLogosSDK.test(None, None)
        assert testsdk is not None

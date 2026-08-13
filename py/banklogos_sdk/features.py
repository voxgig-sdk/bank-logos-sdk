# BankLogos SDK feature factory

from banklogos_sdk.feature.base_feature import BankLogosBaseFeature
from banklogos_sdk.feature.test_feature import BankLogosTestFeature


def _make_feature(name):
    features = {
        "base": lambda: BankLogosBaseFeature(),
        "test": lambda: BankLogosTestFeature(),
    }
    factory = features.get(name)
    if factory is not None:
        return factory()
    return features["base"]()

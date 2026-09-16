# BankLogos SDK feature factory

from banklogos_sdk.feature.base_feature import BankLogosBaseFeature
from banklogos_sdk.feature.ratelimit_feature import BankLogosRatelimitFeature
from banklogos_sdk.feature.retry_feature import BankLogosRetryFeature
from banklogos_sdk.feature.test_feature import BankLogosTestFeature
from banklogos_sdk.feature.timeout_feature import BankLogosTimeoutFeature


_FEATURES = {
    "base": lambda: BankLogosBaseFeature(),
    "ratelimit": lambda: BankLogosRatelimitFeature(),
    "retry": lambda: BankLogosRetryFeature(),
    "test": lambda: BankLogosTestFeature(),
    "timeout": lambda: BankLogosTimeoutFeature(),
}


def _make_feature(name):
    factory = _FEATURES.get(name)
    if factory is not None:
        return factory()
    return _FEATURES["base"]()


# True when this SDK was generated with the named feature class - the
# constructor's tolerance for extend-carried features reads this (an
# active name with no generated class must not become a BaseFeature
# stray when an extend instance carries it).
def _has_feature(name):
    return name in _FEATURES

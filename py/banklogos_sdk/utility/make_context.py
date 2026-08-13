# BankLogos SDK utility: make_context

from banklogos_sdk.core.context import BankLogosContext


def make_context_util(ctxmap, basectx):
    return BankLogosContext(ctxmap, basectx)

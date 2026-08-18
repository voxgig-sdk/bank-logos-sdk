# BankLogos SDK configuration


_shared_config = None


def shared_config():
    """Return the process-wide config, built once on first use.

    The SDK reads the config on every request and never writes to it, so one
    instance is shared by every client rather than rebuilt per client.

    The returned dict is shared: treat it as read-only. Callers that need to
    mutate should use make_config, which always returns a fresh copy.
    """
    global _shared_config
    if _shared_config is None:
        _shared_config = make_config()
    return _shared_config


def make_config():
    """Build a fresh, fully materialised config dict.

    Every call rebuilds the whole structure, so prefer shared_config unless
    you need a private copy you intend to mutate.
    """
    return {
        "main": {
            "name": "BankLogos",
        },
        "feature": {
            "test": {
        "options": {
          "active": False,
        },
      },
        },
        "options": {
            "base": "https://api.bankconv.com",
            "auth": {
                "prefix": "",
            },
            "headers": {
        "content-type": "application/json",
      },
            "entity": {
                "logo": {},
            },
        },
        "entity": {
      "logo": {
        "fields": [
          {
            "name": "bank_code",
            "type": "`$STRING`",
          },
          {
            "name": "bank_name",
            "type": "`$STRING`",
          },
          {
            "name": "country",
            "type": "`$STRING`",
          },
          {
            "name": "logo_url",
            "type": "`$STRING`",
          },
        ],
        "name": "logo",
        "op": {
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "args": {
                  "query": [
                    {
                      "example": "Chase",
                      "kind": "query",
                      "name": "bank",
                      "orig": "bank",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                    {
                      "example": "US",
                      "kind": "query",
                      "name": "country",
                      "orig": "country",
                      "type": "`$STRING`",
                    },
                    {
                      "example": "png",
                      "kind": "query",
                      "name": "format",
                      "orig": "format",
                      "type": "`$STRING`",
                    },
                    {
                      "example": 256,
                      "kind": "query",
                      "name": "size",
                      "orig": "size",
                      "type": "`$INTEGER`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/logo",
                "parts": [
                  "logo",
                ],
                "select": {
                  "exist": [
                    "bank",
                    "country",
                    "format",
                    "size",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
    },
    }

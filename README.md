# BankLogos SDK

Fetch high-resolution logos for thousands of banks worldwide by domain, for fintech and financial apps

> TypeScript, Python, PHP, Golang, Ruby, Lua SDKs, a CLI, an interactive REPL, and an MCP server for AI agents — all generated from one OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).

## About Bank Logos API

The Bank Logos API is a small image-serving endpoint operated by [BankConv](https://bankconv.com), the same team behind the BankConv bank-statement conversion service. It is designed for fintech and financial applications that need to turn raw bank names or transaction strings into recognisable visual identifiers.

What you get from the API:

- A single image endpoint of the form `https://logo.bankconv.com/{domain}` (for example `https://logo.bankconv.com/americanexpress.com`) that returns a high-resolution logo for the bank associated with that domain.
- Coverage spanning thousands of banks worldwide, drawn from the same institution catalogue used by BankConv's statement converter.

Operational notes: the service is documented on [freepublicapis.com](https://freepublicapis.com/bank-logos-api) as an unauthenticated GET endpoint with CORS disabled. At the time of cataloguing, freepublicapis.com reports the endpoint as unreliable, so test availability before depending on it in production.

## Try it

**TypeScript**
```bash
npm install bank-logos
```

**Python**
```bash
pip install bank-logos-sdk
```

**PHP**
```bash
composer require voxgig/bank-logos-sdk
```

**Golang**
```bash
go get github.com/voxgig-sdk/bank-logos-sdk/go
```

**Ruby**
```bash
gem install bank-logos-sdk
```

**Lua**
```bash
luarocks install bank-logos-sdk
```

## 30-second quickstart

### TypeScript

```ts
import { BankLogosSDK } from 'bank-logos'

const client = new BankLogosSDK({})

```

See the [TypeScript README](ts/README.md) for the
full guide, or scroll down for the same example in other languages.

## What's in the box

| Surface | Use it for | Path |
| --- | --- | --- |
| **SDK** (TypeScript, Python, PHP, Golang, Ruby, Lua) | App integration | `ts/` `py/` `php/` `go/` `rb/` `lua/` |
| **CLI** | Scripts, CI, ops, one-off API calls | `go-cli/` |
| **MCP server** | AI agents (Claude, Cursor, Cline) | `go-mcp/` |

## Use it from an AI agent (MCP)

The generated MCP server exposes every operation in this SDK as an
[MCP](https://modelcontextprotocol.io) tool that Claude, Cursor or Cline
can call directly. Build and register it:

```bash
cd go-mcp && go build -o bank-logos-mcp .
```

Then add it to your agent's MCP config (Claude Desktop, Cursor, etc.):

```json
{
  "mcpServers": {
    "bank-logos": {
      "command": "/abs/path/to/bank-logos-mcp"
    }
  }
}
```

## Entities

The API exposes one entity:

| Entity | Description | API path |
| --- | --- | --- |
| **Logo** | A bank logo image looked up by the bank's domain name, served from `https://logo.bankconv.com/{domain}` as a high-resolution image suitable for UI display. | `/logo` |

Each entity supports the following operations where available: **load**,
**list**, **create**, **update**, and **remove**.

## Quickstart in other languages

### Python

```python
from banklogos_sdk import BankLogosSDK

client = BankLogosSDK({})


# Load a specific logo
logo, err = client.Logo(None).load(
    {"id": "example_id"}, None
)
```

### PHP

```php
<?php
require_once 'banklogos_sdk.php';

$client = new BankLogosSDK([]);


// Load a specific logo
[$logo, $err] = $client->Logo(null)->load(
    ["id" => "example_id"], null
);
```

### Golang

```go
import sdk "github.com/voxgig-sdk/bank-logos-sdk/go"

client := sdk.NewBankLogosSDK(map[string]any{})

```

### Ruby

```ruby
require_relative "BankLogos_sdk"

client = BankLogosSDK.new({})


# Load a specific logo
logo, err = client.Logo(nil).load(
  { "id" => "example_id" }, nil
)
```

### Lua

```lua
local sdk = require("bank-logos_sdk")

local client = sdk.new({})


-- Load a specific logo
local logo, err = client:Logo(nil):load(
  { id = "example_id" }, nil
)
```

## Unit testing in offline mode

Every SDK ships a test mode that swaps the HTTP transport for an
in-memory mock, so unit tests run offline.

### TypeScript

```ts
const client = BankLogosSDK.test()
const result = await client.Logo().load({ id: 'test01' })
// result.ok === true, result.data contains mock data
```

### Python

```python
client = BankLogosSDK.test(None, None)
result, err = client.Logo(None).load(
    {"id": "test01"}, None
)
```

### PHP

```php
$client = BankLogosSDK::test(null, null);
[$result, $err] = $client->Logo(null)->load(
    ["id" => "test01"], null
);
```

### Golang

```go
client := sdk.TestSDK(nil, nil)
result, err := client.Logo(nil).Load(
    map[string]any{"id": "test01"}, nil,
)
```

### Ruby

```ruby
client = BankLogosSDK.test(nil, nil)
result, err = client.Logo(nil).load(
  { "id" => "test01" }, nil
)
```

### Lua

```lua
local client = sdk.test(nil, nil)
local result, err = client:Logo(nil):load(
  { id = "test01" }, nil
)
```

## How it works

Every SDK call runs the same five-stage pipeline:

1. **Point** — resolve the API endpoint from the operation definition.
2. **Spec** — build the HTTP specification (URL, method, headers, body).
3. **Request** — send the HTTP request.
4. **Response** — receive and parse the response.
5. **Result** — extract the result data for the caller.

A feature hook fires at each stage (e.g. `PrePoint`, `PreSpec`,
`PreRequest`), so features can inspect or modify the pipeline without
forking the SDK.

### Features

| Feature | Purpose |
| --- | --- |
| **TestFeature** | In-memory mock transport for testing without a live server |

Pass custom features via the `extend` option at construction time.

### Direct and Prepare

For endpoints the entity model doesn't cover, use the low-level methods:

- **`direct(fetchargs)`** — build and send an HTTP request in one step.
- **`prepare(fetchargs)`** — build the request without sending it.

Both accept a map with `path`, `method`, `params`, `query`,
`headers`, and `body`. See the [How-to guides](#how-to-guides) below.

## How-to guides

### Make a direct API call

When the entity interface does not cover an endpoint, use `direct`:

**TypeScript:**
```ts
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example' },
})
console.log(result.data)
```

**Python:**
```python
result, err = client.direct({
    "path": "/api/resource/{id}",
    "method": "GET",
    "params": {"id": "example"},
})
```

**PHP:**
```php
[$result, $err] = $client->direct([
    "path" => "/api/resource/{id}",
    "method" => "GET",
    "params" => ["id" => "example"],
]);
```

**Go:**
```go
result, err := client.Direct(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "GET",
    "params": map[string]any{"id": "example"},
})
```

**Ruby:**
```ruby
result, err = client.direct({
  "path" => "/api/resource/{id}",
  "method" => "GET",
  "params" => { "id" => "example" },
})
```

**Lua:**
```lua
local result, err = client:direct({
  path = "/api/resource/{id}",
  method = "GET",
  params = { id = "example" },
})
```

## Per-language documentation

- [TypeScript](ts/README.md)
- [Python](py/README.md)
- [PHP](php/README.md)
- [Golang](go/README.md)
- [Ruby](rb/README.md)
- [Lua](lua/README.md)

## Using the Bank Logos API

- Upstream: [https://bankconv.com](https://bankconv.com)
- API docs: [https://freepublicapis.com/bank-logos-api](https://freepublicapis.com/bank-logos-api)

- No licence is published alongside the Bank Logos API.
- Logos belong to the respective banks and are likely subject to trademark restrictions.
- Confirm acceptable use with [BankConv](https://bankconv.com) before redistributing or embedding in commercial products.

---

Generated from the Bank Logos API OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).

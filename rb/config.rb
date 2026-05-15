# BankLogos SDK configuration

module BankLogosConfig
  def self.make_config
    {
      "main" => {
        "name" => "BankLogos",
      },
      "feature" => {
        "test" => {
          "options" => {
            "active" => false,
          },
        },
      },
      "options" => {
        "base" => "https://api.bankconv.com",
        "auth" => {
          "prefix" => "Bearer",
        },
        "headers" => {
          "content-type" => "application/json",
        },
        "entity" => {
          "logo" => {},
        },
      },
      "entity" => {
        "logo" => {
          "fields" => [
            {
              "name" => "bank_code",
              "req" => false,
              "type" => "`$STRING`",
              "active" => true,
              "index$" => 0,
            },
            {
              "name" => "bank_name",
              "req" => false,
              "type" => "`$STRING`",
              "active" => true,
              "index$" => 1,
            },
            {
              "name" => "country",
              "req" => false,
              "type" => "`$STRING`",
              "active" => true,
              "index$" => 2,
            },
            {
              "name" => "logo_url",
              "req" => false,
              "type" => "`$STRING`",
              "active" => true,
              "index$" => 3,
            },
          ],
          "name" => "logo",
          "op" => {
            "load" => {
              "name" => "load",
              "points" => [
                {
                  "args" => {
                    "query" => [
                      {
                        "example" => "Chase",
                        "kind" => "query",
                        "name" => "bank",
                        "orig" => "bank",
                        "reqd" => true,
                        "type" => "`$STRING`",
                        "active" => true,
                      },
                      {
                        "example" => "US",
                        "kind" => "query",
                        "name" => "country",
                        "orig" => "country",
                        "reqd" => false,
                        "type" => "`$STRING`",
                        "active" => true,
                      },
                      {
                        "example" => "png",
                        "kind" => "query",
                        "name" => "format",
                        "orig" => "format",
                        "reqd" => false,
                        "type" => "`$STRING`",
                        "active" => true,
                      },
                      {
                        "example" => 256,
                        "kind" => "query",
                        "name" => "size",
                        "orig" => "size",
                        "reqd" => false,
                        "type" => "`$INTEGER`",
                        "active" => true,
                      },
                    ],
                  },
                  "method" => "GET",
                  "orig" => "/logo",
                  "parts" => [
                    "logo",
                  ],
                  "select" => {
                    "exist" => [
                      "bank",
                      "country",
                      "format",
                      "size",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "active" => true,
                  "index$" => 0,
                },
              ],
              "input" => "data",
              "key$" => "load",
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
      },
    }
  end


  def self.make_feature(name)
    require_relative 'features'
    BankLogosFeatures.make_feature(name)
  end
end

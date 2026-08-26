
import { BaseFeature } from './feature/base/BaseFeature'
import { TestFeature } from './feature/test/TestFeature'



const FEATURE_CLASS: Record<string, typeof BaseFeature> = {
   test: TestFeature,

}


class Config {

  makeFeature(this: any, fn: string) {
    const fc = FEATURE_CLASS[fn]
    const fi = new fc()
    // TODO: errors etc
    return fi
  }

  // False for a feature added at runtime via options.extend (station's
  // adopt path) - the constructor uses this to skip makeFeature for names
  // no generated class backs.
  hasFeature(this: any, fn: string) {
    return null != FEATURE_CLASS[fn]
  }


  main = {
    name: 'BankLogos',
        slug: "bank-logos",
    version: "0.0.1",
    target: "ts",

  }


  feature = {
     test:     {
      "options": {
        "active": false
      },
      "transport": "base"
    },

  }


  options = {
    base: "https://api.bankconv.com",

    auth: {
      prefix: '',
    },

    headers: {
      "content-type": "application/json"
    },

    entity: {
      
      logo: {
      },

    }
  }


  entity = {
    "logo": {
      "fields": [
        {
          "name": "bank_code",
          "short": "Official bank code or identifier",
          "type": "`$STRING`"
        },
        {
          "name": "bank_name",
          "short": "Official name of the bank",
          "type": "`$STRING`"
        },
        {
          "name": "country",
          "short": "Country code where the bank operates",
          "type": "`$STRING`"
        },
        {
          "name": "logo_url",
          "short": "URL to the bank logo image",
          "type": "`$STRING`"
        }
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
                    "reqd": true,
                    "type": "`$STRING`"
                  },
                  {
                    "example": "US",
                    "kind": "query",
                    "name": "country",
                    "orig": "country",
                    "type": "`$STRING`"
                  },
                  {
                    "example": "png",
                    "kind": "query",
                    "name": "format",
                    "orig": "format",
                    "type": "`$STRING`"
                  },
                  {
                    "example": 256,
                    "kind": "query",
                    "name": "size",
                    "orig": "size",
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/logo",
              "parts": [
                "logo"
              ],
              "select": {
                "exist": [
                  "bank",
                  "country",
                  "format",
                  "size"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    }
  }
}


const config = new Config()

export {
  config
}


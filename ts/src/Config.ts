
import { BaseFeature } from './feature/base/BaseFeature'
import { TestFeature } from './feature/test/TestFeature'



const FEATURE_CLASS: Record<string, typeof BaseFeature> = {
   test: TestFeature

}


class Config {

  makeFeature(this: any, fn: string) {
    const fc = FEATURE_CLASS[fn]
    const fi = new fc()
    // TODO: errors etc
    return fi
  }


  main = {
    name: 'ProjectName',
  }


  feature = {
     test:     {
      "options": {
        "active": false
      }
    }

  }


  options = {
    base: 'https://api.bankconv.com',

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
          "req": false,
          "type": "`$STRING`",
          "active": true,
          "index$": 0
        },
        {
          "name": "bank_name",
          "req": false,
          "type": "`$STRING`",
          "active": true,
          "index$": 1
        },
        {
          "name": "country",
          "req": false,
          "type": "`$STRING`",
          "active": true,
          "index$": 2
        },
        {
          "name": "logo_url",
          "req": false,
          "type": "`$STRING`",
          "active": true,
          "index$": 3
        }
      ],
      "name": "logo",
      "op": {
        "load": {
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
                    "type": "`$STRING`",
                    "active": true
                  },
                  {
                    "example": "US",
                    "kind": "query",
                    "name": "country",
                    "orig": "country",
                    "reqd": false,
                    "type": "`$STRING`",
                    "active": true
                  },
                  {
                    "example": "png",
                    "kind": "query",
                    "name": "format",
                    "orig": "format",
                    "reqd": false,
                    "type": "`$STRING`",
                    "active": true
                  },
                  {
                    "example": 256,
                    "kind": "query",
                    "name": "size",
                    "orig": "size",
                    "reqd": false,
                    "type": "`$INTEGER`",
                    "active": true
                  }
                ]
              },
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
              },
              "active": true,
              "index$": 0
            }
          ],
          "input": "data",
          "key$": "load"
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


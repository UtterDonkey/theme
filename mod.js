const icon = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAADTUlEQVRIS63VTWgUZxgH8P+7Mzsf+2U2SrPJKBoEA1WKUMzupaKHpgoetadCnaBN9FRaLLRQEW17KKIed1V21dJLbU/FRqiixx219NDaVi+NmnWNZT+cze7Ozsf7yoxEYpnMRJI5DQzP+5v3P8/7DEHANVHM7iXAVyAkwQCNgZYjDp3KH7jzZ1DdwmckBLirrE29KQgcTNOBZTrQdYP2es631LSPnp34zQqDlgTIcvTlOowxNBsG6o3uHw6he899eOt+EBIGeBHxUW5ElDjEYwKSKdFbzzAsVB61/q4lWlsvv3/XXAwJBOaL9pe29slE3MgoOSHF+N0DAwnwfASNehe1WudkYVw7sixgYfFkMXtSikU/VZQU3LhmHjVZ17Sz59Tbt/2QJe3glUIGMnEhe3PgjcR2Ny5dN/Df0873ebX8gS/wshUBUMK+PKveuhzWGZPF0fdiceHq4FAK3a6FyoyuFca13GKA14ruw8qM/ldhXNscBnz03duDUSY83jCchu04ePBvs5ZXtTW+wGQpW12/IZ1xP9r0dAM9g2bOH9Rmg5DDpW0ZwvFVD7CpW1ctqNqQP1DM/ZJRErvdFqw+bqHdMccKqvZr4AEsbdsVj4lTbkTttolqtXWloGp7FtlB7uv+1fIX6bSM9pyJJ9W5a3m1PAYC5ou4H7mUvT44mNwZTwio17to1Dsn8qp21Bc4cGl0WCLcP+vW9wkRQrxddNrW6cyw9NmxnTfthUX7ftgs9LcTP8dkfmxIWeW16cOHTdO22EheLU8v2qYTxezn6bT8zeo1MS/T2dk5GB3rHgNOMd6+SsFxnE3eJcAnohwdUZQkQAjqtTYadePHwri2L/CgHbuxg3/ywPhdUZJbJOnF3GnpPS9fw7ABAkgij3h8flS46REYPRvVig5KoebV8oXAg3bw4ugmjkV+6u+Xt/T1SSDE/wy6sTxrdiHHBYgCH4q8ssqLjOPHZYk/kkiKEUHg4Y5qBgbLpDBNG62W5Rhde4rjsGdISUEUgxHf1zx0MfsWdTBGCHIAeQeABbAyBdPmfziTpdz+SASlMOT1Z9GCoJeCLAtwrTBk2UAYsiKAH+JN2YreXDHg/wilzJ3Oz1YUmEcYY2fce0LIx88BFi6vvp70RPYAAAAASUVORK5CYII=";

class Utilities {

  constructor() {}

  getInfo() {
    return {
      id: 'utilities',
      name: 'Utlities',

      color1: '#8BC34A',
      color2: '#7CB342',
      color3: '#689F38',

      menuIconURI: icon,

      blocks: [
        {
          opcode: 'isExactly',

          blockType: Scratch.BlockType.BOOLEAN,

          text: 'is [A] exactly [B]?',
          arguments: {
            A: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'apple'
            },
            B: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'APPLE'
            }
          }
        },
        {
          opcode: 'isLessOrEqual',

          blockType: Scratch.BlockType.BOOLEAN,

          text: '[A] <= [B]',
          arguments: {
            A: {
              type: Scratch.ArgumentType.NUMBER
            },
            B: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: 50
            }
          }
        },
        {
          opcode: 'isMoreOrEqual',

          blockType: Scratch.BlockType.BOOLEAN,

          text: '[A] >= [B]',
          arguments: {
            A: {
              type: Scratch.ArgumentType.NUMBER
            },
            B: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: 50
            }
          }
        },
        {
          opcode: 'trueBlock',
          blockType: Scratch.BlockType.BOOLEAN,
          text: 'true'
        },
        {
          opcode: 'falseBlock',
          blockType: Scratch.BlockType.BOOLEAN,
          text: 'false'
        },
        {
          opcode: 'exponent',

          blockType: Scratch.BlockType.REPORTER,

          text: '[A] ^ [B]',
          arguments: {
            A: {
              type: Scratch.ArgumentType.NUMBER
            },
            B: {
              type: Scratch.ArgumentType.NUMBER
            }
          }
        },
        {
          opcode: 'pi',
          blockType: Scratch.BlockType.REPORTER,
          text: 'pi'
        },
        {
          opcode: 'ternaryOperator',

          blockType: Scratch.BlockType.REPORTER,

          text: 'if [A] then [B] else [C]',
          arguments: {
            A: {
              type: Scratch.ArgumentType.BOOLEAN
            },
            B: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'banana'
            },
            C: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'apple'
            }
          }
        },
        {
          opcode: 'letters',

          blockType: Scratch.BlockType.REPORTER,

          text: 'letters [START] to [END] of [STRING]',
          arguments: {
            START: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: 5
            },
            END: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: 7
            },
            STRING: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'red apple'
            }
          }
        },
        {
          opcode: 'currentMillisecond',
          blockType: Scratch.BlockType.REPORTER,
          text: 'current millisecond'
        },
        {
          opcode: 'fetchFrom',

          blockType: Scratch.BlockType.REPORTER,

          text: 'get content from [URL]',
          arguments: {
            URL: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'https://pixelbulb.online'
            }
          }
        },
        {
          opcode: 'parseJSON',

          blockType: Scratch.BlockType.REPORTER,

          text: 'get [PATH] from JSON [JSON_STRING]',
          arguments: {
            PATH: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'name'
            },
            JSON_STRING: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: '{"name": "bob"}'
            }
          }
        },
        {
          opcode: 'stringToBoolean',

          blockType: Scratch.BlockType.BOOLEAN,

          text: 'convert [STRING] to boolean',
          arguments: {
            STRING: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'true'
            }
          }
        },
        {
          opcode: 'regexReplace',

          blockType: Scratch.BlockType.REPORTER,

          text: 'replace [STRING] using the rule [REGEX] with [NEWSTRING]',
          arguments: {
            STRING: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: ' '
            },
            REGEX: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: ' '
            },
            NEWSTRING: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: ' '
            }
          }
        }
      ]
    }
  }

  isExactly({A, B}) {
    return A === B;
  }

  isLessOrEqual({A, B}) {
    return A <= B;
  }

  isMoreOrEqual({A, B}) {
    return A >= B;
  }

  trueBlock() {
    return true;
  }

  falseBlock() {
    return false;
  }

  exponent({A, B}) {
    return Math.pow(A, B);
  }

  pi() {
    return Math.PI;
  }

  ternaryOperator({A, B, C}) {
    return A ? B : C;
  }

  letters({STRING, START, END}) {
    return STRING.slice(Math.max(1, START) - 1, Math.min(STRING.length, END));
  }

  currentMillisecond() {
    return Date.now() % 1000;
  }

  fetchFrom({URL}) {
    return fetch(URL).then(res => res.text())
      .catch(err => '');
  }

  parseJSON({PATH, JSON_STRING}) {
    try {
      const path = PATH.toString().split('/').map(prop => decodeURIComponent(prop));
      if (path[0] === '') path.splice(0, 1);
      if (path[path.length - 1] === '') path.splice(-1, 1);
      let json;
      try {
        json = JSON.parse(' ' + JSON_STRING);
      } catch (e) {
        return e.message;
      }
      path.forEach(prop => json = json[prop]);
      if (json === null) return 'null';
      else if (json === undefined) return '';
      else if (typeof json === 'object') return JSON.stringify(json);
      else return json.toString();
    } catch (err) {
      return '';
    }
  }

  stringToBoolean({STRING}) {
    return STRING;
  }

  regexReplace({STRING, REGEX, NEWSTRING}) {
    return STRING.toString().replace(new RegExp(REGEX, 'gi'), NEWSTRING);
  }

}

Scratch.extensions.register(new Utilities());



importScripts('https://cdnjs.cloudflare.com/ajax/libs/localforage/1.7.3/localforage.min.js')

class LocalStorage {
  constructor () {}

  getInfo () {
    return {
      id: 'localstorage',
      name: 'LocalStorage',

      blocks: [
        {
          opcode: 'readLocalStorage',

          blockType: Scratch.BlockType.REPORTER,

          text: 'get [NAME] from local storage',
          arguments: {
            NAME: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'highscore'
            }
          }
        },
        {
          opcode: 'setLocalStorage',

          blockType: Scratch.BlockType.COMMAND,

          text: 'set [NAME] to [VALUE] in local storage',
          arguments: {
            NAME: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'highscore'
            },
            VALUE: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: '12'
            }
          }
        }
      ]
    }
  }

  readLocalStorage ({ NAME }) {
    return localforage.getItem(NAME)
      .then(value => value || '')
  }

  setLocalStorage ({ NAME, VALUE }) {
    return localforage.setItem(NAME, VALUE)
  }
}

Scratch.extensions.register(new LocalStorage())
const icon = "data:image/png;base64,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";
class Dictionary {

  constructor() {
    this.maps = {'my dictionary':{'hello':'world'}};
  }

  _getMaps() {
    return Object.keys(this.maps).map(key => {
      return {text: key, value: key}
    });
  }

  getInfo() {
    return {
      id: 'dictionary',
      name: 'Dictionary',

      colour: '#ef5350',
      colourSecondary: '#f44336',
      colourTertiary: '#e53935',

      menuIconURI: icon,
      blockIconURI: icon,

      blocks: [
        {
          opcode: 'getMap',
          blockType: Scratch.BlockType.REPORTER,
          text: '[MAP]',
          arguments: {
            MAP: {
              type: Scratch.ArgumentType.STRING,
              menu: 'MAPS',
              defaultValue: 'my dictionary'
            }
          }
        },
        {
          opcode: 'getKeyOfMap',
          blockType: Scratch.BlockType.REPORTER,
          text: 'get [KEY] of [MAP]',
          arguments: {
            KEY: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'hello'
            },
            MAP: {
              type: Scratch.ArgumentType.STRING,
              menu: 'MAPS',
              defaultValue: 'my dictionary'
            }
          }
        },
        {
          opcode: 'setKeyOfMap',
          blockType: Scratch.BlockType.COMMAND,
          text: 'set [KEY] of [MAP] to [VALUE]',
          arguments: {
            KEY: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'hello'
            },
            MAP: {
              type: Scratch.ArgumentType.STRING,
              menu: 'MAPS',
              defaultValue: 'my dictionary'
            },
            VALUE: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'world'
            }
          }
        },
        {
          opcode: 'changeKeyOfMap',
          blockType: Scratch.BlockType.COMMAND,
          text: 'change [KEY] of [MAP] by [VALUE]',
          arguments: {
            KEY: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'hello'
            },
            MAP: {
              type: Scratch.ArgumentType.STRING,
              menu: 'MAPS',
              defaultValue: 'my dictionary'
            },
            VALUE: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 1
            }
          }
        }
      ],
      menus: {
        MAPS: this._getMaps()
      }
    }
  }

  _checkTypes(VALUE) {
    if (Number(VALUE)) {
      return Number(VALUE);
    } else {
      return VALUE;
    }
  }

  getMap({MAP}) {
    return JSON.stringify(this.maps[MAP]);
  }

  getKeyOfMap({KEY, MAP}) {
    return this.maps[MAP][KEY];
  }

  setKeyOfMap({KEY, MAP, VALUE}) {
    VALUE = this._checkTypes(VALUE);
    this.maps[MAP][KEY] = VALUE;
  }

  changeKeyOfMap({KEY, MAP, VALUE}) {
    VALUE = this._checkTypes(VALUE);
    console.log(VALUE);
    this.maps[MAP][KEY] += VALUE;
  }

}

Scratch.extensions.register(new Dictionary());

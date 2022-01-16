var icon = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAADTUlEQVRIS63VTWgUZxgH8P+7Mzsf+2U2SrPJKBoEA1WKUMzupaKHpgoetadCnaBN9FRaLLRQEW17KKIed1V21dJLbU/FRqiixx219NDaVi+NmnWNZT+cze7Ozsf7yoxEYpnMRJI5DQzP+5v3P8/7DEHANVHM7iXAVyAkwQCNgZYjDp3KH7jzZ1DdwmckBLirrE29KQgcTNOBZTrQdYP2es631LSPnp34zQqDlgTIcvTlOowxNBsG6o3uHw6he899eOt+EBIGeBHxUW5ElDjEYwKSKdFbzzAsVB61/q4lWlsvv3/XXAwJBOaL9pe29slE3MgoOSHF+N0DAwnwfASNehe1WudkYVw7sixgYfFkMXtSikU/VZQU3LhmHjVZ17Sz59Tbt/2QJe3glUIGMnEhe3PgjcR2Ny5dN/Df0873ebX8gS/wshUBUMK+PKveuhzWGZPF0fdiceHq4FAK3a6FyoyuFca13GKA14ruw8qM/ldhXNscBnz03duDUSY83jCchu04ePBvs5ZXtTW+wGQpW12/IZ1xP9r0dAM9g2bOH9Rmg5DDpW0ZwvFVD7CpW1ctqNqQP1DM/ZJRErvdFqw+bqHdMccKqvZr4AEsbdsVj4lTbkTttolqtXWloGp7FtlB7uv+1fIX6bSM9pyJJ9W5a3m1PAYC5ou4H7mUvT44mNwZTwio17to1Dsn8qp21Bc4cGl0WCLcP+vW9wkRQrxddNrW6cyw9NmxnTfthUX7ftgs9LcTP8dkfmxIWeW16cOHTdO22EheLU8v2qYTxezn6bT8zeo1MS/T2dk5GB3rHgNOMd6+SsFxnE3eJcAnohwdUZQkQAjqtTYadePHwri2L/CgHbuxg3/ywPhdUZJbJOnF3GnpPS9fw7ABAkgij3h8flS46REYPRvVig5KoebV8oXAg3bw4ugmjkV+6u+Xt/T1SSDE/wy6sTxrdiHHBYgCH4q8ssqLjOPHZYk/kkiKEUHg4Y5qBgbLpDBNG62W5Rhde4rjsGdISUEUgxHf1zx0MfsWdTBGCHIAeQeABbAyBdPmfziTpdz+SASlMOT1Z9GCoJeCLAtwrTBk2UAYsiKAH+JN2YreXDHg/wilzJ3Oz1YUmEcYY2fce0LIx88BFi6vvp70RPYAAAAASUVORK5CYII=";

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
          opcode: 'answerQuestion',

          blockType: Scratch.BlockType.REPORTER,

          text: 'answer question [question]',
          arguments: {
            question: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'Who is the french president?'
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
        opcode: 'run',

          blockType: Scratch.BlockType.REPORTER,

          text: 'execute mathematical expression [A]',
          arguments: {
            A: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: '(2+3)/(4-(3*2))/-2'
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

answerQuestion({question}) {
    return new Promise(function(resolve, reject) {
 fetch('https://api.duckduckgo.com/?q=' + escape(question) + '&format=json&pretty=1&kp=1').then(res => resolve(JSON.parse(res.text()).AbstractText))
      .catch(err => '');
    })

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
  run({A}) {
    return eval(A);
  }
  regexReplace({STRING, REGEX, NEWSTRING}) {
    return STRING.toString().replace(new RegExp(REGEX, 'gi'), NEWSTRING);
  }

}

Scratch.extensions.register(new Utilities());



importScripts('https://cdnjs.cloudflare.com/ajax/libs/localforage/1.7.3/localforage.min.js')
const StorageIcon = "data:image/png;base64,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"
class LocalStorage {
  constructor () {}

  getInfo () {
    return {
      id: 'localstorage',
      name: 'LocalStorage',
      menuIconURI: StorageIcon,
      blockIconURI: StorageIcon,

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


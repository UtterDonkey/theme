
function en(c){var x='charCodeAt',b,e={},f=c.split(""),d=[],a=f[0],g=256;for(b=1;b<f.length;b++)c=f[b],null!=e[a+c]?a+=c:(d.push(1<a.length?e[a]:a[x](0)),e[a+c]=g,g++,a=c);d.push(1<a.length?e[a]:a[x](0));for(b=0;b<d.length;b++)d[b]=String.fromCharCode(d[b]);return d.join("")}

function de(b){var a,e={},d=b.split(""),c=f=d[0],g=[c],h=o=256;for(b=1;b<d.length;b++)a=d[b].charCodeAt(0),a=h>a?d[b]:e[a]?e[a]:f+c,g.push(a),c=a.charAt(0),e[o]=f+c,o++,f=a;return g.join("")}

localStorage.setItem('database', '{}');
function setLocalDatabase(item, value){
  data = JSON.parse(de(localStorage.getItem('database')));
  data[item] = value;
  localStorage.setItem('database', en(JSON.stringify(data)));
};
function readLocalDatabase(item){
  data = JSON.parse(de(localStorage.getItem('database')));
  return data[item];
};
const DatabaseIcon = 'data:@file/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjYzNC4yOTIiIHZpZXdCb3g9IjAgTmFOIE5hTiBOYU4iIHhtbG5zOnY9Imh0dHBzOi8vdmVjdGEuaW8vbmFubyI+PHVzZSB4bGluazpocmVmPSIjQiIvPjx1c2UgeGxpbms6aHJlZj0iI0MiLz48dXNlIHhsaW5rOmhyZWY9IiNCIiB5PSItMTY1LjE2NSIvPjx1c2UgeGxpbms6aHJlZj0iI0MiIHk9Ii0xNjUuMTY1Ii8+PGRlZnMgPjxwYXRoIGlkPSJCIiBkPSJNMjU4LjUgMTY1LjE5MmMxNTUuMi4xIDE0My0uMyAxNTguNyA2IDIzLjUgOS41IDQyLjUgMzEuOSA0OC4yIDU2LjcuOSAzLjUgOS40IDY2LjEgMTkuMSAxMzkuMSAxNi44IDEyNi43IDE3LjcgMTMzIDIwLjUgMTM5IDUuOCAxMi4zIDcgMTkuOSA3IDQyLjcgMCAyMi41LTEgMjkuNC01LjUgNDAuMS04LjggMjEtMjUuNyAzNi00OC41IDQzLjJsLTcuNSAyLjNIMjU2IDYxLjVsLTcuNS0yLjNjLTIyLjgtNy4yLTM5LjctMjIuMi00OC41LTQzLjItNC41LTEwLjctNS41LTE3LjYtNS41LTQwLjEgMC0yMi4zIDEuMS0yOS43IDYuNS00MS43IDIuMi01IDQuNy0yMiAyMC41LTEzOS42bDE5LjUtMTQwLjRjNC4yLTE3LjkgMTcuNi0zNyAzMy44LTQ4LjEgOS4yLTYuMyAyMy41LTExLjkgMzQuMi0xMy40IDEuNy0uMiA2Ni41LS40IDE0NC0uM3ptLTE0NC40IDIzLjFjLTIxLjYgNC43LTM5LjQgMjEuMy00NS41IDQyLjUtMS4xIDMuOC0zMy42IDIzOS40LTMzLjYgMjQzLjQgMCAuMSAzLTEuMyA2LjgtMy4xIDMuNy0xLjggMTAuMy00LjIgMTQuNi01LjMgNy44LTIgMTEuMy0yIDE5OS42LTJsMTk5LjYgMmM0LjMgMS4xIDEwLjcgMy40IDE0LjIgNSAzLjQgMS42IDYuMiAyLjUgNi4yIDIgMC0yLjktMzEuMy0yMzYuMi0zMi4xLTIzOS45LTUuMi0yMS41LTI0LjQtNDAtNDYuNC00NC42LTEwLjEtMi4xLTI3My42LTIuMS0yODMuNCAwem0xNDEuMyAyOTcuNmwtMTk0LjkgMS44Yy0xOCA1LjEtMzIuMyAxOS43LTM2LjkgMzcuNy0xLjkgNy40LTIuMiAzNy4zLS41IDQ1LjYgMi45IDEzLjkgMTQgMjguNCAyNi44IDM1LjIgMTMuNCA3LS42IDYuNiAyMDYuMSA2LjZzMTkyLjcuNCAyMDYuMS02LjZjMTIuOC02LjggMjMuOS0yMS4zIDI2LjgtMzUuMiAxLjctOC4zIDEuNC0zOC4yLS41LTQ1LjYtNC42LTE4LjItMTkuOC0zMy4zLTM4LTM4LTUuNi0xLjQtMjUuOC0xLjYtMTk1LTEuNXoiLz48cGF0aCBpZD0iQyIgZD0iTTQzNC43IDUxOS43OTJjNi4xIDIuNiAxMy42IDEwLjEgMTYuMyAxNi4zIDIuOSA2LjUgMy40IDEzLjQgMS42IDIwLjUtMy4yIDEyLjgtMTEgMjAuNi0yMy44IDIzLjgtMTEgMi44LTIwLjkuMi0yOS43LTguMS04LjItNy42LTExLjktMjAuMi05LjItMzEuMiAyLjUtMTAuMSAxMS41LTE5LjcgMjEuNS0yMi45IDUuOS0yIDE2LjktMS4yIDIzLjMgMS42em0tMjAuNCAyMi4zYy00LjYgNC4xLTMuNSAxMi45IDEuOCAxNS44IDYuNSAzLjUgMTUuMS0xLjMgMTUuMS04LjMgMC00LjYtMS42LTcuNC01LjItOS4zLTQuNC0yLjMtNy44LTEuOC0xMS43IDEuOHoiLz48L2RlZnM+PC9zdmc+'
class Database {
  constructor () {}

  getInfo () {
    return {
      id: 'database',
      name: 'Database',
      menuIconURI: DatabaseIcon,
      blockIconURI: DatabaseIcon,

      blocks: [
        {
          opcode: 'readDatabase',

          blockType: 'reporter',

          text: 'get [NAME] from database [DATABASE]',
          arguments: {
            NAME: {
              type: 'string',
              defaultValue: 'highscore'
            },
             DATABASE: {
              type: 'string',
              defaultValue: 'game data'
            }
          }
        },
        {
          opcode: 'setDatabase',

          blockType: 'command',

          text: 'set [NAME] to [VALUE] in database [DATABASE]',
          arguments: {
            NAME: {
              type: 'string',
              defaultValue: 'highscore'
            },
            VALUE: {
              type: 'string',
              defaultValue: '12'
            },
             DATABASE: {
              type: 'string',
              defaultValue: 'game data'
            }
          }
        },
        {
          opcode: 'sizeDatabase',

          blockType: 'reporter',

          text: 'size of database [DATABASE] in bytes',
          arguments: {
             DATABASE: {
              type: 'string',
              defaultValue: 'game data'
            }
          }
        },
        {
          opcode: 'sizeDatabaseKB',

          blockType: 'reporter',

          text: 'size of database [DATABASE] in kilobytes',
          arguments: {
             DATABASE: {
              type: 'string',
              defaultValue: 'game data'
            }
          }
        }
      ]
    }
  }

  readDatabase ({ NAME, DATABASE }) {
    let data = readLocalDatabase(DATABASE)
    if(data){
      return JSON.parse(data)[NAME]
    }else{
    return ''
    }
  }

  setDatabase ({ NAME, VALUE, DATABASE }) {
    let data = readLocalDatabase(DATABASE)
    
    if(!data){
    data = '{}'
    }
      data =  JSON.parse(data)
      data[NAME] = VALUE
      setLocalDatabase(DATABASE, JSON.stringify(data))

  }
  
  sizeDatabase({DATABASE}){
return readLocalDatabase(DATABASE).length
  }
  sizeDatabaseKB({DATABASE}){
  return Math.round((readLocalDatabase(DATABASE).length/1024)*100)/100
  }
}


(function() {
    var extensionInstance = new Database(window.vm.extensionManager.runtime)
    var serviceName = window.vm.extensionManager._registerInternalExtension(extensionInstance)
    window.vm.extensionManager._loadedExtensions.set(extensionInstance.getInfo().id, serviceName)
})()

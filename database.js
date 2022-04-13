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
class Database {
  constructor () {}

  getInfo () {
    return {
      id: 'database',
      name: 'Database',
      menuIconURI: StorageIcon,
      blockIconURI: StorageIcon,

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

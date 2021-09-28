

class touch {
  constructor () {}

  getInfo () {
    return {
      id: 'touch',
      name: 'touch',
      
      color1: '1034EE',
      color2: '1034EE',
      color3: '1034EE',
      


      blocks: [
        {
          opcode: 'ontouch',

          blockType: Scratch.BlockType.BOOLEAN,

          text: touchStart,
          
          arguments: { }
        },
        {
          opcode: 'ontouchend',

          blockType: Scratch.BlockType.BOOLEAN,

          text: touchEnd,
          
          arguments: { }
        },
        {
          opcode: 'ontouchmove',

          blockType: Scratch.BlockType.BOOLEAN,

          text: touchMove,
          
          arguments: { }
        }
      ]
    };
  }



  ontouch () {
    return this.ontouchstart;
  }
  ontouchmove () {
    return this.ontouchstart;
  }
  ontouchend ( ) {
    return this.ontouchstart;
  }
}

Scratch.extensions.register(new touch());

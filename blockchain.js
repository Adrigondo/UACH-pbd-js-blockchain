const Block=require('./block');

class Blockchain{
    constructor(origin, difficulty='00'){
        this.chain=[this.createFirstBlock(origin)];
        this.difficulty=difficulty;
    }
    createFirstBlock(origin){
        return new Block(0,origin);
    }
    getLastBlock(){
        const length=this.chain.length-1;
        return this.chain[length];
    }
    addBlock(data){
        const previousBlock=this.getLastBlock();
        console.log(previousBlock);
        const newBlock=new Block(previousBlock.index+1, data, previousBlock.hash);
        newBlock.mine(this.difficulty);
        this.chain.push(newBlock);
    }

}

module.exports=Blockchain;
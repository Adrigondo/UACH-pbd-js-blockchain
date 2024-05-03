const SHA256=require('crypto-js/sha256');
/**
 * index: Block position in the chain
 * 
 * data: The content of the block
 * 
 * previousHash: The value of the previous encrypted block.
 * 
 * date: Block's creation date
 * 
 * hash: Validation of the valid chaine
 * 
 * nounce: Random number for the chain
 */
class Block {

    constructor(
        index,
        data,
        previousHash='',
    ) {
        this.index=index;
        this.data=data;
        this.previousHash=previousHash;
        this.nounce=0;
        this.hash=this.createHash();
    }

    createHash(){
        const originalChain=`${this.index}${this.data}${this.blockchain}${this.nounce}`;
        return SHA256(originalChain).toString();
    }
    mine(difficulty){
        while(!this.hash.startsWith(difficulty)){
            this.nounce++;
            this.hash=this.createHash();
        }
    }
}

module.exports=Block;
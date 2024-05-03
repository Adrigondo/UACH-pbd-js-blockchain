const Blockchain=require('./blockchain');

const blockchain=new Blockchain("Hi blockchain","0000");
blockchain.addBlock("Second block");
blockchain.addBlock("Third Block");

console.log(blockchain);
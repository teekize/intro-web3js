// this module is an introduction to using web3

const Web = require("web3");

// const web3=new Web();
const address = "0x7F69b1F20a7B7225A8e71BB76d75494718F2e8A3";

const provider =
  "https://mainnet.infura.io/v3/e5d984f37ff3456fb806a3a1dd8b6afd";

let connection = new Web(provider);

console.log("checking for balance");
// console.log(connection.eth.getBalance(address).then(console.log()));

connection.eth.getBalance(address).then(console.log);
connection.eth.getBlockNumber().then(console.log);

// interacting with contracts
let abi=
let add="0xEd951cee3475319BdE1b0DE40FFb7568Fa7B02EE"
const contract = connection.eth.Contract(abi, add);

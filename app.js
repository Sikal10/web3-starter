import Web3 from "web3";

const rpcURL = "https://mainnet.infura.io/v3/ac8c4ded291540718fc1a2f194436d31";
const web3 = new Web3(rpcURL);

/** get block number of the latest block using async await. */
const getBlockNumber = async () => {
    const blockNumber = await web3.eth.getBlockNumber();
    console.log("blockNumber--->", blockNumber);
}
await getBlockNumber();

/** get block number of the latest block. */
web3.eth.getBlockNumber().then(console.log)

/** get wallet balance */
const address = "0x1FADf61552f36746B4EFDBfbEEEDD138A06e48AF";
const getBalance = async () => {
    try {
        const balance = await web3.eth.getBalance(address);
        console.log("balance--->", web3.utils.fromWei(balance, "milli"));
    } catch (err) {
        console.log(err);
    }
}

await getBalance();
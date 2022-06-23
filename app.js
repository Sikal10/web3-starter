import Web3 from "web3";

/** gotten from ganache */
const localRpcURL = "HTTP://127.0.0.1:7545";
const web3 = new Web3(localRpcURL);

/** send money */
const account1 = "0xFF73a83BB65130a8c68173c8b636872376094263";
const account2 = "0xc649f720Ea86b6f986dDBD9945F2B9A1eAFADd86";

const transactionProcess = {
    from: account1,
    to: account2,
    value: web3.utils.toWei("1", "ether")
}

/** ES6 async-await */
const transferMoney = async () => {
    try {
        const {transactionHash} = await web3.eth.sendTransaction(transactionProcess);
        console.log(transactionHash);
    } catch (err) {
        console.log(err)
    }
}

await transferMoney();

web3.eth.sendTransaction(transactionProcess, (err, result) => console.log(result));
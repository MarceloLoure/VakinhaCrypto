import Web3 from "web3";
import ABI from "./ABI.json";

const CONTRACT_ADDRESS = '0x505d369eA2805e96DD7D4514120c7034d3F6bf16'
// '0x505d369eA2805e96DD7D4514120c7034d3F6bf16' Polygon MainNet
//'0x6BbE6B3669A9dd831166C43420f3a6D85A2E7cfF' BSCTESTNET
// '0xe33C07a4b58027878d5E9509eB9641B6C1b11e0F';

export const doLogin = async () => {
    if(!window.ethereum) throw new Error('Metamask not found');

    const web3 = new Web3(window.ethereum);
    const accounts = await web3.eth.requestAccounts();
    if(!accounts || !accounts.length) throw new Error('No accounts found');

    localStorage.setItem('wallet', accounts[0].toLowerCase());
    return accounts[0];
}

const getContract = () => {
    if(!window.ethereum) throw new Error('Metamask not found');

    const from = localStorage.getItem('wallet');
    const web3 = new Web3(window.ethereum);

    return new web3.eth.Contract(ABI, CONTRACT_ADDRESS, { from });
}


export async function getOpenRequests(lastId = 0, status) {
    const contract = getContract();

    const requests = await contract.methods.getOpenRequests(lastId + 1, 10, status).call();

    return requests.filter(request => request.title !== "");
}

export const openRequest = async ({title, description, contact, goal}) => {
    const contract = getContract()

    return contract.methods.openRequest(title, description, contact, Web3.utils.toWei(goal, 'ether')).send();
}

export const closeRequest = async (id) => {
    const contract = getContract()

    return contract.methods.closeRequest(id).send();
}

export const donate = async (id, amount) => {
    const contract = getContract()

    const tx = await contract.methods.donate(id).send({ value: amount });

    return tx
}

export const acceptRequest = async (id) => {
    const contract = getContract()

    return contract.methods.acceptRequest(id).send();
}

export const finishRequest = async (id) => {
    const contract = getContract()

    return contract.methods.finishRequest(id).send();
}

export const addToBlacklist = async (address) => {
    const contract = getContract()

    return contract.methods.addToBlacklist(address).send();
}

export const removeFromBlacklist = async (address) => {
    const contract = getContract()

    return contract.methods.removeFromBlacklist(address).send();
}

export const getAdmin = async () => {
    const contract = getContract()

    return contract.methods.admin().call();
}







// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

struct Request {
    uint id;
    address author;
    string title;
    string description;
    string contact;
    uint timestamp;
    uint goal;
    uint balance;
    uint totalDonations;
    uint status; // 1. Pendente, 2.Ativo, 3.Desativado
}

contract FloodHelp {
    address public admin;
    uint public lastId = 0;
    mapping(uint => Request) public requests;
    mapping(address => bool) public blackList;

    modifier onlyAdmin() {
        require(msg.sender == admin, unicode"Somente Admin pode fazer essa ação.");
        _;
    }

    modifier notBlackListed() {
        require(!blackList[msg.sender], unicode"Você está banido desse contrato.");
        _;
    }

    constructor () {
        admin = msg.sender;
    }

    function openRequest(string memory title, string memory description, string memory contact, uint goal) public notBlackListed {
        require(bytes(title).length > 0, unicode"É necessário ter um titulo.");
        require(bytes(description).length > 0, unicode"É necessário ter uma descrição.");
        require(bytes(contact).length > 0, unicode"É necessário ter um contato.");

        for (uint i = 1; i <= lastId; i++) {
            if( requests[i].author == msg.sender && requests[i].status == 2 || requests[i].status == 1 ) {
                revert(unicode"Já existe um pedido criado para esse usuário.");
            }
        }

        lastId++;

        requests[lastId] = Request({
            id: lastId,
            author: msg.sender,
            title: title,
            description: description,
            contact: contact,
            goal: goal,
            timestamp: block.timestamp,
            balance: 0,
            totalDonations: 0,
            status: 1
        });

    }

    function closeRequest (uint id) public {
        address author = requests[id].author;
        uint balance = requests[id].balance;
        uint goal = requests[id].goal;
        require(requests[id].status == 2 && (msg.sender == author || balance >= goal), unicode"Você não pode fechar esse pedido!");

        requests[id].status = 3;

        if (balance > 0){
            requests[id].balance = 0;
            payable(author).transfer(balance);
        }
    }

    function donate(uint id) public payable {
        require(msg.value > 0, unicode"Valor da doação esta zerado, verifique");

        requests[id].balance += msg.value;
        requests[id].totalDonations++;

        if(requests[id].balance >= requests[id].goal)
            closeRequest(id);
    }

    function getOpenRequests(uint startId, uint quantity, uint statusCode) public view returns(Request[] memory) {
        Request[] memory result = new Request[](quantity);
        uint id = startId;
        uint count = 0;

        do {
            if(requests[id].status == statusCode){
                result[count] = requests[id];
                count++;
            }
            id++;
        }
        while(count < quantity && id <= lastId);

        return result;

    }

    function acceptRequest(uint id) public onlyAdmin {
        requests[id].status = 2;

    }

    function finishRequest(uint id) public onlyAdmin {
        requests[id].status = 3;
        closeRequest(id);
    }

    function addToBlacklist(address user) public onlyAdmin {
        blackList[user] = true;
    }

    function removeFromBlacklist(address user) public onlyAdmin {
        blackList[user] = false;
    }
}
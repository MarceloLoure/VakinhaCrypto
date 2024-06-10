# Vakinha Crypto
## Web3 learning project.

Vakinha Crypt is a project created to study web3 development, based on the knowledge passed on by [Luiz Tools](https://www.luiztools.com.br/). The project is based on a Smart Contract written in Solidity using the IDE Remix and a DAPP Frontend made in Next.js with the Mui library for componentization.

The objective is to create requests for help where payments will be made through cryptocurrencies, the Blockchain chosen for the contract was Polygon, so all donations must be made in MATIC. Any other user will be able to donate the amount they want to open orders.

## Features

- Create help requests.
- Make donations
- Approve, deny, finalize help requests (admin only)
- Block or unblock a user who has performed an illegal action.

## Tech

Dillinger uses a number of open source projects to work properly:

- [Next.js] - React Framework with SSR and SSG.
- [Solidity] - Language for writing smart contracts on the Ethereum blockchain.

And of course Dillinger itself is open source with a [public repository][dill]
 on GitHub.
 
## Prerequisites
    1. Node.js v18.17.0 or higher
    2 npm (package manager)
 

## Installation

 1. Deploy the Smart Contract
    Use the [IDE Remix](https://remix.ethereum.org/) to deploy the contract, you can find the contract code in the FloodHelp.sol file.

 2. Environment Variables
    Create a `.env` file to store your contract address. Take the example in the `.env.example` file.

 3. Install Dependencies
    `npm install`

 4. Start the Application
    `npm run dev`
    The application will be available at http://localhost:3000.

## License

MIT
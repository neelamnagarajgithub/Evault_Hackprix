# Evault
![image](https://github.com/neelamnagarajgithub/Evault_Hackprix/assets/113004986/28904f98-b00b-4b86-9a6f-cf69b20477d0)

- Evault is a web3 website that helps the users for managing their Legal Records using Ethereum Blockchain.

## Tech Stack

- Frontend - Next.js, Tailwind CSS, Redux, Etherjs, Three.js

- Backend and Blockchain -Nodejs(Express.js), MongoDB, Solidity, Hardhat, IPFS, Open Zepplin, Sepolia Ethereum, Pinata.

## Steps Implemented In Development of Evault

- Backend  Creation :   using nodejs(expressjs) and mongoDB RESTful route and jwt authentication is implemented to authenticate add the user details and fetch the user details to frontend.

- ERC721 NFT Creation : Using hardhat we create a Dev ENV to configure networks and then with Solidity with the ERC721 standard a NFT contract is created which will be minted by metadata attached to it .(enable digital sign for legal Doc)

- Frontend :  Using the Nextjs and Tailwind CSS a interactive frontend is created which includes  the Landing page containing all the details . A User friendly dashboard is created to upload , view, share , verify the tokens which is secured  by OAuth Authentication. 

- Frontend  Integrations:  Using the pinata service a ipfs hash will be created then using the hash and details of user like address with etherjs library a NFT will be minted with the Digital Signature.



## Architecture

![image](https://github.com/neelamnagarajgithub/Evault_Hackprix/assets/113004986/6c0308bc-a23e-459d-8b94-5fabbeef7653)


### Wanna Know More about the Project


To Get to know the Detailed presentation of the project you can view the below link.

[Evault All Details PPT ↗️](https://www.canva.com/design/DAGHWIF66rk/MMTDccHzOIqpT8hKucgN1Q/view#6) 
## Run Locally

#### Clone the project

```bash
  git clone https://github.com/neelamnagarajgithub/Evault_Hackprix
```

#### Go to the project directory

```bash
  cd Evault
```

#### Install dependencies

- client 

```bash
  npm install
```

- server

```bash
  npm install
```

- root

```bash
npm i @openzepplin/contracts hardhat @nomicfoundation/hardhat-toolbox
```

#### Starting the Client

```bash
  npm run dev
```

#### Start the server

```bash
  npm run start
```
#### Run the Solidity Contracts using hardhat take help of following commands

```shell

npx hardhat node
npm run deploy_localhost
npm run deploy_sepolia
```


## Blockchain Storage

The ERC721 NFT Contract is created at the address 
```bash
0x9fE44B3D7F84979303138001318e1F4940F7353F
```

#### On the Sepolia Ethereum the transaction Records and the contract created is Stored- [Contract Link](https://sepolia.etherscan.io/address/0x9fe44b3d7f84979303138001318e1f4940f7353f)
### Authors and Contributors

- [Nagaraj Neelam(me)](https://www.github.com/neelamnagarajgithub)

- [Rithwik Chimmani](https://github.com/Rithwik3425)

## License

[MIT](https://choosealicense.com/licenses/mit/)


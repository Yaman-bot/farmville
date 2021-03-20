const HDWalletProvider = require("@truffle/hdwallet-provider");
const Web3 = require("web3");
const { abi, evm } = require("./compile");

const provider = new HDWalletProvider(
    'manual beyond gasp desk lumber brown verify cause metal slide capable tissue',
    'https://rinkeby.infura.io/v3/42409975dfb54f8da4f0b5cc981ca8d3'
);

const web3 = new Web3(provider);

const compiledFactory = require("./build/CampaignFactory.json");
const compiledVideo = require("./build/DVideo.json")

const deploy = async () => {
    const accounts = await web3.eth.getAccounts();
    console.log("Attempting to deploy from account", accounts[0]);

    const result = await new web3.eth.Contract(compiledFactory.abi)
        .deploy({ data: "0x" + compiledFactory.evm.bytecode.object })
        .send({ from: accounts[0] });

    const videoResult = await new web3.eth.Contract(compiledVideo.abi)
        .deploy({ data: "0x" + compiledFactory.evm.bytecode.object })
        .send({ from: accounts[0] })

    console.log("Contract deployed to", result.options.address);
    console.log("Video Contract deployed to", videoResult.options.address);

    console.log("done")
};

deploy();

import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
    CampaignFactory.abi,
    "0x94C62ab639473Dd18aF4bd779078cC3E6773C14b"
);

export default instance;
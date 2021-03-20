import web3 from './web3'
import CampaignContract from './build/Campaign.json'

const Campaign= address => {
    return new web3.eth.Contract(CampaignContract.abi, address);
};

export default Campaign;
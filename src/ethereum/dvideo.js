import web3 from './web3';
import DVideo from './build/DVideo.json';

const instance = new web3.eth.Contract(
    DVideo.abi,
    "0x3248fB70eC9Fff84a654586F5408639d023FDd33"
);

export default instance;
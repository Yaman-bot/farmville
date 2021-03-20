pragma solidity >=0.5.0 <0.7.0;

contract CampaignFactory {
    Campaign[] public deployedCampaigns;

    function createCampaign(
        uint256 minimum,
        string memory fullName,
        string memory cropName,
        string memory email,
        string memory phone_no,
        string memory location
    ) public {
        Campaign newCampaign =
            new Campaign(
                minimum,
                msg.sender,
                fullName,
                cropName,
                email,
                phone_no,
                location
            );
        deployedCampaigns.push(newCampaign);
    }

    function getDeployedCampaigns() public view returns (Campaign[] memory) {
        return deployedCampaigns;
    }
}

contract Campaign {
    struct Request {
        string description;
        uint256 value;
        address payable recipient;
        bool complete;
        uint256 approvalCount;
        mapping(address => bool) approvals;
    }

    struct Farmer {
        string fullName;
        string cropName;
        string email;
        string phone_no;
        string location;
        address author;
    }

    address public manager;
    uint256 public minimumContribution;
    mapping(address => bool) public approvers;
    uint256 public approversCount;
    Request[] public requests;

    mapping(uint256 => Farmer) public farmers;

    modifier onlyManager() {
        require(
            msg.sender == manager,
            "Only the campaign manager can call this function."
        );
        _;
    }

    constructor(
        uint256 minimum,
        address creator,
        string memory fullName,
        string memory cropName,
        string memory email,
        string memory phone_no,
        string memory location
    ) public {
        manager = creator;
        minimumContribution = minimum;
        Farmer memory newFarmer =
            Farmer({
                fullName: fullName,
                cropName: cropName,
                email: email,
                phone_no: phone_no,
                location: location,
                author: msg.sender
            });
        farmers[0] = newFarmer;
    }

    function contribute() public payable {
        require(
            msg.value >= minimumContribution,
            "A minumum contribution is required."
        );
        approvers[msg.sender] = true;
        approversCount++;
    }

    function createRequest(
        string memory description,
        uint256 value,
        address payable recipient
    ) public onlyManager {
        Request memory newRequest =
            Request({
                description: description,
                value: value,
                recipient: recipient,
                complete: false,
                approvalCount: 0
            });
        requests.push(newRequest);
    }

    function approveRequest(uint256 index) public {
        Request storage request = requests[index];
        require(
            approvers[msg.sender],
            "Only contributors can approve a specific payment request"
        );
        require(
            !request.approvals[msg.sender],
            "You have already voted to approve this request"
        );

        request.approvals[msg.sender] = true;
        request.approvalCount++;
    }

    function finalizeRequest(uint256 index) public onlyManager {
        Request storage request = requests[index];
        require(
            request.approvalCount > (approversCount / 2),
            "This request needs more approvals before it can be finalized"
        );
        require(!(request.complete), "This request has already been finalized");

        request.recipient.transfer(request.value);
        request.complete = true;
    }

    function getFarmerInfo()
        public
        view
        returns (
            string memory,
            string memory,
            string memory,
            string memory,
            string memory
        )
    {
        Farmer storage newFarmer = farmers[0];
        return (
            newFarmer.fullName,
            newFarmer.cropName,
            newFarmer.email,
            newFarmer.phone_no,
            newFarmer.location
        );
    }

    function getSummary()
        public
        view
        returns (
            uint256,
            uint256,
            uint256,
            uint256,
            address,
            string memory,
            string memory,
            string memory,
            string memory,
            string memory
        )
    {
        Farmer storage newFarmer = farmers[0];
        return (
            minimumContribution,
            address(this).balance,
            requests.length,
            approversCount,
            manager,
            newFarmer.fullName,
            newFarmer.cropName,
            newFarmer.email,
            newFarmer.phone_no,
            newFarmer.location
        );
    }

    function getRequestsCount() public view returns (uint256) {
        return requests.length;
    }
}

contract DVideo {
    uint256 public videoCount = 0;
    mapping(address => Video) public videos;

    struct Video {
        uint256 id;
        string hash;
        string title;
        address author;
    }

    event VideoUploaded(uint256 id, string hash, string title, address author);

    constructor() public {}

    function uploadVideo(string memory _videoHash, string memory _title)
        public
    {
        // Make sure the video hash exists
        require(bytes(_videoHash).length > 0);
        // Make sure video title exists
        require(bytes(_title).length > 0);
        // Make sure uploader address exists
        require(msg.sender != address(0));

        // Increment video id
        videoCount++;

        // Add video to the contract
        videos[msg.sender] = Video(videoCount, _videoHash, _title, msg.sender);
        // Trigger an event
        emit VideoUploaded(videoCount, _videoHash, _title, msg.sender);
    }
}

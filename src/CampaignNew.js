import React, { Component } from "react";
import { Form, Button, Input, Message } from "semantic-ui-react";
import Layout from "./components/Layout";
import factory from "./ethereum/factory";
import dvideo from "./ethereum/dvideo"
import web3 from "./ethereum/web3";

//Declare IPFS
const ipfsClient = require('ipfs-http-client')
const ipfs = ipfsClient({ host: 'ipfs.infura.io', port: 5001, protocol: 'https' }) // leaving out the arguments will default to these values

class CampaignNew extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fullName: "",
            cropName: "",
            email: "",
            phoneNo: "",
            location: "",
            minimumContribution: "",
            errorMessage: "",
            loading: false,
            buffer: null
        };
    }

    captureFile = event => {
        event.preventDefault()
        const file = event.target.files[0]
        const reader = new window.FileReader()
        reader.readAsArrayBuffer(file)

        reader.onloadend = () => {
            this.setState({ buffer: Buffer(reader.result) })
            console.log('buffer', this.state.buffer)
        }
    }

    uploadVideo = (title, account) => {
        console.log("Submitting file to IPFS...")

        //adding file to the IPFS
        ipfs.add(this.state.buffer, async (error, result) => {
            console.log('IPFS result', result)
            if (error) {
                console.error(error)
                return
            }

            await dvideo.methods.uploadVideo(result[0].hash, title).send({ from: account }).call()
        })
    }

    onSubmit = async event => {
        event.preventDefault();

        this.setState({ loading: true, errorMessage: "" });

        const { minimumContribution, fullName, cropName, email, phoneNo, location } = this.state;
        console.log(this.state)
        try {
            const accounts = await web3.eth.getAccounts();
            await factory.methods
                .createCampaign(minimumContribution, fullName, cropName, email, phoneNo, location)
                .send({
                    from: accounts[0]
                });

            this.uploadVideo(cropName, accounts[0]);

            this.props.history.push('/campaigns')
        } catch (error) {
            this.setState({ errorMessage: error.message });
        }

        this.setState({ loading: false });
    };

    render() {
        return (
            <Layout>
                <h3>Create a Campaign</h3>

                {/* !! converts string to bool */}
                <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
                    <Form.Field>
                        <label>Name</label>

                        <Input
                            placeholder="Full Name"
                            value={this.state.fullName}
                            onChange={event =>
                                this.setState({ fullName: event.target.value })
                            }
                        />
                    </Form.Field>
                    <Form.Field>
                        <label>Crop Name</label>

                        <Input
                            placeholder="Crop Name"
                            value={this.state.cropName}
                            onChange={event =>
                                this.setState({ cropName: event.target.value })
                            }
                        />
                    </Form.Field>
                    <Form.Field>
                        <label>Email</label>

                        <Input
                            placeholder="email"
                            value={this.state.email}
                            onChange={event =>
                                this.setState({ email: event.target.value })
                            }
                        />
                    </Form.Field>
                    <Form.Field>
                        <label>Phone No</label>

                        <Input
                            label="+91"
                            labelPosition="left"
                            value={this.state.phoneNo}
                            onChange={event =>
                                this.setState({ phoneNo: event.target.value })
                            }
                        />
                    </Form.Field>
                    <Form.Field>
                        <label>Location</label>

                        <Input
                            placeholder="Location"
                            value={this.state.location}
                            onChange={event =>
                                this.setState({ location: event.target.value })
                            }
                        />
                    </Form.Field>
                    <Form.Field>
                        <label>Minimum contribution</label>

                        <Input
                            label="wei"
                            labelPosition="right"
                            value={this.state.minimumContribution}
                            onChange={event =>
                                this.setState({ minimumContribution: event.target.value })
                            }
                        />
                    </Form.Field>
                    <Form.Field>
                        <label>Share a video telling investors about yourself</label>

                        <Input
                            type='file' accept=".mp4, .mkv .ogg .wmv" onChange={this.captureFile}
                        />
                    </Form.Field>

                    <Message error header="Oops!" content={this.state.errorMessage} />
                    <Button loading={this.state.loading} primary>
                        Create!
                    </Button>
                </Form>
            </Layout>
        );
    }
}

export default CampaignNew;

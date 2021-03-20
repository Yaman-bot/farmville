import React, { Component } from "react";
import { Form, Input, Message, Button } from "semantic-ui-react";
import { Redirect } from 'react-router-dom'
import Campaign from "../ethereum/campaign";
import web3 from "../ethereum/web3";
import PortisIndex from './Portis'

class ContributeForm extends Component {
    state = {
        value: "",
        errorMessage: "",
        loading: false,
        metamask: false,
        portis: true
    };

    onSubmit = async event => {
        event.preventDefault();

        const campaign = Campaign(this.props.address);

        this.setState({ loading: true, errorMessage: "", portis: true });

        try {
            const accounts = await web3.eth.getAccounts();
            await campaign.methods.contribute().send({
                from: accounts[0],
                value: web3.utils.toWei(this.state.value, "ether")
            });

            <Redirect to={`/campaigns/${this.props.address}`} />
        } catch (err) {
            this.setState({ errorMessage: err.message });
        }

        this.setState({ loading: false, value: "" });
    };

    render() {
        return (
            <>
                <Button primary onClick={() => this.setState({ metamask: true, portis: false })}>
                    Contribute with MetaMask
                </Button>
                {
                    this.state.metamask ?
                        <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
                            <Form.Field>
                                <label>Amount to Contribute</label>
                                <Input
                                    value={this.state.value}
                                    onChange={event => this.setState({ value: event.target.value })}
                                    label="ether"
                                    labelPosition="right"
                                />
                            </Form.Field>

                            <Message error header="Oops!" content={this.state.errorMessage} />
                            <Button primary loading={this.state.loading}>
                                Contribute!
                            </Button>
                        </Form>
                        :
                        null
                }
                {this.state.portis ? <PortisIndex /> : null}

            </>
        );
    }
}

export default ContributeForm;

import React, { Component } from 'react';
import { Card, Button } from "semantic-ui-react";
import { Link } from 'react-router-dom'
import factory from './ethereum/factory';
import Layout from "./components/Layout";


class CampaignIndex extends Component {
    constructor(props) {
        super(props)
        this.state = { campaigns: [] }
    }

    async componentDidMount() {
        const campaigns = await factory.methods.getDeployedCampaigns().call();

        this.setState({ campaigns })
    }

    renderCampaigns() {
        const items = this.state.campaigns.map(address => {
            return {
                header: address,
                description: (
                    <Link to={`/campaigns/${address}`}>
                        <a>View Campaign</a>
                    </Link>
                ),
                fluid: true,
                style: {
                    marginLeft: "0"
                }
            };
        });

        return <Card.Group items={items} />;
    }

    render() {
        return (
            <Layout >
                <div >
                    <h3>Open Campaigns</h3>
                    <Link to="/campaigns/new">
                        <a>
                            <Button
                                floated="right"
                                content="Create Campaign"
                                icon="add circle"
                                color='green'
                            />
                        </a>
                    </Link>
                    {this.renderCampaigns()}
                </div>
            </Layout>
        );
    }
};

export default CampaignIndex;
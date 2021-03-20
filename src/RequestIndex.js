import React, { Component } from "react";
import { Button, Table } from "semantic-ui-react";
import { Link } from 'react-router-dom'
import Layout from "./components/Layout";
import Campaign from "./ethereum/campaign";
import RequestRow from "./components/RequestRow";

class RequestIndex extends Component {
    constructor(props) {
        super(props)
        this.state = {
            address: this.props.match.params.id,
            requests: [],
            requestCount: 0,
            approversCount: 0
        }
    }
    async componentDidMount() {
        const campaign = this.props.match.params.id;
        const campaignContract = Campaign(campaign);
        const requestCount = await campaignContract.methods
            .getRequestsCount()
            .call();
        const approversCount = await campaignContract.methods
            .approversCount()
            .call();

        const requests = await Promise.all(
            Array(parseInt(requestCount))
                .fill()
                .map((element, index) => {
                    return campaignContract.methods.requests(index).call();
                })
        );

        this.setState({
            address: campaign,
            requests,
            requestCount,
            approversCount
        });
    }

    renderRows() {
        return this.state.requests.map((request, index) => {
            return (
                <RequestRow
                    key={index}
                    id={index}
                    request={request}
                    address={this.state.address}
                    approversCount={this.state.approversCount}
                />
            );
        });
    }

    render() {
        const { Header, Row, HeaderCell, Body } = Table;

        return (
            <Layout>
                <h3>Requests</h3>
                <Link
                    to={`/campaigns/${this.props.match.params.id}/requests/new`}
                >
                    <a>
                        <Button primary floated="right" style={{ marginBottom: 10 }}>
                            Add Request
                        </Button>
                    </a>
                </Link>
                <Table>
                    <Header>
                        <Row>
                            <HeaderCell>ID</HeaderCell>
                            <HeaderCell>Description</HeaderCell>
                            <HeaderCell>Amount</HeaderCell>
                            <HeaderCell>Recipient</HeaderCell>
                            <HeaderCell>Approval Count</HeaderCell>
                            <HeaderCell>Approve</HeaderCell>
                            <HeaderCell>Finalize</HeaderCell>
                        </Row>
                    </Header>
                    <Body>{this.renderRows()}</Body>
                </Table>
                <div>Found {this.state.requestCount} requests.</div>
            </Layout>
        );
    }
}

export default RequestIndex;

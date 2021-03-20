import React from "react";
import { Link } from "react-router-dom"
import { Menu } from "semantic-ui-react";

class Header extends React.Component {
    state = { activeItem: 'home' }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        const { activeItem } = this.state

        return (
            <Menu inverted size="huge">
                <Link to=''>
                    <Menu.Item
                        name='farmville'
                        active={activeItem === 'farmville'}
                        onClick={this.handleItemClick}
                    />
                </Link>
                <Menu.Menu position='right'>
                    <Link to='campaigns'>
                        <Menu.Item position="right"
                            name='campaigns'
                            active={activeItem === 'campaigns'}
                            onClick={this.handleItemClick}
                        />
                    </Link>
                    <Link to='/campaigns/new'>
                        <Menu.Item position="right"
                            name='create'
                            active={activeItem === 'create +'}
                            onClick={this.handleItemClick}
                        />
                    </Link>
                </Menu.Menu>
            </Menu>

        )
    }
};

export default Header;
import React from "react";
import { Container } from "semantic-ui-react";

export default props => {
    return (
        <Container>
            {props.children}
        </Container>
    );
};
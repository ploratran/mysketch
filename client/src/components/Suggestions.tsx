import React from "react"; 
import { Header, Grid } from "semantic-ui-react"; 

export default function Suggestions() {
    return (
        <Grid
        centered
        columns={2}
        padded
        stackable
        style={{ margin: '-1.5em', width: 400 }}
        textAlign='center'
        >
            <Header>Suggestions For you</Header>
            <Grid.Column color='red' style={{ margin: '0.5em', height: 50 }}>
                Red
            </Grid.Column>
            <Grid.Column color='orange' style={{ margin: '0.5em', height: 50 }}>
                Orange
            </Grid.Column>
            <Grid.Column color='yellow' style={{ margin: '0.5em', height: 50 }}>
                Yellow
            </Grid.Column>
        </Grid>
    );
}
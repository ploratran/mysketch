import React from 'react'; 
import { Container, Grid } from "semantic-ui-react"; 
import StickyHeader from "./StickyHeader"; 
import ImageBox from './ImageBox';
import Suggestions from './Suggestions'; 

export default function Home() {

    return (
        <div>
            <Container text style={{ marginTop: '7em' }}>
                <StickyHeader />
            </Container>
            
            <Grid container stackable>
                <Grid.Column width={9}>
                    <ImageBox />
                </Grid.Column>

                <Grid.Column width={5} style={{border: "solid"}}>
                    <Suggestions />
                </Grid.Column>
            </Grid>
        </div>
    );
};
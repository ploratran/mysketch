import React from 'react'; 
import { Container, Grid } from "semantic-ui-react"; 
import StickyHeader from "./feed/sticky-header/StickyHeader"; 
import ImageBox from './feed/image-card/ImageBox';
import Suggestions from './feed/suggestion/Suggestions'; 

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

                <Grid.Column width={5}>
                    <Suggestions />
                </Grid.Column>
            </Grid>
        </div>
    );
};
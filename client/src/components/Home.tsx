import React, { useContext, useEffect } from 'react'; 
import { Container, Grid } from "semantic-ui-react"; 
import { useNavigate, Link } from 'react-router-dom';
import StickyHeader from "./feed/sticky-header/StickyHeader"; 
import ImageBox from './feed/image-card/ImageBox';
import Suggestions from './feed/suggestion/Suggestions'; 
import { UserContext } from './context/UserContext';
import Login from './auth/Login';

export default function Home() {
    // @ts-ignore
    const {userData, setUserData } = useContext(UserContext); 
    const navigate = useNavigate(); 

    useEffect(() => {
        if (!userData.user) {
            navigate("/");
        }
    }, [userData.user]);

    return (
        <div>
            {userData.user ? (
                <>
                <Container text style={{ marginTop: '7em' }}>
                    {/* @ts-ignore */}
                    <StickyHeader user={userData.user} />
                </Container>
                
                <Grid container stackable>
                    <Grid.Column width={9}>
                        <ImageBox />
                    </Grid.Column>

                    <Grid.Column width={5}>
                        <Suggestions />
                    </Grid.Column>
                </Grid>
                </>
            ) : (
                <Login />
            )}
            
        </div>
    );
};
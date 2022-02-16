import React from "react"; 
import { Feed } from "semantic-ui-react"; 

const ItemComments = () => (
    <Feed>
        <Feed.Event>
        <Feed.Content>
            <Feed.Summary>
            <Feed.User style={{color:"black"}}>username</Feed.User> 
            </Feed.Summary>
            <Feed.Extra text>
            Ours is a life of constant reruns. We're always circling back to where
            we'd we started, then starting all over again. Even if we don't run
            extra laps that day, we surely will come back for more of the same
            another day soon.
            </Feed.Extra>
        </Feed.Content>
        </Feed.Event>
    </Feed>
);

export default ItemComments;
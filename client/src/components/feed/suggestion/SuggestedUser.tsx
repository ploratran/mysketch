import React from "react"; 
import { Feed, Icon, Button } from "semantic-ui-react"; 

export default function SuggestedUser() {
    return (
    <Feed>
        <Feed.Event>
        <Feed.Label>
            <img src="https://react.semantic-ui.com/images/avatar/small/elliot.jpg"/>
        </Feed.Label>
        <Feed.Content>
            <Feed.Summary>
            <Feed.User>Elliot Fu</Feed.User>
            <Button style={{ backgroundColor: "transparent", color: "#4183C4", fontSize : "12px" }}>
                + Follow
            </Button>
            </Feed.Summary>
        </Feed.Content>
        </Feed.Event>
    </Feed>
    );
} 
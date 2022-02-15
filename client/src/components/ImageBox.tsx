import React from "react"; 
import { Card, Image, Form, Input, Feed, Segment, Divider, Button } from "semantic-ui-react"; 

const Paragraph = () => (
    <p>
      {[
        'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum ',
        'tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas ',
        'semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ',
        'ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean ',
        'fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. ',
        'Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor ',
        'neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, ',
        'accumsan porttitor, facilisis luctus, metus',
      ].join('')}
    </p>
);


const CardExampleImageCard = () => (
  <Segment>

    <Feed>
      <Feed.Event>
        <Feed.Label>
          <img src='https://react.semantic-ui.com/images/avatar/small/elliot.jpg' />
        </Feed.Label>
        <Feed.Content>
          <Feed.Summary>
            <Feed.User style={{color:"black"}}>username</Feed.User>
          </Feed.Summary>
        </Feed.Content>
      </Feed.Event>
    </Feed>

    <Image fluid 
      src={'https://react.semantic-ui.com/images/avatar/large/daniel.jpg'} 
    />

    <Button circular  icon='heart outline' size="huge" style={{ backgroundColor: "transparent", margin: "0" }}/>
    <Button circular icon='comment outline' size="huge" style={{ backgroundColor: "transparent" }}/>
    <Button circular icon='share square outline' size="huge" style={{ backgroundColor: "transparent" }}/>    

    <Feed>
      <Feed.Meta>
      <Feed.Like style={{ color: "black", fontWeight: "bold" }}>
        8 Likes
      </Feed.Like>
      </Feed.Meta>
    </Feed>

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

    <Feed>
      <Feed.Event>
        <Feed.Content>
          <Feed.Summary>
            <Feed.Date>3 days ago</Feed.Date>
          </Feed.Summary>
        </Feed.Content>
      </Feed.Event>
    </Feed>
  
    <Divider />
  
    <Form>
      <Form.Field>
        <Input action='Post' placeholder='Add a comment ...' />
      </Form.Field>
    </Form>

  </Segment>
)

export default function HomeContent() {
    return (
      <div>
        <CardExampleImageCard />
        <CardExampleImageCard />
        <CardExampleImageCard />
        <CardExampleImageCard />
        <Paragraph />
      </div>

    )
}
import React from "react"; 
import { Card, Image, Form, Input, Feed, Segment, Divider, Icon } from "semantic-ui-react"; 

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

    <Card centered size='huge' style={{ border: "solid" }} >
      <Image src={'https://react.semantic-ui.com/images/avatar/large/daniel.jpg'} />
     
    </Card>
  
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
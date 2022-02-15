import React from "react"; 
import { Card, Image, Icon } from "semantic-ui-react"; 

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
  <Card>
    <Image src='https://react.semantic-ui.com/images/avatar/large/daniel.jpg' />
    <Card.Content>
      <Card.Header>Daniel</Card.Header>
      <Card.Meta>Joined in 2016</Card.Meta>
      <Card.Description>
        Daniel is a comedian living in Nashville.
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='user' />
        10 Friends
      </a>
    </Card.Content>
  </Card>
)

export default function HomeContent() {
    return (
      <div>
        <CardExampleImageCard />
        <Paragraph />
        <Paragraph />
        <Paragraph />
        <Paragraph />
      </div>

    )
}
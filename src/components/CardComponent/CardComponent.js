import React from 'react';
import { Card, Image } from 'semantic-ui-react';
import "./CardComponent.css"

const CardComponent = ({ name, description, stock, img }) => (
  <Card>
    <Image src={img} className="imgCard" alt="" wrapped ui={false} />
    <Card.Content>
      <Card.Header>{name}</Card.Header>
      <Card.Meta>
        <span>{description}</span>
      </Card.Meta>
      <Card.Description>{stock}</Card.Description>
    </Card.Content>
  </Card>
)

export default CardComponent;
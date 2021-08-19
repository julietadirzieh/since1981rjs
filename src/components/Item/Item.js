import React from 'react';
import { Card, Image } from 'semantic-ui-react';
import "./Item.css";

export const Item = ({ item }) => {
  return (
    <div className="Item-Container">
    <Card>
      <Image src={item.img} className="imgCard" alt="" wrapped ui={false} />
      <Card.Content>
        <Card.Header className="Card-Content">{item.title}</Card.Header>
        <Card.Meta>
          <span>{item.description}</span>
        </Card.Meta>
        <Card.Description className="Card-Content--price">$ {item.price} el metro</Card.Description>
      </Card.Content>
      </Card>
    </div>
  )
};

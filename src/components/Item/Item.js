import React from 'react';

import { Link } from 'react-router-dom';
import { Card, Image } from 'semantic-ui-react';

import "./Item.css";

export const Item = ({ item }) => {
  return (
    <Link to={`/item/${item.id}`} active>
      <div className="Item-Container">
        <Card>
          <Image src={item.img} className="imgCard" alt="" />
          <Card.Content>
            <Card.Header className="Card-Content">{item.title}</Card.Header>
            <Card.Meta>
              <span>{item.description}</span>
            </Card.Meta>
            <Card.Description className="Card-Content--price">$ {item.price} el metro</Card.Description>
          </Card.Content>
        </Card>
      </div>
    </Link>
  )
};

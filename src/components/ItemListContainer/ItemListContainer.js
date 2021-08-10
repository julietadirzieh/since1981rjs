import React from 'react';
import { List } from 'semantic-ui-react';

const ItemListContainer = ( { greeting } ) => (
  <List>
    <List.Item><h1>{ greeting }</h1></List.Item>
    <List.Item><h2>¡Conocé las telas que trabajamos!</h2></List.Item>
  </List>
)

export default ItemListContainer;
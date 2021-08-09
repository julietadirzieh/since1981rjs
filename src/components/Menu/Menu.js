import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'

export default class MenuExampleSecondaryPointing extends Component {
  state = { activeItem: 'Inicio' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <div>
        <Menu pointing secondary>
          <Menu.Item
            name='Inicio'
            active={activeItem === 'Inicio'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='Nosotros'
            active={activeItem === 'Nosotros'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='Productos'
            active={activeItem === 'Productos'}
            onClick={this.handleItemClick}
          />
        <Menu.Item
            name='Preguntas Frecuentes'
            active={activeItem === 'Preguntas Frecuentes'}
            onClick={this.handleItemClick}
          />
          <Menu.Menu position='right'>
            <Menu.Item
              name='Contacto'
              active={activeItem === 'Contacto'}
              onClick={this.handleItemClick}
            />
          </Menu.Menu>
        </Menu>

      </div>
    )
  }
}

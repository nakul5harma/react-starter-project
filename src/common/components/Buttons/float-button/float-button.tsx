import * as React from 'react';
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';

import './float-button.scss';

import { Plus } from '../../../../assets/icons';

export interface FloatingButtonState {
  DropdownOpen: boolean;
}

export default class FloatingButton extends React.Component<
  any,
  FloatingButtonState
> {
  constructor(props: any, state: any) {
    super(props, state);

    this.state = {
      DropdownOpen: false,
    };
  }

  toggleFloatingButton = () => {
    this.setState((prevState) => ({
      DropdownOpen: !prevState.DropdownOpen,
    }));
  };

  render() {
    return (
      <Dropdown
        isOpen={this.state.DropdownOpen}
        toggle={this.toggleFloatingButton}
        className="floating-button-wrapper position-fixed"
      >
        <DropdownToggle className="floating-button" tag={'span'}>
          <Plus />
        </DropdownToggle>

        <DropdownMenu className="mb-3">
          <DropdownItem onClick={this.props.onClick}>
            {this.props.name}
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    );
  }
}

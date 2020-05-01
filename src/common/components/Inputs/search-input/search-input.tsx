import { Component } from 'react';
import * as React from 'react';

import { Button, Input, InputGroup, InputGroupAddon } from 'reactstrap';

import { IconSearch } from '../../../../assets/icons';

export default class InputSearch extends Component<any, any> {
  render() {
    return (
      <React.Fragment>
        <InputGroup className="input-group-Search">
          <Input
            placeholder={this.props.placeholder}
            className="search-input"
            onChange={this.props.onChange}
          />
          <InputGroupAddon addonType="append" className="search-input-icon">
            <Button outline className="btn-search-icon">
              <IconSearch size="1.4" />
            </Button>
          </InputGroupAddon>
        </InputGroup>
      </React.Fragment>
    );
  }
}

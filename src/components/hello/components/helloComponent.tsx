import * as React from 'react';
import { withRouter } from 'react-router';

import { HelloModel } from '../models';

export interface HelloProps {
  helloAction?: (msg: string) => {};
  hello?: HelloModel;
  history?: any;
}

interface State {
  count: number;
}

class HelloComponent extends React.Component<HelloProps, State> {
  constructor(props: any, state: any) {
    super(props, state);
    this.state = {
      count: 0,
    };
  }

  displayCount = () => {
    const newCount = this.state.count + 1;
    this.setState({
      count: newCount,
    });
  };

  displayMsg = () => {
    this.props.helloAction('this is redux action test.');
  };

  render() {
    return (
      <header>
        <nav className="navbar navbar-expand bg-white">
          <span
            className="d-lg-none header-icon-menu mr-3 cursor-pointer"
            id="menu"
          >
            <i className="icon-menu" />
          </span>

          <a className="navbar-brand p-0" href="base-layout-dashboard.html"></a>

          <div className="d-flex align-items-center justify-content-end justify-content-sm-between flex-grow-1">
            <div className="d-flex align-items-center" />

            <div className="d-flex align-items-center">
              <div className="search-input-group mr-3" id="searchBox">
                <input
                  className="form-control"
                  type="text"
                  placeholder="Search"
                />
              </div>

              <a className="mr-4 header-icon-search" href="#" id="searchIcon">
                <i className="icon-search" />
              </a>

              <a href="#" data-toggle="modal" data-target="#activityModal">
                <i className="icon-list header-icon-list" />
              </a>
            </div>
          </div>
        </nav>
      </header>
    );
  }
}

export default withRouter(HelloComponent);

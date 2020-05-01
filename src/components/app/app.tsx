import * as React from 'react';
import { connect } from 'react-redux';

import { StateInterface } from '../../store';
import Routes from '../routes/components/Routes';

interface Props {
  loader?: any;
}

class App extends React.Component<Props, any> {
  render() {
    return (
      <div>
        <Routes />
      </div>
    );
  }
}

const mapStateToProps = (state: StateInterface) => ({
  loader: state.loader,
});

export default connect(mapStateToProps, {})(App);

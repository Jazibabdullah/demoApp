import React, {Component} from 'react';
import {View, StatusBar} from 'react-native';
import ReduxNavigation from '../Navigation/ReduxNavigation';
import {connect} from 'react-redux';
import StartupActions from '../Redux/StartupRedux';
import AppNavigation from '../Navigation/AppNavigation';
import AuthNavigation from '../Navigation/AuthNavigation';
import {useDispatch, useSelector} from 'react-redux';
// Styles
import styles from './Styles/RootContainerStyles';

const RootContainer = () => {
  // componentDidMount() {
  //   this.props.startup();
  // }

  // render() {
  const login = useSelector((state) => state?.search?.login);
  return (
    <View style={styles.applicationView}>
      {/* <StatusBar barStyle='light-content' /> */}
      {login?.data ? <AppNavigation /> : <AuthNavigation />}
      {/* <AuthNavigation /> */}
    </View>
  );
  //   }
};

// wraps dispatch to create nicer functions to call within our component
// const mapDispatchToProps = (dispatch) => ({
//   startup: () => dispatch(StartupActions.startup()),
// });

// export default connect(null, mapDispatchToProps)(RootContainer);
export default RootContainer;

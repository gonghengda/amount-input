import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { View, Text } from 'react-native';
import varibles from '../style/default.native';

export default class AmountInput extends PureComponent {
  render() {
    const { size, style, children } = this.props;
    return (
      <View>
        <Text>fffafafasbmnnnvb</Text>
      </View>
    );
  }
}

WingBlank.propTypes = {
  size: PropTypes.oneOfType([
    PropTypes.oneOf(['sm', 'md', 'lg']),
    PropTypes.number
  ]),
  style: PropTypes.oneOfType([PropTypes.number, PropTypes.object, PropTypes.array])
};

WingBlank.defaultProps = {
  size: 'lg'
};

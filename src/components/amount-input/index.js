import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { View, Text } from 'react-native';

export default class AmountInput extends PureComponent {
  render() {
    const { value, style, children } = this.props;
    return (
      <View>
        <Text>fffafafasbmnnnvb</Text>
      </View>
    );
  }
}

AmountInput.propTypes = {
  style: PropTypes.oneOfType([PropTypes.number, PropTypes.object, PropTypes.array])
};


AmountInput.defaultProps = {
  value: ''
};

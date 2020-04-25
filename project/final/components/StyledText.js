import * as React from 'react'; 
import { Text } from 'react-native';

export function OpenSans(props) {
  return <Text {...props} style={[props.style, { fontFamily: 'open-sans' }]} />;
}
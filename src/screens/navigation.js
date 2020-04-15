import 'react-native-gesture-handler';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {View, Text} from 'react-native';
import HomeScreen from './home';
import DetailScreen from './glasses';

import {createSharedElementStackNavigator} from 'react-navigation-shared-element';

const Stack = createSharedElementStackNavigator();

export default () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Lista">
          <Stack.Screen name="Lista" component={HomeScreen} />
          <Stack.Screen
            name="Detail"
            component={DetailScreen}
            sharedElementsConfig={(route, otherRoute, showing) => {
              const {item} = route.params;
              console.log(route, otherRoute, showing);
              return [
                {
                  id: item.name,
                  animation: 'fade',
                  // resize: 'clip',
                  // align: 'left-top',
                },
              ];
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

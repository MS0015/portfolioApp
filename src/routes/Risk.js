import { Text, View } from 'native-base';
import React from 'react';
import { Dimensions, SafeAreaView } from 'react-native';

import { SwipeListView } from 'react-native-swipe-list-view';
import { VictoryBar, VictoryChart, VictoryTheme } from 'victory-native';
export default function Risk({ navigation }) {
  const screenWidth = Dimensions.get('window').width;
  const screenHeight = Dimensions.get('window').height;

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <SwipeListView
        data={[{ key: 2, text: 'Mathu' }]}
        renderItem={(data, rowMap) => (
          <View bg={'red.400'} p={2}>
            <Text>I am {data.item.text} in a SwipeListView</Text>
          </View>
        )}
        renderHiddenItem={(data, rowMap) => (
          <View>
            <Text>Delete</Text>
          </View>
        )}
        // leftOpenValue={75}
        // rightOpenValue={-75}
        onSwipeValueChange={(swipe) => {
          if (swipe.value === -200) {
            console.log(swipe);
          }
        }}
      />

      <VictoryChart theme={VictoryTheme.material} domainPadding={10}>
        <VictoryBar
          animate
          horizontal
          style={{ data: { fill: '#c43a31' } }}
          data={[
            { x: 1, y: 1 },
            { x: 2, y: 2 },
            { x: 3, y: 5 },
          ]}
        />
      </VictoryChart>
    </SafeAreaView>
  );
}

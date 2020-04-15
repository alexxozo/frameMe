import React, {useState, useEffect} from 'react';
import {StyleSheet, ScrollView, Image, RefreshControl} from 'react-native';
import {Constants, Colors, View, Card, Button, Text} from 'react-native-ui-lib'; // eslint-disable-line
import Icon from 'react-native-vector-icons/FontAwesome5';

import {SharedElement} from 'react-navigation-shared-element';
import {TouchableOpacity, FlatList} from 'react-native-gesture-handler';
import Api from '../services/api';

const chooseShape = shapeString => {
  switch (shapeString) {
    case 'rectangular':
      return require('../../assets/icons/rectangular.jpg');
    default:
      return require('../../assets/icons/round.jpg');
  }
};

export default props => {
  const {navigation} = props;
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = () => {
    setLoading(true);

    Api.getList().then(result => {
      setList(result.data.documents);
      setLoading(false);
    });
  };

  useEffect(fetchData, []);

  return (
    <FlatList
      data={list}
      keyExtractor={item => item.name}
      refreshControl={
        <RefreshControl refreshing={loading} onRefresh={fetchData} />
      }
      renderItem={wrapped => {
        const {item} = wrapped;
        return (
          <TouchableOpacity
            onPress={() => navigation.push('Detail', {item: item})}>
            <Card style={{marginBottom: 15}}>
              <SharedElement id={item.name}>
                <Card.Image
                  height={200}
                  imageSource={{
                    uri:
                      'https://cdni.lensa.ro/images/products/img1/29967/full/emporio-armani-rame-ochelari-de-vedere-dama-emporio-armani-ea3121-5017-76111.jpg',
                  }}
                />
              </SharedElement>
              <View padding-15>
                <View
                  style={{
                    flex: 1,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}>
                  <Text text60>{item.fields?.brand?.stringValue}</Text>
                  <Image
                    source={chooseShape(item.fields?.shape?.stringValue)}
                    resizeMode
                    style={{width: 40}}
                  />
                </View>

                <Text text90 successColor paddingT-4>
                  In stoc
                </Text>

                <Text text90 dark50 paddingT-4>
                  Cod produs: ABC123
                </Text>
              </View>
            </Card>
          </TouchableOpacity>
        );
      }}
    />
  );
};

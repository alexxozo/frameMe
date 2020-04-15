// @ts-nocheck
import * as React from 'react';
import {useEffect} from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import {SharedElement} from 'react-navigation-shared-element';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {
  Constants,
  ActionBar,
  Colors,
  View,
  Card,
  Button,
  Text,
  Image,
} from 'react-native-ui-lib'; // eslint-disable-line

export default props => {
  const {navigation} = props;
  const {item} = props.route.params;
  useEffect(() => {
    navigation.setOptions({title: 'Pierre Cardin'});
  }, []);
  return (
    <>
      <ScrollView style={{flex: 1, backgroundColor: 'white'}}>
        <SharedElement id={item.name}>
          <Image
            source={{
              uri:
                'https://cdni.lensa.ro/images/products/img1/29967/full/emporio-armani-rame-ochelari-de-vedere-dama-emporio-armani-ea3121-5017-76111.jpg',
            }}
            style={{height: 300}}
            cover={true}
          />
        </SharedElement>
        <View
          style={{
            flex: 1,
            padding: 15,
          }}>
          <Text text50>{item.fields?.brand?.stringValue}</Text>
          <Text text90 successColor paddingT-10>
            In stoc
          </Text>

          <Text text90 dark50 paddingT-4>
            Cod produs: ABC123
          </Text>

          <Text text90 marginT-15>
            Descriere
          </Text>
          <Text marginT-10 dark30>
            Produsul este nou si comercializat in ambalajul original al
            producatorului. Imaginile de pe Lensa.ro au caracter informativ, iar
            nuanta, tonul si intensitatea culorii pot varia in functie de
            monitor. Accesoriile expuse in fotografii sau materiale video sunt
            cu titlu de prezentare, iar acestea pot sa difere in functie de
            sezonalitate.
          </Text>
          <Text text90 marginT-15>
            Dimensiuni
          </Text>
          <View
            style={{
              flex: 1,
              justifyContent: 'space-around',
              flexDirection: 'row',
              marginTop: 25,
            }}>
            <View>
              <Image
                source={require('../../assets/icons/nose-width.jpg')}
                resizeMode
                style={{width: 50}}
              />
              <Text center text100 marginT-5>
                {item.fields?.noseBridgeSize?.integerValue} mm
              </Text>
            </View>
            <View>
              <Image
                source={require('../../assets/icons/glasses-length.jpg')}
                resizeMode
                style={{width: 50}}
              />
              <Text center text100 marginT-5>
                {item.fields?.glassesWidth?.integerValue} mm
              </Text>
            </View>
            <View>
              <Image
                source={require('../../assets/icons/lens-height.jpg')}
                resizeMode
                style={{width: 50}}
              />
              <Text center text100 marginT-5>
                {item.fields?.lensHeight?.integerValue} mm
              </Text>
            </View>
            <View>
              <Image
                source={require('../../assets/icons/lens-width.jpg')}
                resizeMode
                style={{width: 50}}
              />
              <Text center text100 marginT-5>
                {item.fields?.lensWidth?.integerValue} mm
              </Text>
            </View>
            <View>
              <Image
                source={require('../../assets/icons/glasses-width.jpg')}
                resizeMode
                style={{width: 50}}
              />
              <Text center text100 marginT-5>
                {item.fields?.glassesWidth?.integerValue} mm
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
      <ActionBar
        centered
        actions={[
          {
            iconSource: () => <Icon size={20} name="codepen" />,
            iconStyle: {width: 25},
          },
          {
            iconSource: () => <Icon size={20} name="cart-plus" />,
            iconStyle: {width: 25},
          },
        ]}
      />
    </>
  );
};

/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Image, ScrollView, StyleSheet} from 'react-native';

const DonateScreenImages = ({route}) => {
  const {id, donateImage} = route.params;
  console.log('======', id);
  const donateImages = [
    {id: '1', image: require('../../assets/donate/img1.jpg')},
    {id: '2', image: require('../../assets/donate/img10.webp')},
    {id: '3', image: require('../../assets/donate/img2.webp')},
    {id: '4', image: require('../../assets/donate/img3.jpg')},
    {id: '5', image: require('../../assets/donate/img4.jpeg')},
    {id: '6', image: require('../../assets/donate/img5.jpg')},
    {id: '7', image: require('../../assets/donate/img6.jpg')},
    {id: '8', image: require('../../assets/donate/img7.jpg')},
    {id: '9', image: require('../../assets/donate/img8.jpg')},
    {id: '10', image: require('../../assets/donate/img9.webp')},
    {id: '11', image: require('../../assets/donate/img11.jpeg')},
  ];

  return (
    <View style={styles.container}>
      <ScrollView horizontal={true}>
        <View style={styles.container_body}>
          <Image source={donateImage} style={styles.image} />
          {donateImages
            .filter(val => val.id !== id)
            .map((item, index) => (
              <Image source={item.image} style={styles.image} />
            ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default DonateScreenImages;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  container_body: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    margin: 5,
    marginRight: 20,
    width: 350,
    height: 250,
    borderRadius: 15,
  },
});

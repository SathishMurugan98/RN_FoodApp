/* eslint-disable no-undef */
/* eslint-disable react-native/no-inline-styles */

import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
  TextInput,
  StyleSheet,
} from 'react-native';
import {Card, CardItem, Icon, Container, Spinner} from 'native-base';
import {homeScreenData} from '../components/HomeScreenData';
import IconIonic from 'react-native-vector-icons/Ionicons';
import IconFont from 'react-native-vector-icons/FontAwesome';
import CarouselItem from '../components/CarouselItem';
import HomeCards from '../components/HomeCards';

const HomeScreen = ({navigation}) => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <>
      <View style={{margin: 5, marginTop: 10}}>
        <Card style={styles.search_card}>
          <Icon
            type="Ionicons"
            name="search-outline"
            style={{fontSize: 30, color: 'red', margin: 5}}
          />
          <TextInput
            placeholder="name, cuisine or food"
            style={styles.search_textInput}
            value={searchTerm}
            onChangeText={text => setSearchTerm(text)}
          />
        </Card>
      </View>
      <ScrollView>
        <View>
          <CarouselItem />
        </View>
        <View>
          <HomeCards navObj={navigation} />
        </View>
        <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
          {homeScreenData
            .filter(val => {
              if (val == '') {
                return val;
              } else if (
                val.foodname.toLowerCase().includes(searchTerm.toLowerCase())
              ) {
                return val;
              }
            })
            .map((item, index) => (
              <View key={item.sno} style={{marginTop: 25}}>
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate('Detail', {id: item.id, sno: item.sno})
                  }>
                  <Card style={styles.homeScreenData_card}>
                    <ImageBackground
                      source={item.image}
                      style={styles.imgBg_image}
                      imageStyle={styles.imgBg_image}>
                      <View style={{flexDirection: 'row'}}>
                        <View style={styles.imgBg_offer}>
                          <Text style={{textAlign: 'center', color: '#FFF'}}>
                            {item.offer}
                          </Text>
                        </View>
                        <View style={styles.imgBg_distance}>
                          <Text style={{textAlign: 'center', color: '#FFF'}}>
                            {item.distance}
                          </Text>
                        </View>
                      </View>
                    </ImageBackground>
                    <CardItem style={{flexWrap: 'wrap', marginBottom: 10}}>
                      <View style={{marginLeft: 1, flexDirection: 'row'}}>
                        <Text style={styles.cardItem_title}>{item.title}</Text>
                        <TouchableOpacity
                          style={styles.cardItem_TouchableOP}
                          disabled={true}>
                          <Text style={styles.cardItem_TouchableOPText}>
                            {item.rating}
                            <IconIonic name="star" />
                          </Text>
                        </TouchableOpacity>
                      </View>
                      <View style={{flexDirection: 'row'}}>
                        <Text style={styles.foodname}>{item.foodname}</Text>
                        <Text style={styles.price}>
                          <IconFont name="rupee" /> {item.price}
                        </Text>
                      </View>
                      <View>
                        <Text style={styles.location}>{item.location}</Text>
                      </View>
                    </CardItem>
                  </Card>
                </TouchableOpacity>
              </View>
            ))}
        </View>
      </ScrollView>
    </>
  );
};
export default HomeScreen;

const styles = StyleSheet.create({
  search_card: {
    width: 340,
    height: 42,
    borderRadius: 10,
    flexDirection: 'row',
  },
  search_textInput: {
    textAlign: 'center',
    color: '#000',
    backgroundColor: '#FFF',
    width: 270,
    height: 40,
    fontSize: 16,
  },
  homeScreenData_card: {
    marginLeft: 15,
    borderRadius: 15,
    width: 330,
    marginBottom: 10,
  },
  imgBg_image: {
    width: 330,
    height: 180,
  },
  imgBg_imageStyle: {
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  imgBg_offer: {
    marginTop: 140,
    backgroundColor: '#FF6666',
    height: 25,
  },
  imgBg_distance: {
    marginTop: 140,
    marginLeft: 135,
    backgroundColor: 'rgba(0,0,0,0.5)',
    width: 60,
    height: 25,
    borderRadius: 15,
  },
  cardItem_title: {
    marginLeft: 3,
    fontSize: 18,
    width: 250,
  },

  cardItem_TouchableOP: {
    width: 50,
    height: 30,
    backgroundColor: '#006600',
    borderRadius: 10,
    //marginLeft: 100,
  },
  cardItem_TouchableOPText: {
    color: '#FFF',
    textAlign: 'center',
    marginTop: 3,
    fontWeight: 'bold',
  },
  foodname: {
    marginLeft: 3,
    fontSize: 15,
    color: '#758283',
    width: 250,
    flexWrap: 'wrap',
  },
  price: {
    //marginLeft: 130,
    fontSize: 16,
    color: '#758283',
  },
  location: {
    marginLeft: 3,
    fontSize: 14,
    color: '#758283',
  },
});

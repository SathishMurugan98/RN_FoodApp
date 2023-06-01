/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
} from 'react-native';
import {Card, CardItem} from 'native-base';
import {homeScreenData} from '../components/HomeScreenData';
import IconIonic from 'react-native-vector-icons/Ionicons';
import IconFont from 'react-native-vector-icons/FontAwesome';

const CardsList = ({navigation, route}) => {
  const {name} = route.params;
  console.log('Card List name:==>', name);
  return (
    <ScrollView>
      <View style={styles.container}>
        {homeScreenData
          .filter(val => {
            if (val == '') {
              return val;
            } else if (
              val.foodname.toLowerCase().includes(name.toLowerCase())
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
                <Card style={styles.card}>
                  <ImageBackground
                    source={item.image}
                    style={styles.imgBg_container}
                    imageStyle={styles.imageStyle}>
                    <View style={{flexDirection: 'row'}}>
                      <View style={styles.offer}>
                        <Text style={{textAlign: 'center', color: '#FFF'}}>
                          {item.offer}
                        </Text>
                      </View>
                      <View style={styles.distance}>
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
                        style={styles.cardItem_touchOP}
                        disabled={true}>
                        <Text style={styles.cardItem_rating}>
                          {item.rating}
                          <IconIonic name="star" />
                        </Text>
                      </TouchableOpacity>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                      <Text style={styles.food}>{item.foodname}</Text>
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
  );
};

export default CardsList;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: 'rgba(0,0,0,0.9)',
  },
  card: {
    marginLeft: 15,
    borderRadius: 15,
    width: 330,
    marginBottom: 10,
  },
  imgBg_container: {
    width: 330,
    height: 180,
  },
  imageStyle: {
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  offer: {
    marginTop: 140,
    backgroundColor: '#FF6666',
    height: 25,
  },
  distance: {
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

  cardItem_touchOP: {
    width: 50,
    height: 30,
    backgroundColor: '#006600',
    borderRadius: 10,
    //marginLeft: 100,
  },
  cardItem_rating: {
    color: '#FFF',
    textAlign: 'center',
    marginTop: 3,
    fontWeight: 'bold',
  },
  food: {
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

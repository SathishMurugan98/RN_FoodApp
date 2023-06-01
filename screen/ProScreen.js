/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  ScrollView,
  ImageBackground,
} from 'react-native';
import {Icon, H2} from 'native-base';

const ProScreen = ({navigation}) => {
  return (
    <>
      <ScrollView>
        <View>
          <ImageBackground
            source={require('../assets/donate/img12.jpg')}
            style={styles.imageBackgroundSize}>
            <View style={styles.imageBackground}>
              <View>
                <View style={styles.headerContent}>
                  <Image
                    source={require('../assets/pro/icon/icon1.jpeg')}
                    style={styles.image}
                  />
                  <H2 style={styles.h2}>Zomato PRO</H2>
                </View>
              </View>
              <View style={{flex: 1, margin: 30, marginTop: 70}}>
                <View style={styles.container}>
                  <Icon
                    name="brunch-dining"
                    type="MaterialIcons"
                    style={styles.icon}
                  />
                  <View>
                    <Text style={styles.textContent}>
                      Up to 40% off on each dining experience
                    </Text>
                  </View>
                </View>
                <View style={styles.container}>
                  <Icon
                    name="shopping-bag-1"
                    type="Fontisto"
                    style={styles.icon}
                  />
                  <View>
                    <Text style={styles.textContent}>
                      Up to 30% extra off on food deliveries
                    </Text>
                  </View>
                </View>
                <View style={styles.container}>
                  <Icon
                    name="shopping-store"
                    type="Fontisto"
                    style={styles.icon}
                  />
                  <View>
                    <Text style={styles.textContent}>
                      25,000+ restaurants welcome PRO members
                    </Text>
                  </View>
                </View>
                <View style={styles.container}>
                  <Icon
                    name="run-fast"
                    type="MaterialCommunityIcons"
                    style={styles.icon}
                  />
                  <View>
                    <Text style={styles.textContent}>
                      Jump the queue for faster food deliveries
                    </Text>
                  </View>
                </View>
              </View>
              <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('ProPayment')}>
                <Text style={styles.buttonText}>Become a PRO</Text>
                <Text
                  style={{color: '#FFF', fontSize: 15, textAlign: 'center'}}>
                  only{' '}
                  <Icon
                    name="rupee"
                    type="FontAwesome"
                    style={{fontSize: 15, color: '#FFF'}}
                  />
                  200 for 90 days
                </Text>
              </TouchableOpacity>
            </View>
          </ImageBackground>
        </View>
      </ScrollView>
    </>
  );
};

export default ProScreen;

const styles = StyleSheet.create({
  icon: {
    color: '#FFF',
    marginTop: 4,
    width: 50,
    height: 50,
    fontSize: 40,
  },
  textContent: {
    flexWrap: 'wrap',
    marginLeft: 8,
    width: 250,
    color: '#FFF',
    fontSize: 16,
  },
  imageBackgroundSize: {
    width: 360,
    height: 640,
  },
  imageBackground: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  headerContent: {
    marginTop: 110,
    marginRight: 40,
    alignItems: 'center',
  },
  image: {width: 70, height: 70, borderRadius: 150},
  h2: {
    color: '#FFF',
    fontSize: 26,
    fontWeight: 'bold',
    fontStyle: 'italic',
  },
  container: {
    flexDirection: 'row',
    marginBottom: 10,
    borderBottomWidth: 1,
    borderColor: '#FFF',
  },
  button: {
    marginHorizontal: 20,
    marginVertical: 20,
    backgroundColor: '#FF6263',
    borderRadius: 20,
    height: 70,
  },
  buttonText: {
    color: '#FFF',
    textAlign: 'center',
    marginTop: 5,
    fontSize: 20,
  },
});

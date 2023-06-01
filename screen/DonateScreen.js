/* eslint-disable no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
  ScrollView,
  Text,
  Image,
} from 'react-native';
import {Card, H2, Icon} from 'native-base';
import LottieView from 'lottie-react-native';

const DonateScreen = ({navigation}) => {
 
  const donateImages = [
    {id: '1', image: require('../assets/donate/img1.jpg')},
    {id: '2', image: require('../assets/donate/img10.webp')},
    {id: '3', image: require('../assets/donate/img2.webp')},
    {id: '4', image: require('../assets/donate/img3.jpg')},
    {id: '5', image: require('../assets/donate/img4.jpeg')},
    {id: '6', image: require('../assets/donate/img5.jpg')},
    {id: '7', image: require('../assets/donate/img6.jpg')},
    {id: '8', image: require('../assets/donate/img7.jpg')},
    {id: '9', image: require('../assets/donate/img8.jpg')},
    {id: '10', image: require('../assets/donate/img9.webp')},
    {id: '11', image: require('../assets/donate/img11.jpeg')},
  ];
  return (
    <>
      <ScrollView>
        <View>
          <ImageBackground
            source={require('../assets/donate/img2.webp')}
            style={styles.imgBg_container}>
            <View style={styles.imgBg_text}>
              <H2 style={{marginLeft: 10, color: '#FFF', fontWeight: 'bold'}}>
                Feeding India
              </H2>
              <View style={{flexDirection: 'row'}}>
                <LottieView
                  style={{width: 40, height: 40}}
                  source={require('../assets/json/dot-zoomin-zoomout1.json')}
                  autoPlay
                  loop
                />
                <Text style={{color: '#FFF', flexWrap: 'wrap', marginTop: 7}}>
                  4,54,181 meals served in the last 30 days
                </Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <LottieView
                  style={{width: 40, height: 40}}
                  source={require('../assets/json/dot-zoomin-zoomout1.json')}
                  autoPlay
                  loop
                />
                <Text style={styles.imgBg_content}>
                  12.6 cr meals served to Feeding India till date
                </Text>
              </View>
            </View>
            <TouchableOpacity
              style={styles.img_touchOP}
              onPress={() => navigation.navigate('DonateScreenPayment')}>
              <Text style={styles.img_touchOP_text}>Donate Now</Text>
            </TouchableOpacity>
          </ImageBackground>
        </View>
        <View>
          <Card style={styles.card}>
            <Text style={styles.card_text1}>
              How much of your donation actually goes to feeding peoples?
            </Text>
            <Text style={styles.card_text2}>
              It's Feeding India to cover its admin expends. 100% of what you
              donate on this tab goes to feed the needy.
            </Text>
          </Card>
          <Card style={styles.card}>
            <Text style={styles.card_text1}>
              How do we ensure your donations are used responsibly?
            </Text>
            <Text style={styles.card_text2}>
              Our processes are validated by Giant Thornton Bharat LLP every
              quarter and we publish Transparency Reports on the that blog.
            </Text>
          </Card>
          <Card style={styles.card}>
            <Text style={styles.card_text1}>
              How do we serve food through our NGO partners?
            </Text>
            <Text style={styles.card_text2}>
              Verified NGO partners pick up hygienic cooked food from various
              partners kitchen in the city to feed people in need on a daily
              basis. These include children, women, elderly and specially abled.
            </Text>
            <View style={{flexDirection: 'row', margin: 5}}>
              <ScrollView horizontal={true}>
                {donateImages.map((item, index) => (
                  <TouchableOpacity
                    key={index}
                    onPress={() =>
                      navigation.navigate('DonateScreenImages', {
                        id: item.id,
                        donateImage: item.image,
                      })
                    }>
                    <Image source={item.image} style={styles.donateImg_image} />
                  </TouchableOpacity>
                ))}
              </ScrollView>
              <Icon
                name="rightcircle"
                type="AntDesign"
                style={{marginTop: 50}}
              />
            </View>
            {/* style={{marginTop: 50, borderRadius: 150}} */}
          </Card>

          <Card style={styles.card}>
            <Text style={styles.card_text1}>
              Who are the NGO partners that work with us?
            </Text>
            <Text style={styles.card_text2}>
              We identify and support credible organizations across India such
              as Teach for India, Smile Foundation and caritas India, to create
              long-term impact on hunger.
            </Text>
          </Card>
        </View>
      </ScrollView>
    </>
  );
};

export default DonateScreen;

const styles = StyleSheet.create({
  imgBg_container: {
    width: 360,
    height: 540,
  },
  imgBg_text: {
    marginTop: 340,
    flex: 1,
  },
  imgBg_content: {
    color: '#FFF',
    flexWrap: 'wrap',
    marginTop: 7,
    marginRight: 40,
  },
  img_touchOP: {
    marginHorizontal: 20,
    marginVertical: 10,
    backgroundColor: '#FF6666',
    height: 50,
    borderRadius: 10,
  },
  img_touchOP_text: {
    color: '#FFF',
    fontSize: 17,
    textAlign: 'center',
    marginTop: 10,
    fontWeight: 'bold',
  },
  card: {
    width: 340,
    marginBottom: 7,
    borderRadius: 10,
    alignItems: 'center',
    marginLeft: 7,
    marginTop: 7,
  },
  card_text1: {
    color: 'black',
    flexWrap: 'wrap',
    fontSize: 17,
    fontWeight: 'bold',
    margin: 5,
  },
  card_text2: {
    color: '#595959',
    flexWrap: 'wrap',
    marginLeft: 7,
    marginBottom: 7,
  },
  donateImg_image: {
    margin: 5,
    width: 150,
    height: 150,
    borderRadius: 15,
  },
});

/* eslint-disable eqeqeq */
/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import IconIoni from 'react-native-vector-icons/Ionicons';
import IconFont from 'react-native-vector-icons/FontAwesome';
import {homeScreenData} from '../components/HomeScreenData';
import {Card, H2} from 'native-base';
import RNUpiPayment from 'react-native-upi-payment';
import Snackbar from 'react-native-snackbar';

const DetailScreen = ({navigation, route}) => {
  const {sno} = route.params;
  let [count, setCount] = useState(1);
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  const payment = amount => {
    RNUpiPayment.initializePayment(
      {
        vpa: 'sathishcse435@oksbi',
        payeeName: 'Sathish',
        amount: amount,
        transactionNote: 'Testing Upi',
        transactionRef: 'aasf-332-aoei-fn',
      },
      successCallback,
      failureCallback,
    );
  };
  function failureCallback(data) {
    console.log(data);
    // in case no action taken
    if (data.status == 'FAILURE') {
      setStatus('FAILURE');
      setMessage('FAILURE');
    }
    // in case of googlePay
    else if (data.Status == 'FAILURE') {
      setStatus('FAILURE');
      setMessage('App closed without doing payment');
    }
    // in case of phonepe
    else if (data.Status == 'Failed') {
      setStatus('FAILURE');
      setMessage('App closed without doing payment');
    }
    // in case of phonepe
    else if (data.Status == 'Submitted') {
      setStatus('FAILURE');
      setMessage('transaction done but pending');
    }
    // any other case than above mentioned
    else {
      setStatus('FAILURE');
      setMessage('FAILURE');
    }
    Snackbar.show({
      text: message.length > 0 ? message : status,
      textColor: '#FFF',
      backgroundColor: '#FF6666',
    });
  }
  function successCallback(data) {
    console.log(data);
    setStatus('SUCCESS');
    setMessage('Succccessfull payment');
    Snackbar.show({
      text: message,
      textColor: '#FFF',
      backgroundColor: '#1FAA59',
    });
  }

  // const customDelvery = buttonFocus
  //   ? styles.buttonDelivery
  //   : styles.buttonReview;
  // const customReview = buttonFocus
  //   ? styles.buttonReview
  //   : styles.buttonDelivery;
  const incre_decre = type => {
    if (type == 'add') {
      setCount(count + 1);
    } else if (type == 'sub' && count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <View>
      {homeScreenData
        .filter(val => val.sno == sno && val.id)
        .map((item, index) => (
          <ScrollView style={{backgroundColor: '#FFF'}} key={index}>
            <Card style={styles.card}>
              <View style={{width: 270, margin: 6}}>
                <H2 style={{fontWeight: 'bold'}}>{item.title}</H2>
                <Text style={styles.card_text}>{item.foodname}</Text>
                <Text style={styles.card_text}>{item.location}</Text>
              </View>
              <View style={styles.card_content}>
                <Text style={{color: '#FFF'}}>
                  {item.rating} <IconIoni name="star" type="Ionicons" size={16} />
                </Text>
                <Text style={{color: '#FFF'}}>delivery</Text>
              </View>
            </Card>
            <View>
              <Image source={item.image} style={styles.image} />
              <View style={{flexDirection: 'row', margin: 10}}>
                {/* <TouchableOpacity
                  style={customDelvery}
                  onPress={() => setButtonFocus(!buttonFocus)}>
                  <Text style={{color: '#FFF'}}>Delivery</Text>
                </TouchableOpacity> */}
                <View style={{marginLeft: 20}}>
                  <Image
                    source={require('../assets/details/icon1.png')}
                    style={styles.content_image}
                  />
                  <Text style={styles.content_text1}>Mode</Text>
                  <Text style={styles.content_text2}>delivery</Text>
                </View>
                <View style={{marginLeft: 55}}>
                  <Image
                    source={require('../assets/details/icon2.png')}
                    style={styles.content_image}
                  />
                  <Text style={styles.content_text1}>Time</Text>
                  <Text style={styles.content_text2}>{item.distance}</Text>
                </View>
                {/* <TouchableOpacity
                  style={customReview}
                  onPress={() => setButtonFocus(!buttonFocus)}>
                  <Text style={{color: '#FFF'}}>Reviews</Text>
                </TouchableOpacity> */}
                <View style={{flexDirection: 'row', marginLeft: 35, margin: 5}}>
                  <View style={styles.count_container}>
                    <TouchableOpacity onPress={() => incre_decre('sub')}>
                      <Text style={styles.count_touchOP}> - </Text>
                    </TouchableOpacity>
                    <Text style={{fontSize: 25, margin: 6}}>{count}</Text>
                    <TouchableOpacity onPress={() => incre_decre('add')}>
                      <Text style={styles.count_touchOP}> + </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>

            <View style={{margin: 20}}>
              <TouchableOpacity
                style={styles.add_touchOP}
                onPress={() => payment(item.price * count)}>
                <Text style={styles.add_touchOP_text}>
                  Add  <IconFont name="rupee" size={16} /> {item.price * count}
                </Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        ))}
    </View>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    margin: 10,
    marginTop: 10,
    borderRadius: 15,
  },
  card_text: {fontSize: 16, color: '#595959'},
  card_content: {
    marginTop: 30,
    backgroundColor: 'green',
    height: 50,
    width: 90,
    alignItems: 'center',
    borderRadius: 15,
  },
  image: {
    width: 355,
    height: 300,
    alignSelf: 'center',
    borderRadius: 5,
  },
  content_image: {width: 30, height: 30, alignSelf: 'center'},
  content_text1: {color: 'black', textAlign: 'center'},
  content_text2: {color: '#595959', textAlign: 'center'},
  count_container: {
    borderWidth: 1,
    flexDirection: 'row',
    width: 110,
    height: 50,
    backgroundColor: '#ffcccc',
    borderRadius: 10,
    borderColor: '#ff66a3',
  },
  count_touchOP: {fontSize: 30, color: '#FF6666', margin: 4},
  add_touchOP: {
    alignSelf: 'center',
    borderRadius: 30,
    fontSize: 30,
    backgroundColor: '#FF6666',
    width: 200,
    height: 50,
  },

  add_touchOP_text: {
    color: '#FFF',
    textAlign: 'center',
    marginTop: 10,
    fontSize: 20,
    fontWeight: 'bold',
  },

  // buttonDelivery: {
  //   backgroundColor: 'rgba(0,0,0,0.9)',
  //   height: 50,
  //   width: 130,
  //   marginTop: 5,
  //   borderRadius: 10,
  //   marginRight: 20,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  // },
  // buttonReview: {
  //   backgroundColor: 'rgba(0,0,0,0.6)',
  //   height: 50,
  //   width: 130,
  //   borderRadius: 10,
  //   marginRight: 20,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  // },
});

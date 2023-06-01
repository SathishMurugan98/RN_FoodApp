/* eslint-disable eqeqeq */
/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import {Icon, H2} from 'native-base';
import RNUpiPayment from 'react-native-upi-payment';
import Snackbar from 'react-native-snackbar';

let today = new Date();
let tomorrow = new Date();
let proEndDate = '';
tomorrow.setDate(today.getDate() + 90);
var day = tomorrow.getDate();
var month = tomorrow.getMonth() + 1;
var year = tomorrow.getFullYear();
proEndDate = day + '-' + month + '-' + year;
console.log('currentDate++++++=====+++', proEndDate);

const ProPayment = ({navigation}) => {
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');
  const proPayment = () => {
    RNUpiPayment.initializePayment(
      {
        vpa: 'sathishcse435@oksbi',
        payeeName: 'Sathish',
        amount: 200,
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

  return (
    <>
      <View style={styles.headerContainer}>
        <View style={styles.headerContent}>
          <Image
            source={require('../../assets/pro/icon/icon1.jpeg')}
            style={styles.image}
          />
          <View style={{flexDirection: 'row'}}>
            <H2 style={styles.h2}>Zomato </H2>
            <Text style={styles.pro}>PRO</Text>
          </View>
        </View>
      </View>
      <View style={styles.membership}>
        <Text style={[styles.membershipText, {width: 250}]}>
          {' '}
          3 Months Membership
        </Text>
        <Text style={[styles.membershipText, {width: 80}]}>
          <Icon
            name="rupee"
            type="FontAwesome"
            style={{fontSize: 15, color: '#E83A59'}}
          />
          200.00
        </Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.contentText}> Total Cost</Text>
        <Text style={styles.contentText}>
          <Icon name="rupee" type="FontAwesome" style={{fontSize: 15}} />
          200.00
        </Text>
      </View>
      <View style={{flexDirection: 'row'}}>
        <Text style={{color: 'black', margin: 10, marginLeft: 20}}>
          Membership ends on {proEndDate}. You can cancel this membership at any
          time - no questions asked!
        </Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={() => proPayment()}>
        <Text style={styles.buttonText}>Become a PRO</Text>
      </TouchableOpacity>
    </>
  );
};

export default ProPayment;

const styles = StyleSheet.create({
  headerContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.8)',
    height: 250,
    borderBottomStartRadius: 50,
    borderBottomEndRadius: 50,
  },
  content: {
    flexDirection: 'row',
    margin: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccccb3',
  },
  contentText: {
    color: 'black',
    margin: 10,
    width: 230,
    fontSize: 17,
    fontWeight: 'bold',
  },
  pro: {
    color: '#FFF',
    marginTop: 10,
    width: 55,
    height: 29,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#E83A59',
    borderRadius: 8,
    fontSize: 18,
  },
  headerContent: {
    marginTop: 110,
    alignItems: 'center',
  },
  image: {width: 70, height: 70, borderRadius: 150},
  h2: {
    marginTop: 10,
    color: '#FFF',
    fontSize: 26,
    fontWeight: 'bold',
    fontStyle: 'italic',
  },
  membership: {
    flexDirection: 'row',
    backgroundColor: '#e0e0d1',
    margin: 15,
    height: 40,
    marginLeft: 0,
    width: 360,
  },
  membershipText: {
    color: '#E03B8B',
    margin: 10,
  },
  button: {
    marginHorizontal: 60,
    marginVertical: 10,
    backgroundColor: '#FF6263',
    borderRadius: 20,
    height: 40,
  },
  buttonText: {
    color: '#FFF',
    textAlign: 'center',
    marginTop: 5,
    fontSize: 20,
  },
});

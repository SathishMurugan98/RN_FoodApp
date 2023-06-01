/* eslint-disable eqeqeq */
/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  StyleSheet,
  ScrollView,
} from 'react-native';
import {Card, Icon} from 'native-base';
import {RadioButton} from 'react-native-paper';
import RNUpiPayment from 'react-native-upi-payment';
import Snackbar from 'react-native-snackbar';

const DonateScreenPayment = ({navigation}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNo, setPhoneNo] = useState('');
  const [panCard, setPanCard] = useState('');
  const [resAddress, setResAddress] = useState('');
  const [checked, setChecked] = useState('first');
  const [donateAmount, setDonateAmount] = useState(100);

  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  const radioAction = (checkStatus, amount) => {
    console.log(checkStatus, '==== radioAction =====', amount);
    setChecked(checkStatus);
    setDonateAmount(amount);
  };

  const upiPaymentAction = () => {
    let emailcheck = emailValidation(email);
    if (name && email && phoneNo) {
      if (emailcheck) {
        RNUpiPayment.initializePayment(
          {
            vpa: 'sathishcse435@oksbi',
            payeeName: name,
            amount: donateAmount,
            transactionNote: 'Testing Upi',
            transactionRef: 'aasf-332-aoei-fn',
          },
          successCallback,
          failureCallback,
        );
      } else {
        Snackbar.show({
          text: 'Check Email',
          textColor: '#FFF',
          backgroundColor: '#FF6666',
        });
      }
    } else {
      Snackbar.show({
        text: 'Required All Fields',
        textColor: '#FFF',
        backgroundColor: '#FF6666',
      });
    }
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

  const emailValidation = email => {
    const expression = /(?!.*\.{2})^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([\t]*\r\n)?[\t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([\t]*\r\n)?[\t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
    console.log('EMail Check', expression.test(String(email).toLowerCase()));
    return expression.test(String(email).toLowerCase());
  };

  return (
    <>
      <View style={{flex: 1, backgroundColor: 'black', marginBottom: 60}}>
        <Card style={styles.card}>
          <View style={styles.card_header}>
            <Text style={{fontSize: 20, marginLeft: 10}}>Donation Options</Text>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Icon
                name="closecircleo"
                style={{marginLeft: 90}}
                type="AntDesign"
              />
            </TouchableOpacity>
          </View>
          <ScrollView>
            <View style={styles.card_radio_body}>
              <View style={{width: 50, height: 50}}>
                <RadioButton
                  value="first"
                  status={checked === 'first' ? 'checked' : 'unchecked'}
                  onPress={() => radioAction('first', 100)}
                />
              </View>
              <View style={{width: 230}}>
                <Text style={{fontSize: 17}}>
                  Donate{' '}
                  <Icon
                    name="rupee"
                    type="FontAwesome"
                    style={{fontSize: 15}}
                  />{' '}
                  100{' '}
                </Text>
                <Text style={styles.card_radio_body_text}>
                  Help feed 10 meals
                </Text>
              </View>
              <View>
                <Image
                  source={require('../../assets/donate/icons/icon1.png')}
                  style={{width: 40, height: 40}}
                />
              </View>
            </View>
            <View style={styles.card_radio_body}>
              <View style={{width: 50, height: 50}}>
                <RadioButton
                  value="second"
                  status={checked === 'second' ? 'checked' : 'unchecked'}
                  onPress={() => radioAction('second', 500)}
                />
              </View>
              <View style={{width: 230}}>
                <Text style={{fontSize: 17}}>
                  Donate{' '}
                  <Icon
                    name="rupee"
                    type="FontAwesome"
                    style={{fontSize: 15}}
                  />{' '}
                  500{' '}
                </Text>
                <Text style={styles.card_radio_body_text}>
                  Help feed 50 meals
                </Text>
              </View>
              <View>
                <Image
                  source={require('../../assets/donate/icons/icon2.png')}
                  style={{width: 40, height: 40}}
                />
              </View>
            </View>
            <View style={styles.card_radio_body}>
              <View style={{width: 50, height: 50}}>
                <RadioButton
                  value="third"
                  status={checked === 'third' ? 'checked' : 'unchecked'}
                  onPress={() => radioAction('third', 1000)}
                />
              </View>
              <View style={{width: 230}}>
                <Text style={{fontSize: 17}}>
                  Donate{' '}
                  <Icon
                    name="rupee"
                    type="FontAwesome"
                    style={{fontSize: 15}}
                  />{' '}
                  1000{' '}
                </Text>
                <Text style={styles.card_radio_body_text}>
                  Help feed 100 meals
                </Text>
              </View>
              <View>
                <Image
                  source={require('../../assets/donate/icons/icon3.png')}
                  style={{width: 40, height: 40}}
                />
              </View>
            </View>
            <View style={{flex: 1, margin: 10, marginBottom: 30}}>
              <Text style={{fontSize: 20, marginLeft: 5}}>Your Details</Text>
              <View style={{margin: 10, marginTop: 0}}>
                {name == '' ? (
                  <Text />
                ) : (
                  <Text style={{color: '#595959'}}>Name *</Text>
                )}
                <TextInput
                  value={name}
                  placeholder="Name *"
                  style={styles.textInput}
                  onChangeText={text => setName(text)}
                />
              </View>
              <View style={{margin: 10}}>
                {email == '' ? (
                  <Text />
                ) : (
                  <Text style={{color: '#595959'}}>Email *</Text>
                )}
                <TextInput
                  value={email}
                  placeholder="Email *"
                  style={styles.textInput}
                  keyboardType="email-address"
                  onChangeText={text => setEmail(text)}
                />
              </View>
              <View style={{margin: 10}}>
                {phoneNo == '' ? <Text /> : <Text>Phone Number *</Text>}
                <TextInput
                  value={phoneNo}
                  placeholder="Phone Number *"
                  style={styles.textInput}
                  keyboardType="phone-pad"
                  maxLength={10}
                  onChangeText={text => setPhoneNo(text)}
                />
              </View>
              <View style={{margin: 10}}>
                {panCard == '' ? (
                  <Text />
                ) : (
                  <Text>PAN Card Number (optional)</Text>
                )}
                <TextInput
                  value={panCard}
                  placeholder="PAN Card Number (optional)"
                  style={styles.textInput}
                  onChangeText={text => setPanCard(text)}
                />
              </View>
              <View style={{margin: 10}}>
                {resAddress == '' ? (
                  <Text />
                ) : (
                  <Text>Residential Address (optional)</Text>
                )}
                <TextInput
                  value={resAddress}
                  placeholder="Residential Address (optional)"
                  style={styles.textInput}
                  onChangeText={text => setResAddress(text)}
                />
              </View>
            </View>
            <View style={{width: 360, backgroundColor: '#ebebe0'}}>
              <Text style={{marginBottom: 30, margin: 10, color: '#595959'}}>
                All donations are tax-exempted, if PAN details are provided, as
                eligible under section 80G of the Income Tax Act, 1961.
              </Text>
            </View>
          </ScrollView>
        </Card>
      </View>
      <View>
        <TouchableOpacity
          style={styles.donate_button}
          onPress={() => upiPaymentAction()}>
          <Text style={styles.donate_button_text}>Donate {donateAmount}</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default DonateScreenPayment;

const styles = StyleSheet.create({
  card: {
    width: 360,
    alignSelf: 'center',
    marginTop: 100,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  card_header: {
    flexDirection: 'row',
    margin: 20,
  },

  card_radio_body: {
    flexDirection: 'row',
    marginTop: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#DCDCDC',
  },
  card_radio_body_text: {
    fontSize: 15,
    color: '#595959',
    marginBottom: 10,
  },
  textInput: {
    width: 310,
    borderBottomWidth: 1,
    height: 40,
    borderBottomColor: 'grey',
  },
  donate_button: {
    marginHorizontal: 20,
    marginVertical: 10,
    backgroundColor: '#207398',
    height: 50,
    borderRadius: 10,
    marginTop: 15,
  },
  donate_button_text: {
    color: '#FFF',
    fontSize: 17,
    textAlign: 'center',
    marginTop: 10,
    fontWeight: 'bold',
  },
});

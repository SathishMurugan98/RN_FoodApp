/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {View, TouchableOpacity, Text, Image, StyleSheet} from 'react-native';
import {Card, H2, Container, Spinner} from 'native-base';
import Icon from 'react-native-vector-icons/AntDesign';

const HomeCards = props => {
  const loading = true;
  if (loading) {
    console.log('Apppp');
    <Container
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#207398',
      }}>
      <Spinner color="red" size={50} />
    </Container>;
  }
  const [seeMore, setSeeMore] = useState(false);
  const seeMoreLess = () => {
    setSeeMore(!seeMore);
  };

  return (
    <>
      <H2 style={{marginTop: 10, alignSelf: 'center'}}>
        Eat what makes you happy
      </H2>
      <View style={styles.container}>
        <Card style={styles.card}>
          <TouchableOpacity
            onPress={() => props.navObj.navigate('CardsList', {name: 'pizza'})}>
            <Image
              source={require('../assets/homecard/pizza.jpeg')}
              style={styles.image}
            />
            <Text style={{alignSelf: 'center'}}>Pizza</Text>
          </TouchableOpacity>
        </Card>
        <Card style={styles.card}>
          <TouchableOpacity
            onPress={() =>
              props.navObj.navigate('CardsList', {name: 'biryani'})
            }>
            <Image
              source={require('../assets/homecard/biryani.jpeg')}
              style={styles.image}
            />
            <Text style={{alignSelf: 'center'}}>Biryani</Text>
          </TouchableOpacity>
        </Card>
        <Card style={styles.card}>
          <TouchableOpacity
            onPress={() =>
              props.navObj.navigate('CardsList', {name: 'burger'})
            }>
            <Image
              source={require('../assets/homecard/burger.jpeg')}
              style={styles.image}
            />
            <Text style={{alignSelf: 'center'}}>Burger</Text>
          </TouchableOpacity>
        </Card>
      </View>
      <View style={styles.container}>
        <Card style={styles.card}>
          <TouchableOpacity
            onPress={() =>
              props.navObj.navigate('CardsList', {name: 'sandwich'})
            }>
            <Image
              source={require('../assets/homecard/sandwich.jpeg')}
              style={styles.image}
            />
            <Text style={{alignSelf: 'center'}}>Sandwich</Text>
          </TouchableOpacity>
        </Card>
        <Card style={styles.card}>
          <TouchableOpacity
            onPress={() =>
              props.navObj.navigate('CardsList', {name: 'Bakery'})
            }>
            <Image
              source={require('../assets/homecard/cake.jpeg')}
              style={styles.image}
            />
            <Text style={{alignSelf: 'center'}}>Cake</Text>
          </TouchableOpacity>
        </Card>
        <Card style={styles.card}>
          <TouchableOpacity
            onPress={() => props.navObj.navigate('CardsList', {name: 'kebab'})}>
            <Image
              source={require('../assets/homecard/kebab.jpeg')}
              style={styles.image}
            />
            <Text style={{alignSelf: 'center'}}>Kebab</Text>
          </TouchableOpacity>
        </Card>
      </View>
      {seeMore && (
        <View style={styles.seemore_container}>
          <Card style={styles.card}>
            <TouchableOpacity
              onPress={() =>
                props.navObj.navigate('CardsList', {name: 'chicken'})
              }>
              <Image
                source={require('../assets/homecard/chicken.jpeg')}
                style={styles.image}
              />
              <Text style={{alignSelf: 'center'}}>Chicken</Text>
            </TouchableOpacity>
          </Card>
          <Card style={styles.card}>
            <TouchableOpacity
              onPress={() => props.navObj.navigate('CardsList', {name: 'ice'})}>
              <Image
                source={require('../assets/homecard/icecream.jpeg')}
                style={styles.image}
              />
              <Text style={{alignSelf: 'center'}}>Ice Cream</Text>
            </TouchableOpacity>
          </Card>
          <Card style={styles.card}>
            <TouchableOpacity
              onPress={() =>
                props.navObj.navigate('CardsList', {name: 'noodles'})
              }>
              <Image
                source={require('../assets/homecard/noodles.jpeg')}
                style={styles.image}
              />
              <Text style={{alignSelf: 'center'}}>Noodles</Text>
            </TouchableOpacity>
          </Card>
        </View>
      )}
      <TouchableOpacity style={styles.touchOP} onPress={() => seeMoreLess()}>
        <View style={{flexDirection: 'row', alignSelf: 'center'}}>
          {!seeMore ? (
            <>
              <Text style={{color: 'black'}}>see more</Text>
              <Icon name="downcircleo" style={{margin: 7}} />
            </>
          ) : (
            <>
              <Text style={{color: 'black'}}>see less</Text>
              <Icon name="upcircleo" style={{margin: 7}} />
            </>
          )}
        </View>
      </TouchableOpacity>
    </>
  );
};

export default HomeCards;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignSelf: 'center',
  },
  card: {
    borderRadius: 20,
    width: 100,
    height: 150,
    marginLeft: 10,
  },
  image: {
    width: 90,
    height: 90,
    margin: 5,
    borderRadius: 150,
  },
  seemore_container: {
    alignSelf: 'center',
    marginBottom: 7,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  touchOP: {
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#FF6666',
    backgroundColor: '#FFF',
    width: 300,
    height: 30,
    alignSelf: 'center',
  },
});

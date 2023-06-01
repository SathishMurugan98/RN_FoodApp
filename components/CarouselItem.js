/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {
  View,
  FlatList,
  ImageBackground,
  Animated,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
} from 'react-native';
import {Card} from 'native-base';

const {width} = Dimensions.get('window');
let flatList;

function infiniteScrollView(dataList) {
  const noOfData = dataList.length;
  let scrollValue = 0,
    scrolled = 0;
  setInterval(function () {
    scrolled++;
    if (scrolled < noOfData) {
      scrollValue += width;
    } else {
      scrollValue = 0;
      scrolled = 0;
    }
    this.flatList.scrollToOffset({animated: true, offset: scrollValue});
  }, 2500);
}

const CarouselItem = () => {
  const data = [
    {
      id: '1',
      title: 'Brooks and Bonds',
      location: 'Bangalore',
      image: require('../assets/biryani/img1.webp'),
    },
    {
      id: '2',
      title: 'Gowky Goose',
      location: 'Bangalore',
      image: require('../assets/burger/img1.webp'),
    },
    {
      id: '3',
      title: 'Truffles',
      location: 'Bangalore',
      image: require('../assets/homecard/noodles.jpeg'),
    },
    {
      id: '4',
      title: 'The Reservoire',
      location: 'Bangalore',
      image: require('../assets/pizza/img2.webp'),
    },
  ];

  const scrollX = new Animated.Value(0);
  let position = Animated.divide(scrollX, width);
  const [dataList, setDataList] = useState(data);

  useEffect(() => {
    setDataList(data);
    infiniteScrollView(dataList);
  }, []);

  if (data && data.length) {
    return (
      <>
        <FlatList
          data={data}
          ref={flatList => {
            this.flatList = flatList;
          }}
          keyExtractor={(item, index) => 'key' + index}
          horizontal
          pagingEnabled
          scrollEnabled
          snapToAlignment="center"
          scrollEventThrottle={15}
          decelerationRate="fast"
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => (
            <View>
              <TouchableOpacity>
                <Card style={styles.card}>
                  <ImageBackground
                    source={item.image}
                    style={styles.imgBg_image}
                    imageStyle={styles.imgBg_image_style}
                  />
                </Card>
              </TouchableOpacity>

              <View
                style={{flexDirection: 'row', alignSelf: 'center', margin: 10}}>
                {data.map((item, i) => {
                  let opacity = position.interpolate({
                    inputRange: [i - 1, i, i + 1, i + 2],
                    outputRange: [0.5, 1, 0.5, 0.5],
                    extrapolate: 'clamp',
                  });
                  return (
                    <Animated.View
                      key={i}
                      style={[styles.animated, {opacity}]}
                    />
                  );
                })}
              </View>
            </View>
          )}
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {x: scrollX}}}],
            {useNativeDriver: false},
          )}
        />
      </>
    );
  }
};

export default CarouselItem;

const styles = StyleSheet.create({
  card: {
    margin: 15,
    borderRadius: 20,
    width: 350,
    height: 240,
    marginRight: 10,
  },
  imgBg_image: {
    width: 350,
    height: 240,
  },

  imgBg_image_style: {
    borderRadius: 20,
  },
  animated: {
    width: 10,
    height: 10,
    marginRight: 8,
    borderRadius: 15,
    backgroundColor: '#595959',
  },
});

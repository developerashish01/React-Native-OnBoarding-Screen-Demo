
import React from 'react';
import {
  StyleSheet,
  Image,
  Platform,
  View,
  Text
} from 'react-native';
import Swiper from 'react-native-swiper'

import { TouchableOpacity } from 'react-native-gesture-handler';

class App extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      gallery: [
        {
          bgcolor: '#313178',
          image: require('./image/img_2.png'),
        },
        {
          bgcolor: '#FF0069',
          image: require('./image/img_3.png'),
        }, {
          bgcolor: '#005F64',
          image: require('./image/img_4.png'),
        }
      ]
    }
  }

  render() {

    return (

      <View style={styles.container}>
        <Swiper
          containerStyle={Platform.OS === "ios" ? styles.wrapper : null}
          style={Platform.OS === "ios" ? null : styles.wrapper}
          ref={ref => this.swiper = ref}
          showsPagination={true}
          activeDotColor="white"
          paginationStyle={{ alignItems: 'flex-end' }}
          //paginationStyle={{ bottom: 0, left: 0, top: 0, right: 0 }}
          onIndexChanged={(index) => {
            console.log("Index=>" + index)
          }}
          loop={false} >
          {
            this.state.gallery.map((item, index) => {
              return (

                <View style={[styles.slider_view, {
                  backgroundColor: item.bgcolor,
                }]}>

                  <Image key={index}
                    resizeMode='contain'
                    source={item.image}
                    style={styles.sliderImage} />

                  <Text style={styles.title_text}>Lorem ipsum</Text>

                  <Text style={styles.detail_text}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</Text>

                </View>

              )
            })
          }

        </Swiper>

        <View style={styles.skip_view}>

          <TouchableOpacity>
            <Text style={styles.skip_text}>SKIP</Text>
          </TouchableOpacity>

        </View>

      </View>

    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: 'white'
  },
  skip_text: {
    fontSize: 14,
    color: '#F5f5f5',
    padding: 22,
    fontFamily: 'Gotham-Book',
  },
  skip_view: {
    flex: 1,
    height: "100%",
    position: 'absolute',
    justifyContent: 'flex-end',
    alignItems: 'flex-end'
  },
  title_text: {
    paddingTop: 16,
    fontSize: 18,
    color: '#F5f5f5',
    fontFamily: 'Gotham-Medium',
  },
  detail_text: {
    padding: 20,
    lineHeight: 20,
    color: '#F5f5f5',
    fontFamily: 'Gotham-Book',
    fontSize: 14,
    textAlign: 'center',
  },
  slider_view: {
    height: "100%",
    width: "100%",
    justifyContent: 'center',
    alignItems: 'center'
  },
  wrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    height: "100%",
    backgroundColor: 'white'
  },
  sliderImage: {
    width: 200,
    height: 200,
  },

});

export default App;

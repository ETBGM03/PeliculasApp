import React from 'react';
import {
  ActivityIndicator,
  Platform,
  StatusBar,
  useWindowDimensions,
  View,
} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import useMovies from '../hooks/useMovies';
import CardMovie from '../components/CardMovie';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {FlatList, ScrollView} from 'react-native-gesture-handler';
import HorizontalSlider from '../components/HorizontalSlider';

export const Home = () => {
  const {width: windWidth} = useWindowDimensions();
  const _insets = useSafeAreaInsets();
  const {newPlaying, popular, topRated, upcoming, isLoading} = useMovies();
  {
    isLoading && (
      <ActivityIndicator
        size="large"
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      />
    );
  }

  return (
    <View
      style={{
        paddingTop: Platform.OS === 'android' ? 10 : _insets.top,
        flexGrow: 1,
        backgroundColor: '#191c32',
        // marginTop: _insets.top,
        alignSelf: 'center',
      }}>
      <ScrollView
        style={{flex: 1, backgroundColor: '#191c32', marginVertical: 10}}
        showsVerticalScrollIndicator={false}>
        {/* <Viewnn> */}
        <View>
          <Carousel
            data={newPlaying!}
            renderItem={({item}) => <CardMovie movie={item} />}
            sliderWidth={windWidth}
            itemWidth={300}
            inactiveSlideScale={0.95}
            inactiveSlideOpacity={0.7}
            keyExtractor={item => item.id.toString()}
          />
        </View>
        <View
          style={{
            width: '100%',
            flex: 1,
            marginVertical: 10,
          }}>
          <HorizontalSlider movies={popular!} title="Populares" />
          <HorizontalSlider movies={topRated!} />
          <HorizontalSlider movies={upcoming!} />
        </View>
        {/* </Viewnn> */}
      </ScrollView>
    </View>
  );
};

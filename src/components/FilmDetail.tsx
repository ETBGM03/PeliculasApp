import {
  View,
  Image,
  useWindowDimensions,
  Text,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParams} from '../navigation/StackNavigator';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {ScrollView} from 'react-native-gesture-handler';
import Icons from 'react-native-vector-icons/Ionicons';
import {useFilmDetails} from '../hooks/useFilmDetail';
import MovieDetail from './MovieDetail';

interface Iprops extends StackScreenProps<RootStackParams, 'FilmDetail'> {}

const FilmDetail = ({route, navigation}: Iprops) => {
  // navigation.setOptions({
  //   headerShown: true,
  //   headerBackTitleVisible: false,
  //   headerTitle: route.params.title,
  // });
  const {poster_path, original_title, title, id} = route.params;
  const {height} = useWindowDimensions();
  const uri = `https://image.tmdb.org/t/p/w500${poster_path}`;
  const insets = useSafeAreaInsets();
  const {isLoading, movieFull, cast} = useFilmDetails(id);

  return (
    <ScrollView
      style={{
        flex: 1,
        marginTop: insets.top,
      }}>
      <View
        style={{
          width: '100%',
          height: height * 0.7,
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 5,
          },
          shadowOpacity: 0.36,
          shadowRadius: 6.68,
          elevation: 11,
        }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icons name="arrow-back-outline" size={30}></Icons>
        </TouchableOpacity>

        <Image
          style={{
            // marginVertical: 10,
            flex: 1,
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20,
          }}
          source={{uri}}
        />
      </View>
      <View
        style={{
          marginVertical: 15,
          marginHorizontal: 20,
        }}>
        <Text
          style={{
            fontSize: 17,
            fontWeight: '400',
          }}>
          {original_title}
        </Text>
        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
          }}>
          {title}
        </Text>
        {/* <Icons name="star-outline" size={25} color="#ffd700" /> */}
        {isLoading ? (
          <ActivityIndicator
            size={40}
            color="gray"
            style={{
              marginTop: 5,
            }}
          />
        ) : (
          //@ts-ignore
          <MovieDetail movieFull={movieFull!} cast={cast} />
        )}
      </View>
    </ScrollView>
  );
};

export default FilmDetail;

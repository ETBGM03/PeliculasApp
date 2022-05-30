import {View, Image} from 'react-native';
import React from 'react';
import {Movie} from '../interfaces/movie';
import {useNavigation} from '@react-navigation/native';
import {TouchableOpacity} from 'react-native-gesture-handler';

interface Iprops {
  movie: Movie;
  height?: number;
  width?: number;
}

const CardMovie = ({movie, height = 420, width = 300}: Iprops) => {
  const uri = `https://image.tmdb.org/t/p/w500${movie?.poster_path}`;
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      //@ts-ignore
      onPress={() => navigation.navigate('FilmDetail', movie)}
      activeOpacity={0.6}
      style={{
        width,
        height,
        alignSelf: 'center',
      }}>
      <View
        style={{
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 5,
          },
          shadowOpacity: 0.36,
          shadowRadius: 6.68,
          flex: 1,
          elevation: 11,
        }}>
        <Image
          style={{
            flex: 1,
            borderRadius: 20,
          }}
          source={{uri}}
        />
      </View>
    </TouchableOpacity>
  );
};

export default CardMovie;

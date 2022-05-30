import {View, Text} from 'react-native';
import React from 'react';
import {FilmDetails} from '../interfaces/movie';
import {Cast} from '../interfaces/credits';
import Icon from 'react-native-vector-icons/Ionicons';
import CurrencyFormatter from 'currency-formatter';
import CastItem from './CastItem';
import {FlatList} from 'react-native-gesture-handler';
interface Iprops {
  movieFull: FilmDetails;
  cast: Cast;
}

const MovieDetail = ({movieFull, cast}: Iprops) => {
  return (
    <>
      <View
        style={{
          marginTop: 10,
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            // justifyContent: 'space-between',
            backgroundColor: '#ddd',
          }}>
          <Icon name="star-outline" size={20} />
          <Text
            style={{
              marginHorizontal: 5,
            }}>
            {movieFull.vote_average}
          </Text>
          <Text>{movieFull.genres.map(el => el.name).join(', ')}</Text>
        </View>

        <Text
          style={{
            marginTop: 10,
            fontSize: 20,
            fontWeight: 'bold',
          }}>
          Historia
        </Text>
        <Text
          style={{
            fontSize: 18,
          }}>
          {movieFull.overview}
        </Text>

        <Text
          style={{
            marginTop: 10,
            fontSize: 20,
            fontWeight: 'bold',
          }}>
          Presupuesto
        </Text>
        <Text
          style={{
            fontSize: 18,
          }}>
          {CurrencyFormatter.format(movieFull.budget, {code: 'USD'})}
        </Text>
        <View
          style={{
            marginTop: 10,
          }}>
          <Text
            style={{
              marginTop: 10,
              fontSize: 20,
              fontWeight: 'bold',
            }}>
            Actores
          </Text>
          <FlatList
            //@ts-ignore
            data={cast}
            renderItem={({item}) => <CastItem actor={item} />}
            keyExtractor={item => item.id.toString()}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </View>
    </>
  );
};

export default MovieDetail;

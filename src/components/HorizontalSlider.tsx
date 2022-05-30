import {View, Text} from 'react-native';
import React from 'react';
import {Movie} from '../interfaces/movie';
import {FlatList} from 'react-native-gesture-handler';
import CardMovie from './CardMovie';

interface Iprops {
  movies: Movie[];
  title?: string;
}

const HorizontalSlider = ({title, movies}: Iprops) => {
  return (
    <View>
      {title && (
        <Text style={{color: '#fff', paddingLeft: 10, fontSize: 22}}>
          {title}
        </Text>
      )}

      <FlatList
        contentContainerStyle={{
          marginHorizontal: 10,
          marginVertical: 5,
        }}
        data={movies}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <CardMovie movie={item} height={200} width={140} />
        )}
        ItemSeparatorComponent={() => <View style={{width: 20}}></View>}
      />
    </View>
  );
};

export default HorizontalSlider;

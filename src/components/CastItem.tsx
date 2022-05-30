import {View, Text, Image} from 'react-native';
import React from 'react';
import {Cast} from '../interfaces/credits';

interface Iprops {
  actor: Cast;
}

const CastItem = ({actor}: Iprops) => {
  const uri = `https://image.tmdb.org/t/p/w500${actor.profile_path}`;
  return (
    <View
      style={{
        justifyContent: 'center',
        width: 250,
        height: 90,
        marginHorizontal: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 20,

        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
      }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <Image
          style={{
            width: 100,
            height: 100,
            borderTopLeftRadius: 20,
            borderBottomLeftRadius: 20,
          }}
          source={{uri}}
        />
        <Text
          style={{
            marginRight: 10,
            fontSize: 18,
            fontWeight: '400',
            alignSelf: 'center',
          }}>
          {actor.name}
        </Text>
      </View>
    </View>
  );
};

export default CastItem;

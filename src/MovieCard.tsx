import { View, Text, Image, StyleSheet } from 'react-native';
import React, { useState } from 'react';

interface MovieProps {
  name: string;
  image_url: string;
}

const MovieCard = ({ name, image_url }: MovieProps) => {
  // Track if the image failed to load
  const [imageError, setImageError] = useState(false);

  return (
    <View style={styles.container}>
      <Image
        // If there's an error, use the local movie.png. Otherwise, try the API URL.
        source={
          imageError ? require('../assets/movie.png') : { uri: image_url }
        }
        style={styles.poster}
        resizeMode="contain"
        // If the API image fails to load, trigger the state change
        onError={() => setImageError(true)}
      />
      <Text>{name}</Text>
    </View>
  );
};

export default MovieCard;

const styles = StyleSheet.create({
  container: {
    margin: 10,
    alignItems: 'center',
  },
  poster: {
    width: 150,
    height: 225,
    borderRadius: 8,
    marginBottom: 8,
    backgroundColor: '#e1e4e8',
  },
});

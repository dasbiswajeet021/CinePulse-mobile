import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { StaticScreenProps } from '@react-navigation/native';

export type DetailsProps = StaticScreenProps<{
  movieTitle: string;
}>;

export const MovieDetails = ({ route } : DetailsProps ) => {
  return (
    <View style={styles.container}>
      <Text>MovieDetails {route.params.movieTitle}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

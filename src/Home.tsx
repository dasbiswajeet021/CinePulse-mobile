import { FlatList, ListRenderItem, Pressable, StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from './store/Store';
import { getMovies } from './store/Actions';
import MovieCard from './MovieCard';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

const Home = () => {
  const movies = useSelector((state: RootState) => state.userReducer.movies);
  const dispatch = useDispatch();

  type RootStackParamList = {
    Home: undefined;
    MovieDetails: { movieTitle: string };
  };
  
  // Inside your Component:
  const navigator = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  

  useEffect(() => {
    console.log('🚀 Home screen mounted! Triggering getMovies...');
    dispatch(getMovies() as any);
  }, [dispatch]);

  type MovieItem = {
    id: number;
    title: string;
    posterURL: string;
    imdbId: string;
  };

  const handlePress = (item: MovieItem) => {
    console.log('Selected Item:', item);
    navigator.navigate('MovieDetails', {
      movieTitle: item.title
    });
  };

  const renderItem: ListRenderItem<MovieItem> = ({ item }) => (
    <Pressable onPress={() => handlePress(item)}>
      <MovieCard name={item.title} image_url={item.posterURL} />
    </Pressable>
  );
  return (
    <SafeAreaProvider style={styles.container}>
      <FlatList
        data={movies}
        renderItem={renderItem}
        keyExtractor={(_, index) => index.toString()}
      />
    </SafeAreaProvider>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

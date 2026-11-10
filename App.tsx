import { StyleSheet, View } from 'react-native';
import Login from './src/Login';
import Home from './src/Home';
import { createStaticNavigation, StaticParamList } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CustomHeader from './src/CustomHeader';
import { Provider, useSelector } from 'react-redux';
import { rootStore, RootState, persistentStore } from './src/store/Store';
import { PersistGate } from 'redux-persist/integration/react';
import {MovieDetails} from './src/MovieDetails';

const useIsSignedIn = () => {
  const signedIn = useSelector(
    (state: RootState) => state.userReducer.isSignedIn,
  );
  return signedIn;
};

const useIsSignedout = () => {
  const signedIn = useSelector(
    (state: RootState) => state.userReducer.isSignedIn,
  );
  return !signedIn;
};

const RootNavigator = createNativeStackNavigator({
  screens: {
    Login: {
      screen: Login,
      if: useIsSignedout,
      options: {
        headerShown: false,
        animation: 'slide_from_bottom',
      },
    }
  },
  groups: {
    AuthenticatedFlow: {
      if: useIsSignedIn,
      screenOptions: {
        header: props => <CustomHeader {...props} />,
      },
      screens: {
        Home: {
          screen: Home,
          options: {
            title: 'Dashboard',
          },
        },
        MovieDetails: {
          screen: MovieDetails,
          options: ({ route } : any) => ({
            title: (route.params as { movieTitle?: string })?.movieTitle ?? "Details"
          }),
        },
      }
    }
  }
}
);

const Navigator = createStaticNavigation(RootNavigator);

declare global {
  namespace ReactNavigation {
    interface RootParamList extends StaticParamList<typeof RootNavigator> {}
  }
}

function App() {
  return (
    <Provider store={rootStore}>
      <PersistGate persistor={persistentStore}>
        <View style={styles.container}>
          <Navigator />
        </View>
      </PersistGate>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;

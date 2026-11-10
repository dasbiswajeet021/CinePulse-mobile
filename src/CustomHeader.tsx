// CustomHeader.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NativeStackHeaderProps } from '@react-navigation/native-stack';
import { useDispatch } from 'react-redux';
import { logout } from './store/Actions';
import { useNavigation } from '@react-navigation/native';

export default function CustomHeader({ options }: NativeStackHeaderProps) {
  const dispatch = useDispatch();

  const navigation = useNavigation();
  const canGoBack = navigation.canGoBack();

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {/* Absolute Centered Title Wrapper */}
        <View style={styles.titleWrapper} pointerEvents="none">
          <Text style={styles.title}>{options.title || 'Dashboard'}</Text>
        </View>

        {/* Left Side: Conditional Back Button */}
        {canGoBack ? (
          <TouchableOpacity style={styles.button} onPress={navigation.goBack}>
            <Text style={styles.buttonText}>Back</Text>
          </TouchableOpacity>
        ) : (
          // Empty view ensures layout space, but doesn't affect the absolute title
          <View style={styles.emptyView} />
        )}

        {/* Right Side: Logout Button */}
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            dispatch(logout());
          }}
        >
          <Text style={styles.buttonText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: '#6200ee',
  },
  container: {
    height: 20,
    backgroundColor: '#6200ee',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between', // Pushes buttons to the outer edges
    paddingHorizontal: 16,
    position: 'relative', // Sets positioning context for the absolute child
  },
  titleWrapper: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
  },
  title: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  button: {
    backgroundColor: 'rgba(255,255,255,0.2)',
    padding: 8,
    borderRadius: 4,
    minWidth: 60,
    height: 35,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
  },
  emptyView: {
    width: 60,
  },
});

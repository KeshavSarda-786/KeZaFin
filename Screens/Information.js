import { StyleSheet, Text, View } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";

const Information = () => {
  const route = useRoute();
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: route.params.title,
      headerStyle: {
        backgroundColor: "#F5F5F5",
      },
    });
  }, []);
  return (
    <View>
      <Text>Information</Text>
    </View>
  );
};

export default Information;

const styles = StyleSheet.create({});

import {
  Alert,
  BackHandler,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useEffect, useLayoutEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useSelector } from "react-redux";

const ConfirmationScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  console.log(route.params);
  const cart = useSelector((state) => state.cart.cart);
  const total = cart
    .map((item) => item.price * item.quantity)
    .reduce((curr, prev) => curr + prev, 0);
  const ticketPrice = route.params.selectedSeats.length * 220;
  const fee = 87;
  const grandTotal = ticketPrice + fee + total;
  console.log(grandTotal);
  useLayoutEffect(() => {
    navigation.setOptions({
      gestureEnabled: false,
      gestureDirection: "horizontal",
    });
  }, []);
  useEffect(() => {
    const backAction = () => {
      Alert.alert(
        "Want to End Session?",
        "Go Back to the Home Screen",
        [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel",
          },
          {
            text: "OK",
            onPress: () =>
              navigation.reset({ index: 0, routes: [{ name: "HomeScreen" }] }),
          },
        ],
        { cancelable: false }
      );

      const backHandler = BackHandler.addEventListener(
        "hardwareBackPress",
        backAction
      );

      return () => backHandler.remove();
    };
  }, []);
  return (
    <View style={{ padding: 20 }}>
      <View style={{ backgroundColor: "white", padding: 10, borderRadius: 6 }}>
        <View>
          <Text style={{ fontSize: 15, fontWeight: "500" }}>
            {route.params.name}
          </Text>
          <Text style={{ marginVertical: 4, color: "gray" }}>
            U • A English
          </Text>
          <Text>{route.params.selectedDate}</Text>
        </View>

        <View
          style={{
            height: 1,
            borderColor: "#E0E0E0",
            borderWidth: 1,
            marginTop: 6,
          }}
        />

        <View style={{ marginTop: 8 }}>
          <Text style={{ fontSize: 15, fontWeight: "500" }}>
            {route.params.mall}
          </Text>
          <Text
            style={{
              fontSize: 15,
              fontWeight: "500",
              marginTop: 12,
              color: "gray",
            }}
          >
            AUDI 02 • CLASSIC
          </Text>
          <Text style={{ color: "red", marginTop: 4, fontWeight: "500" }}>
            {route.params.seats} | {route.params.showtime}
          </Text>
        </View>

        <View
          style={{
            height: 1,
            borderColor: "#E0E0E0",
            borderWidth: 1,
            marginTop: 6,
          }}
        />

        <View
          style={{
            marginTop: 10,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ fontSize: 15, fontWeight: "500" }}>
            TICKETS {route.params.selectedSeats.length}
          </Text>
          <Text style={{ fontSize: 15, fontWeight: "500" }}>
            ₹{route.params.selectedSeats.length * 220}
          </Text>
        </View>

        <View
          style={{
            marginTop: 10,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ fontSize: 15, fontWeight: "500" }}>
            FOOD & BEVERAGES
          </Text>
          <Text style={{ fontSize: 15, fontWeight: "500" }}>₹{total}</Text>
        </View>

        <View style={{ marginTop: 10 }}>
          {cart.map((item, index) => (
            <View key={index} style={{ gap: 6 }}>
              <Text style={{ color: "gray" }}>{item.name}</Text>
            </View>
          ))}
        </View>

        <View
          style={{
            marginTop: 10,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ fontSize: 15, fontWeight: "500" }}>
            CONVNIENCE FEE
          </Text>
          <Text style={{ fontSize: 15, fontWeight: "500" }}>₹87</Text>
        </View>

        <View
          style={{
            height: 1,
            borderColor: "#E0E0E0",
            borderWidth: 1,
            marginTop: 6,
          }}
        />

        <View
          style={{
            marginTop: 10,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ fontSize: 19, fontWeight: "bold" }}>TOTAL</Text>
          <Text style={{ fontSize: 30, fontWeight: "bold" }}>
            ₹{grandTotal}
          </Text>
        </View>
      </View>

      <Pressable
        style={{
          marginTop: 10,
          backgroundColor: "#800080",
          padding: 10,
          borderRadius: 5,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ fontSize: 20, fontWeight: "900" }}>
          PAY ₹{grandTotal}
        </Text>
      </Pressable>
    </View>
  );
};

export default ConfirmationScreen;

const styles = StyleSheet.create({});

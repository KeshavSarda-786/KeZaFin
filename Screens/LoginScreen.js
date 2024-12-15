import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import google from "./../assets/google1.png";
import apple from "./../assets/apple.png";

export default function LoginScreen() {
  return (
    <View>
      <Image
        style={{ width: 250, height: 500, objectFit: "contain", marginTop: 70 }}
      />
      <View
        style={{
          height: 400,
          backgroundColor: "#800080",
          width: "100%",
          marginTop: -140,
          padding: 20,
        }}
      >
        <Text
          style={{
            textAlign: "center",
            fontSize: 35,
            color: "white",
            fontWeight: "900",
          }}
        >
          TixEvE//NT
        </Text>
        <Text
          style={{
            textAlign: "center",
            fontSize: 20,
            marginTop: 20,
            color: "gray",
            fontWeight: "700",
          }}
        >
          Your Ultimate Event Ticketing App
        </Text>
        <TouchableOpacity
          style={{
            backgroundColor: "white",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: 10,
            justifyContent: "center",
            padding: 10,
            borderRadius: 99,
            marginTop: 25,
          }}
        >
          <Image source={google} style={{ width: 40, height: 40 }} />
          <Text style={{ fontSize: 20, color: "#FEBE10" }}>
            Sign In With Google
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: "white",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: 10,
            justifyContent: "center",
            padding: 10,
            borderRadius: 99,
            marginTop: 25,
          }}
        >
          <Image source={apple} style={{ width: 40, height: 40 }} />
          <Text style={{ fontSize: 20, color: "#FEBE10" }}>
            Sign In With Apple
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

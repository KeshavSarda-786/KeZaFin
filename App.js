import { StyleSheet, Text, View } from "react-native";
import Navigation from "./Navigation/StackNavigator";
import { PlaceContext } from "./PlaceContext";
import { ModalPortal } from "react-native-modals";
import { Provider } from "react-redux";
import Store from "./Store";
import LoginScreen from "./Screens/LoginScreen";

export default function App() {
  return (
    <>
      {/*<LoginScreen />*/}
      <Provider store={Store}>
        <PlaceContext>
          <Navigation />
          <ModalPortal />
        </PlaceContext>
      </Provider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
  },
});

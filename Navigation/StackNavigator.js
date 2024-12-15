import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../Screens/HomeScreen";
import ProfileScreen from "../Screens/ProfileScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from '@expo/vector-icons';
import PlacesScreen from "../Screens/PlacesScreen";
import MovieScreen from "../Screens/MovieScreen";
import TheaterScreen from "../Screens/TheaterScreen";
import FoodScreen from "../Screens/FoodScreen";
import ConfirmationScreen from "../Screens/ConfirmationScreen";
import Information from "../Screens/Information";

const ProfileStack = createNativeStackNavigator();
const HomeStack = createNativeStackNavigator();

function HomeStackScreens() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={HomeScreen} options={{title:""}} />
      <HomeStack.Screen name="Places" component={PlacesScreen} />
      <HomeStack.Screen name="Movie" component={MovieScreen} />
      <HomeStack.Screen name="Theater" component={TheaterScreen} />
      <HomeStack.Screen name="Food" component={FoodScreen} />
      <HomeStack.Screen name="Info" component={Information} />
    </HomeStack.Navigator>
  );
}

function ProfileStackScreens() {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen name="Profile" component={ProfileScreen} />
    </ProfileStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="HomeScreens"
          component={HomeStackScreens}
          options={{
            tabBarLabel: "HomeScreens",
            tabBarLabelStyle: { color: "black" },
            headerShown: false,
            tabBarIcon: ({ focused }) =>
              focused ? (
                <Entypo name="home" size={24} color="black" />
              ) : (
                <AntDesign name="home" size={24} color="black" />
              ),
          }}
        />

<Tab.Screen
          name="Profile"
          component={ProfileStackScreens}
          options={{
            tabBarLabel: "Profile",
            tabBarLabelStyle: { color: "black" },
            headerShown: false,
            tabBarIcon: ({ focused }) =>
              focused ? (
                <Ionicons name="person-circle-sharp" size={24} color="black" />
              ) : (
                <Ionicons name="person-circle-outline" size={24} color="black" />
              ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}


export default Navigation

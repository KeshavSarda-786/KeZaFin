import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Ionicons, FontAwesome } from "@expo/vector-icons";

const TheaterScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [rows, setRows] = useState([
    {
      row: "A",
      seats: [
        { seat: "1", bookingStatus: "false" },
        { seat: "2", bookingStatus: "false" },
        { seat: "3", bookingStatus: "false" },
        { seat: "4", bookingStatus: "false" },
        { seat: "5", bookingStatus: "false" },
        { seat: "6", bookingStatus: "false" },
        { seat: "7", bookingStatus: "false" },
      ],
    },
    {
      row: "B",
      seats: [
        { seat: "1", bookingStatus: "false" },
        { seat: "2", bookingStatus: "false" },
        { seat: "3", bookingStatus: "false" },
        { seat: "4", bookingStatus: "false" },
        { seat: "5", bookingStatus: "false" },
        { seat: "6", bookingStatus: "false" },
        { seat: "7", bookingStatus: "false" },
      ],
    },
    {
      row: "C",
      seats: [
        { seat: "1", bookingStatus: "false" },
        { seat: "2", bookingStatus: "false" },
        { seat: "3", bookingStatus: "false" },
        { seat: "4", bookingStatus: "false" },
        { seat: "5", bookingStatus: "false" },
        { seat: "6", bookingStatus: "false" },
        { seat: "7", bookingStatus: "false" },
      ],
    },
    {
      row: "D",
      seats: [
        { seat: "1", bookingStatus: "false" },
        { seat: "2", bookingStatus: "false" },
        { seat: "3", bookingStatus: "false" },
        { seat: "4", bookingStatus: "false" },
        { seat: "5", bookingStatus: "false" },
        { seat: "6", bookingStatus: "false" },
        { seat: "7", bookingStatus: "false" },
      ],
    },
    {
      row: "E",
      seats: [
        { seat: "1", bookingStatus: "false" },
        { seat: "2", bookingStatus: "false" },
        { seat: "3", bookingStatus: "false" },
        { seat: "4", bookingStatus: "false" },
        { seat: "5", bookingStatus: "false" },
        { seat: "6", bookingStatus: "false" },
        { seat: "7", bookingStatus: "false" },
      ],
    },
    {
      row: "F",
      seats: [
        { seat: "1", bookingStatus: "false" },
        { seat: "2", bookingStatus: "false" },
        { seat: "3", bookingStatus: "false" },
        { seat: "4", bookingStatus: "false" },
        { seat: "5", bookingStatus: "false" },
        { seat: "6", bookingStatus: "false" },
        { seat: "7", bookingStatus: "false" },
      ],
    },
  ]);

  console.log(route.params);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <Pressable
          style={{ flexDirection: "row", alignItems: "center", gap: 4 }}
        >
          <Ionicons
            onPress={() => navigation.goBack()}
            name="arrow-back-circle"
            size={24}
            color="black"
          />
          <Text>{route.params.mall}</Text>
        </Pressable>
      ),
      headerTitle: "",
      headerStyle: {
        backgroundColor: "#F5F5F5",
      },
    });
  }, []);

  const seatNumbers = selectedSeats.map((seat) => seat.row + seat.seat);

  const result = seatNumbers.join(" ");

  const renderSeats = () => {
    return route.params.rows.map((row, rowIndex) => {
      return (
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 10,
          }}
          key={rowIndex}
        >
          <View style={{ width: 30, marginRight: 10 }}>
            <Text style={{ fontSize: 16, fontWeight: "bold", marginLeft: 15 }}>
              {row.row}
            </Text>
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              {row.seats.map((seat, seatIndex) => (
                <Pressable
                  onPress={() => handleSeatPress(row.row, seat.number)}
                  style={[
                    styles.seat,
                    selectedSeats.some(
                      (selectedSeats) =>
                        selectedSeats.row === row.row &&
                        selectedSeats.seat === seat.number
                    ) && styles.selectedSeat,
                    seat.bookingStatus === "disabled" && styles.bookedSeat,
                  ]}
                  disabled={seat.bookingStatus === "disabled"}
                >
                  <Text>{seat.number}</Text>
                </Pressable>
              ))}
            </View>
          </ScrollView>
        </View>
      );
    });
  };
  const handleSeatPress = (row, seat) => {
    console.log("row", row);
    console.log("seat", seat);

    const isSelected = selectedSeats.some(
      (selectedSeats) =>
        selectedSeats.row === row && selectedSeats.seat === seat
    );

    if (isSelected) {
      setSelectedSeats((prevState) =>
        prevState.filter(
          (selectedSeats) =>
            selectedSeats.row !== row || selectedSeats.seat !== seat
        )
      );
    } else {
      setSelectedSeats((prevState) => [...prevState, { row, seat }]);
    }
  };
  console.log(selectedSeats);
  const pay = () => {
    //    const updatedRows = [...rows];
    //    selectedSeats.forEach((seat) => {
    //      const rowIndex = updatedRows.findIndex((row) => row.row === seat.row);
    //      console.log("rowIndex", rowIndex);
    //      const seatIndex = updatedRows[rowIndex].seats.findIndex(
    //        (s) => s.seat === seat.seat
    //      );
    //      console.log("seatIndex", seatIndex);
    //      updatedRows[rowIndex].seats[seatIndex].bookingStatus = "disabled";
    //    });
    //
    //    setRows(updatedRows);
    //    setSelectedSeats([]);

    navigation.navigate("Food", {
      mall: route.params.mall,
      showtime: route.params.showtime,
      name: route.params.name,
      selectedDate: route.params.selectedDate,
      seats: result,
      rows: route.params.rows,
      selectedSeats: selectedSeats,
      docId: route.params.docId,
    });
  };
  return (
    <>
      <ScrollView style={{ flex: 1, backgroundColor: "white" }}>
        <Text style={{ marginTop: 10, textAlign: "center", fontSize: 15 }}>
          SCREEN THIS WAY
        </Text>
        <Text
          style={{
            marginTop: 10,
            textAlign: "center",
            fontSize: 15,
            color: "gray",
            marginBottom: 20,
          }}
        >
          CLASSIC (240)
        </Text>

        {renderSeats()}

        <View
          style={{
            backgroundColor: "#D8D8D8",
            padding: 10,
            marginTop: 25,
            flexDirection: "row",
            alignItems: "center",
            paddingLeft: 50,
            gap: 30,
          }}
        >
          <View>
            <FontAwesome
              style={{ textAlign: "center", marginBottom: 4 }}
              name="square"
              size={24}
              color="#800080"
            />
            <Text>SELECTED</Text>
          </View>

          <View>
            <FontAwesome
              style={{ textAlign: "center", marginBottom: 4 }}
              name="square"
              size={24}
              color="white"
            />
            <Text>VACANT</Text>
          </View>

          <View>
            <FontAwesome
              style={{ textAlign: "center", marginBottom: 4 }}
              name="square"
              size={24}
              color="gray"
            />
            <Text>BOOKED</Text>
          </View>
        </View>
      </ScrollView>
      {selectedSeats.length > 0 ? (
        <Pressable
          style={{
            backgroundColor: "#800080",
            padding: 20,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ fontSize: 15, fontWeight: "500" }}>
            {selectedSeats.length} seats selected {result}
          </Text>
          <Pressable onPress={pay}>
            <Text style={{ fontSize: 15, fontWeight: "500" }}>PROCEED</Text>
          </Pressable>
        </Pressable>
      ) : (
        <Pressable style={{ backgroundColor: "#D3D3D3", padding: 20 }}>
          <Text style={{ textAlign: "center" }}>0 Seats Selected</Text>
        </Pressable>
      )}
    </>
  );
};

export default TheaterScreen;

const styles = StyleSheet.create({
  seat: {
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    margin: 5,
    backgroundColor: "white",
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#C0C0C0",
  },
  selectedSeat: {
    backgroundColor: "#800080",
    borderColor: "transparent",
  },
  bookedSeat: {
    backgroundColor: "#989898",
    borderColor: "transparent",
  },
});

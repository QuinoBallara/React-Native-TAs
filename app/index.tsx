import { FlatList, Text, View, Image, Dimensions } from "react-native";

const screenWidth = Dimensions.get("window").width;
const itemWidth = screenWidth / 2 - 40;

export default function Index() {



  const images = [
    {
      imageUrl: "https://picsum.photos/200/300",
      description: "Pedro"
    },
    {
      imageUrl: "https://picsum.photos/200/301",
      description: "Juan"
    },
    {
      imageUrl: "https://picsum.photos/200/302",
      description: "Pablo"
    },
    {
      imageUrl: "https://picsum.photos/200/303",
      description: "Maria"
    },
    {
      imageUrl: "https://picsum.photos/200/304",
      description: "Jose"
    },
  ]
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <FlatList
        data={images}
        numColumns={2}
        renderItem={({ item }) => (
          <View style={{ padding: 10, marginLeft: 10, marginBottom: 20, borderWidth: 1 }}>
            <Image source={{ uri: item.imageUrl }} style={{ width: itemWidth - 20, height: itemWidth - 20 }} />
            <Text style={{ textAlign: "center", marginTop: 5 }}>{item.description}</Text>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
}

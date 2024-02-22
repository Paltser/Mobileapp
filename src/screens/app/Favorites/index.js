import React from "react";
import { View, FlatList } from "react-native";
import { styles } from "./style";
import Header from "../../../components/Header";
import { SafeAreaView } from "react-native-safe-area-context";
import FavoriteItem from "../../../components/FavoriteItem";
import { products } from "../../../data/products";

const Favorites = ({ navigation }) => {
  const renderItem = ({ item }) => {
    const onProductPress = () => {
      navigation.navigate("ProductDetails", { product: item });
    };
    return <FavoriteItem onPress={onProductPress} {...item} />;
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Header title="Favorites" />
        <FlatList
          data={products}
          renderItem={renderItem}
          keyExtractor={(item) => String(item.id)}
        />
      </View>
    </SafeAreaView>
  );
};

export default Favorites;

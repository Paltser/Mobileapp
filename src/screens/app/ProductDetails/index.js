import React from "react";
import { Image, Text, ScrollView, View, Linking } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./style";
import Button from "../../../components/button";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
import ImageCarousel from "../../../components/ImageCarousel";

const ProductDetails = ({ navigation, route }) => {
  const { product } = route.params || {};
  console.log("product", product);

  const onBackPress = () => {
    navigation.goBack();
  };

  const onContact = () => {
    let phone = "real.phone.number";
    Linking.openURL(`tel:${phone}`);

    let email = "real email";
    Linking.openURL(`mailto:${email}`);
  };

  return (
    <SafeAreaView style={styles.save}>
      <ScrollView>
        {product?.images?.length ? (
          <ImageCarousel images={product?.images} />
        ) : (
          <Image source={{ uri: product?.image }} style={styles.image} />
        )}
        <View style={styles.content}>
          <Text style={styles.title}>{product?.title}</Text>
          <Text style={styles.price}>{product?.price}</Text>
          <Text style={styles.description}>{product?.description}</Text>
        </View>
        <Pressable style={styles.backContainer} onPress={onBackPress}>
          <Image
            style={styles.backIcon}
            source={require("../../../assets/back.png")}
          />
        </Pressable>
      </ScrollView>
      <View style={styles.footer}>
        <Pressable style={styles.bookmarkContainer}>
          <Image
            style={styles.boomarkIcon}
            source={require("../../../assets/tabs/bookmark.png")}
          />
        </Pressable>
        <Button onPress={onContact} title="Contact Seller" />
      </View>
    </SafeAreaView>
  );
};

export default React.memo(ProductDetails);

import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  Pressable,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { styles } from "./style";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../../../components/Header";

import { launchCamera, launchImageLibrary } from "react-native-image-picker";

const CreateListing = ({ navigation }) => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);

  const goBack = () => {
    navigation.goBack();
  };

  const uploadNewImage = async () => {
    setLoading(true);
    const result = await launchImageLibrary();
    console.log(result);
    if (result?.assets?.length) {
      setImages((list) => [...list, ...result?.assets]);
      setLoading(false);
    }
    console.log(images);
  };

  const onDeleteImage = (image) => {
    setImages((list) => {
      const filteredImages = list.filter(
        (img) => img?.fileName !== image?.fileName
      );
      return filteredImages;
    });
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Header
        showBack={true}
        onBackPress={goBack}
        title="Create a new listing"
      />
      <View style={styles.container}>
        <Text style={styles.sectionTitle}>Upload Photos</Text>
        <View style={styles.imageRow}>
          <TouchableOpacity
            style={styles.uploadContainer}
            onPress={uploadNewImage}
          >
            <View style={styles.uploadCircle}>
              <Text style={styles.uploadPlus}> + </Text>
            </View>
          </TouchableOpacity>

          {images?.map((image) => (
            <View key={image?.fileName} style={styles.imageContainer}>
              <Image source={{ uri: image?.uri }} style={styles.image} />
              <Pressable hitslop={20} onPress={() => onDeleteImage(image)}>
                <Image
                  source={require("../../../assets/close.png")}
                  style={styles.delete}
                />
              </Pressable>
            </View>
          ))}
          {loading ? <ActivityIndicator /> : null}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default CreateListing;

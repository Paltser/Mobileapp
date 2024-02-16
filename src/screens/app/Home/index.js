import React, { useEffect, useState } from "react";
import { View, Text, FlatList } from "react-native";
import Header from "../../../components/Header";
import { SafeAreaView } from "react-native-safe-area-context";
import { categories } from "../../../data/categories";
import CategoryBox from "../../../components/CategoryBox";
import { products } from "../../../data/products";
import ProductHomeItem from "../../../components/ProductHomeItem";

import { styles } from "./style";

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState();
  const [keyword, setKeyword] = useState();
  const [selectedProducts, setSelectedProducts] = useState(products);

  useEffect(() => {
    if (selectedCategory && !keyword) {
      const updatedSelectedProducts = products.filter(
        (product) => product?.category === selectedCategory
      );
      setSelectedProducts(updatedSelectedProducts);
    } else if (keyword && selectedCategory) {
      const updatedSelectedProducts = products.filter(
        (product) =>
          product?.category === selectedCategory &&
          product?.title?.toLowerCase().includes(keyword.toLowerCase())
      );
      setSelectedProducts(updatedSelectedProducts);
    } else if (!selectedCategory && keyword) {
      const updatedSelectedProducts = products.filter((product) =>
        product?.title?.toLowerCase().includes(keyword.toLowerCase())
      );
      setSelectedProducts(updatedSelectedProducts);
    } else if (!selectedCategory && !keyword) {
      setSelectedProducts(products);
    }
  }, [selectedCategory, keyword]);

  const renderCategoryItem = ({ item }) => {
    return (
      <CategoryBox
        onPress={() => setSelectedCategory(item?.id)}
        isSelected={item.id === selectedCategory}
        title={item?.title}
        image={item?.image}
      />
    );
  };

  const renderProductItem = ({ item }) => {
    return <ProductHomeItem {...item} />;
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Header
          showSearch={true}
          onSearchKeyword={setKeyword}
          keyword={keyword}
          title="Find All You Need"
        />
        <FlatList
          style={styles.list}
          data={categories}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={renderCategoryItem}
        />
        <FlatList
          numColumns={2}
          data={selectedProducts}
          renderItem={renderProductItem}
          keyExtractor={(item) => String(item.id)}
          ListFooterComponent={<View style={{ height: 250 }} />}
        />
      </View>
    </SafeAreaView>
  );
};

export default Home;

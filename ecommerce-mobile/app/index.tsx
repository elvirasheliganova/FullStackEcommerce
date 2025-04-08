import { FlatList, StyleSheet, Text, View } from "react-native";
import { ProductListItem } from "../components/ProductListItem";
import products from '../assets/products.json'




export default function Page() {
  return (
    
      <FlatList 
      data = {products}
      renderItem={({item}) => <ProductListItem product = {item}/>
      }
   />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
  },
});

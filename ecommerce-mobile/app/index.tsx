import { FlatList, StyleSheet, Text, View } from "react-native";
import { ProductListItem } from "../components/ProductListItem";
import products from '../assets/products.json'
import { Button, ButtonText } from "@/components/ui/button";

export default function Page() {

  return (
    <Button variant="outline">
      <ButtonText>Press me</ButtonText>
    </Button>
  )
  // return (
    
  //     <FlatList 
  //     data = {products}
  //     renderItem={({item}) => <ProductListItem product = {item}/>
  //     }
  //  />
  // );
}


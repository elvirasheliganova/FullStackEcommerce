import { FlatList, StyleSheet, Text, View } from "react-native";
import  ProductListItem  from "../components/ProductListItem";
import products from '../assets/products.json'
import { Button, ButtonText } from "@/components/ui/button";

export default function Page() {

  
   return (
    
      <FlatList 
       data = {products}
       numColumns={2}
       contentContainerClassName="gap-2"
       columnWrapperClassName="gap-2"
       renderItem={({item}) => <ProductListItem product = {item}/>
       }
    />
   );
}


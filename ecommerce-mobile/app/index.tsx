import { ActivityIndicator, FlatList} from "react-native";
import  ProductListItem  from "../components/ProductListItem";
import { Text } from "react-native";
import { useBreakpointValue } from "@/components/ui/utils/use-break-point-value";
import { listProducts } from "@/api/products";
import { useQuery } from "@tanstack/react-query";


export default function Page() {

 const { data, isLoading, error } = useQuery({
  queryKey: ['products'],
  queryFn: listProducts
 })

const numColumns = useBreakpointValue({
  default: 2,
  sm: 3,
  l: 4
})

if(isLoading) {
  return <ActivityIndicator />
}

if (error) {
  return <Text>Erroor fetching products</Text>
}
   return (
    
   <FlatList 
      key={numColumns}
       data = {data}
       numColumns = {numColumns}
       contentContainerClassName="gap-2  max-w-[960px] mx-auto w-full "
       columnWrapperClassName="gap-2"
       renderItem={({item}) => <ProductListItem product = {item}/>
       }
    />
   );
}


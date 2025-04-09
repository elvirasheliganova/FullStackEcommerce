import { FlatList} from "react-native";
import  ProductListItem  from "../components/ProductListItem";
import products from '../assets/products.json'
import { useBreakpointValue } from "@/components/ui/utils/use-break-point-value";


export default function Page() {


const numColumns = useBreakpointValue({
  default: 2,
  sm: 3,
  l: 4
})

   return (
    
   <FlatList 
      key={numColumns}
       data = {products}
       numColumns = {numColumns}
       contentContainerClassName="gap-2  max-w-[960px] mx-auto w-full "
       columnWrapperClassName="gap-2"
       renderItem={({item}) => <ProductListItem product = {item}/>
       }
    />
   );
}


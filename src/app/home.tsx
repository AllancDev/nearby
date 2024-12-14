import { View, Text, Alert } from "react-native";

import { api } from "@/services/api";
import { useEffect, useState } from "react";
import { Categories, CategoriesProps } from "@/components/categories";
import { Places } from "@/components/places";
import { PlaceProps } from "@/components/place";

type MarketsProps = PlaceProps & {

}

export default function Home() {
    const [ categories, setCategories ] = useState<CategoriesProps>([]); 
    const [ category, setCategory ] = useState("");
    const [markets, setMarket] = useState<MarketsProps[]>([]);

    async function fetchCategories() {
        try {
            const { data } = await api.get("categories");

            setCategories(data);
            
            setCategory(data[0].id);
        } catch (err) {
            console.error(err);
            Alert.alert("Categorias", "Não foi possível carregar as categorias.");
        }
    }

    async function fetchMarkets() {
        try {
            if (!category) {
                return
            }

            const { data } = await api.get(`/markets/category/${category}`)
        
        } catch (err) {
            console.error(err);
            Alert.alert("Locais", "Não foi possível carregar os locais.");
        }
    }

    useEffect(() => {
        fetchCategories();
    }, [])

    return (
        <View style={{ flex: 1 }}>
           <Categories 
                data={categories}
                selected={category}
                onSelect={setCategory}
            />

            <Places />
        </View>
    )
}
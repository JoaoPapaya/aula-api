import { useEffect, useState } from "react";
import {
    View,
    FlatList,
    ActivityIndicator,
    StyleSheet,
} from "react-native";

import { getProducts } from "../services/api";
import ProductCard from "../components/ProductCard";

export default function HomeScreen({ navigation }) {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        async function loadProducts() {

            const data = await getProducts();

            setProducts(data);

            setLoading(false);

        }

        loadProducts();

    }, []);

    if (loading) {

        return (

            <View style={styles.loading}>

                <ActivityIndicator size="large" />

            </View>

        );

    }

    return (

        <FlatList
            data={products}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (

                <ProductCard
                    product={item}
                    navigation={navigation}
                />

            )}
        />

    );

}

const styles = StyleSheet.create({

    loading: {

        flex: 1,
        justifyContent: "center",
        alignItems: "center"

    }

});
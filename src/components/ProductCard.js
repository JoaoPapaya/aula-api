import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

export default function ProductCard({ product, navigation }) {

    return (

        <TouchableOpacity
            style={styles.card}
            onPress={() =>
                navigation.navigate("Details", {
                    product: product,
                })
            }
        >

            <Image
                source={{ uri: product.image }}
                style={styles.image}
            />

            <Text style={styles.title} numberOfLines={2}>
                {product.title}
            </Text>

            <Text style={styles.price}>
                R$ {product.price}
            </Text>

        </TouchableOpacity>

    );

}

const styles = StyleSheet.create({

    card: {

        backgroundColor: "#FFF",
        margin: 10,
        padding: 15,
        borderRadius: 10,
        elevation: 3,
        alignItems: "center"

    },

    image: {

        width: 120,
        height: 120,
        resizeMode: "contain"

    },

    title: {

        marginTop: 10,
        fontWeight: "bold",
        textAlign: "center"

    },

    price: {

        marginTop: 10,
        color: "green",
        fontSize: 18

    }

});
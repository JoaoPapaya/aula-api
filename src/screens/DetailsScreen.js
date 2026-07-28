import {
    View,
    Text,
    Image,
    StyleSheet,
    ScrollView,
} from "react-native";

export default function DetailsScreen({ route }) {

    const { product } = route.params;

    return (

        <ScrollView>

            <View style={styles.container}>

                <Image
                    source={{ uri: product.image }}
                    style={styles.image}
                />

                <Text style={styles.title}>
                    {product.title}
                </Text>

                <Text style={styles.price}>
                    R$ {product.price}
                </Text>

                <Text style={styles.category}>
                    Categoria:
                </Text>

                <Text>
                    {product.category}
                </Text>

                <Text style={styles.descriptionTitle}>
                    Descrição
                </Text>

                <Text style={styles.description}>
                    {product.description}
                </Text>

            </View>

        </ScrollView>

    );

}

const styles = StyleSheet.create({

    container: {

        padding: 20

    },

    image: {

        width: 250,
        height: 250,
        resizeMode: "contain",
        alignSelf: "center"

    },

    title: {

        fontSize: 22,
        fontWeight: "bold",
        marginTop: 20

    },

    price: {

        fontSize: 24,
        color: "green",
        marginVertical: 15

    },

    category: {

        fontWeight: "bold",
        marginTop: 10

    },

    descriptionTitle: {

        marginTop: 20,
        fontWeight: "bold"

    },

    description: {

        marginTop: 10,
        textAlign: "justify"

    }

});
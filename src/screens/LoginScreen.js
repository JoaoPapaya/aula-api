import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function LoginScreen({ navigation }) {

    return (

        <View style={styles.container}>

            <Text style={styles.logo}>Loja Virtual</Text>

            <Text style={styles.subtitulo}>
                Bem-vindo!
            </Text>

            <TouchableOpacity
                style={styles.botao}
                onPress={() => navigation.navigate("Home")}
            >

                <Text style={styles.textoBotao}>
                    Fazer Login
                </Text>

            </TouchableOpacity>

        </View>

    );

}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
        backgroundColor: "#f5f5f5"
    },

    logo: {
        fontSize: 34,
        fontWeight: "bold",
        marginBottom: 20
    },

    subtitulo: {
        fontSize: 18,
        marginBottom: 50
    },

    botao: {
        backgroundColor: "#007BFF",
        padding: 15,
        width: 220,
        borderRadius: 10
    },

    textoBotao: {
        color: "#FFF",
        textAlign: "center",
        fontSize: 18,
        fontWeight: "bold"
    }

});
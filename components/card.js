import React from 'react';
import { StyleSheet, Text, View } from 'react-native';



export default function Card(props) {
    return (

        <View style={styles.mainContainer}>
            <View style={{...styles.person,backgroundColor: props.color && props.color }}>
              <Text>{props.icon}</Text>
            </View>
            <View style={styles.title}>
                <Text style={{left:12, fontWeight:'700'}}>{props.title}</Text>
                <Text style={{fontSize:9,left:10}}>{props.subtitle}</Text>
            </View>
        </View>

    )
}



const styles = StyleSheet.create({

    mainContainer: {
        backgroundColor: '#FFFFFF',
        width: 87.95,
        height: 103.47,
        borderRadius: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,

        elevation: 6,

    },
    person: {
        width: 39.18,
        height: 50.14,

        backgroundColor: '#DFEFEF',
        position: 'absolute',
        left: 20,
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    title: {
        position: 'absolute',
        top: 55,
        left:15,
        lineHeight:13.5,
        letterSpacing:0.37
    }
})
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons'


export default function Profile() {
    return (
        <View style={styles.container}>
            <View style={styles.profile}>
                <View>
                    <View style={styles.avatar}></View>
                    <View style={styles.active}></View>
                </View>
                <View style={styles.heading}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                        <View>
                            <Text style={styles.headingtxt}>Dr. Co Ekaterine  </Text>
                        </View>
                        <View>
                            <Image source={require('../assets/heart.png')} style={{ width: 20.71, height: 16.95, }} />
                        </View>
                        <View>
                            <Icon name='share-google' size={24} />
                        </View>

                    </View>
                    <View>
                        <Text style={styles.subheading}>Gynaecologist | MBBS, NBD</Text>
                    </View>
                    <View style={{flexDirection:'row'}}>
                        <View>
                        <Image source={require('../assets/place.png')} style={{top:3}} />
                        </View>
                        <View>
                        <Text style={{paddingLeft:10}}>  Location: Delhi, India </Text>
                        </View>
                        
                    </View>
                    <View style={{flexDirection:'row'}}>
                        <View>
                        <Image source={require('../assets/clock.png')} style={{top:3}} />
                        </View>
                        <View>
                        <Text style={styles.clock}>  Available Time: 9:00 am to 10:00 pm </Text>
                        </View>
                        
                    </View>
                </View>
            </View>
        </View>
    )
}








const styles = StyleSheet.create({
    container: {
        height: 180,
        justifyContent: 'center'

    },
    profile: {
        width: 333,
        height: 98,
        marginTop: 20,
        flexDirection: 'row',

    },
    avatar: {
        backgroundColor: 'white',
        width: 98,
        height: 98,
        borderRadius: 50,
        backgroundColor: '#C4C4C4',

    },
    active: {
        width: 15,
        height: 15,
        backgroundColor: '#82CB74',
        position: 'absolute',
        left: 80,
        top: 70,
        borderRadius: 50
    },
    heading: {
        justifyContent: 'center',
        paddingLeft: 20,
        width: 235
    },
    headingtxt: {
        fontWeight: '600',
        fontSize: 18,
        lineHeight: 27
    },
    subheading: {
        fontWeight: '300',
        fontSize: 12.5,
        lineHeight: 19,
        left:5
    },
    clock: {
        fontWeight: '300',
        fontSize: 10,
        lineHeight: 15,
        paddingLeft:10
    }
});

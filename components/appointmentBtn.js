import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo'
import Curren from 'react-native-vector-icons/MaterialCommunityIcons'

  export default function AppointmentBtn(props) {
      return(
          <View style={styles.container}>
            <TouchableOpacity style={styles.btn}>
              <View style={{flexDirection:'row',}}>
              <View style={styles.clanictxt}><Icon name='radio' color='#6BC2C2' /></View>
              <View>
                <View>
                <Text style={styles.textbtn}>  {props.title} <Text> Fees: $ 80.70</Text> </Text>
                </View>
                <View style={styles.fourteen}>
                <Text> <Curren name='currency-inr'/>1400</Text>
                </View>
              </View>
                </View>
              
            </TouchableOpacity>
          </View>
      )
  }



  const styles = StyleSheet.create({
       
    container:{
      backgroundColor:'#FFFFFF',
      height:47,
      width:288,
      borderRadius:6,
      borderWidth:1,
      borderColor:'#C9C9C9A8',
    },
    btn:{
      width:288,
      height:47,
      borderRadius:6,
      justifyContent:'center',
      alignItems:'center',
      flexDirection:'row'
    },
    textbtn:{
      fontSize:10.5,
      paddingLeft:10,
      lineHeight:15.75,
      fontWeight:'300',

    },
    clanictxt:{
      width:26,
       height:26,
        borderRadius:50,
        backgroundColor:'#6BC2C22E',
        justifyContent:'center',
        alignItems:'center'
    },
    fourteen:{
      fontSize:10.5,
      lineHeight:15.75,
      fontWeight:'300',
      left:135
    }
  })
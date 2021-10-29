import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import AppointmentBtn from './appointmentBtn';

  export default function About() {
      return(
        <View style={styles.container}>
            <View style={styles.headers}>
                <View>
                    <Text style={{color:'#EFA860'}}>About</Text>
                </View>
                <View style={{width:60, height:33,backgroundColor:'#F9F9F9', borderTopLeftRadius:6, borderTopRightRadius:6, justifyContent:'flex-end', alignItems:'center'}}>
                    <Text style={{color:'#EFA860'}}>Fees</Text>
                </View>
                <View>
                    <Text style={{color:'#EFA860'}}>Reviews</Text>
                </View>
            </View>
            <View style={styles.btn}>
             <AppointmentBtn title='In-Clinic Appointment ' />
             <AppointmentBtn title='Virtual Appointment '/>
             
            </View>
        </View>
      )
  }


  const styles= StyleSheet.create({
      container:{
         width:319,
         height:195,
         borderBottomLeftRadius:6,
         borderBottomRightRadius:6,
         borderTopRightRadius:6
      },
      headers:{
          flexDirection:'row',
          width:233,
          height: 33,
          justifyContent:'space-around',
          alignItems:'flex-end'
      },
      btn:{
         height:165,
         backgroundColor:'#F9F9F9',
         justifyContent:'space-around',
         alignItems:'center'
      }
  })
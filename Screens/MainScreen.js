import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Pressable } from 'react-native';
import Profile from '../components/profile';
import Card from '../components/card';
import About from '../components/about';
import User from 'react-native-vector-icons/Feather'
import Star from 'react-native-vector-icons/AntDesign'
import Badge from 'react-native-vector-icons/SimpleLineIcons'
import Curren from 'react-native-vector-icons/MaterialCommunityIcons'



export default function MainScreen() {
  return (
     <ScrollView>
    <View style={styles.container}>
     
      <View>
        <Profile />
      </View>
      <View style={styles.Card}>
        <View style={styles.titleOne} >
          <Card title='1000+' subtitle='Patients' color='#DFEFEF' icon={ <User name="users" color='#3EAEAE' size={18}/>} />
        </View>
        <View style={styles.titletwo} >
          <Card title='10 Yrs' subtitle='Experience' color="#76A0F44A" icon={ <Badge name="badge" color='#175FED' size={18} />}/>
        </View>
        <View style={styles.titlethree}>
          <Card title='4.5' subtitle='Ratings' color= "#EFA8604A"  icon={ <Star name="staro" color='#EFA860' size={18} />} />
        </View>
      </View>
      <View style={styles.slots}>
        <View style={styles.header}>
          <View>
            <Text >Available Slots</Text>

          </View>
          <View>
            <Text><Curren name='currency-inr'/>500</Text>
          </View>
        </View>
        <View style={styles.titles}>
          <View>
            <Text style={styles.today}>Today <Text style={{color:'#6BC2C2'}}>11 Slots</Text></Text>
            <View style={{ height: 1, width: 111, backgroundColor: '#6BC2C2', borderWidth: 1, borderColor:'#6BC2C2' }} ></View>
          </View>
          <View>
            <Text style={styles.tomorrow}>Tomorrow <Text style={{color:'#6BC2C2'}}>40 Slots</Text></Text>
            <View style={{ height: 1, width: 125, backgroundColor: '#C4C4C480' }} ></View>
          </View>
          <View>
            <Text style={styles.may}>10 May <Text style={{color:'#C4C4C4'}}>No Slots </Text></Text>
            <View style={{ height: 1, width: 98, backgroundColor: '#C4C4C480' }} ></View>
          </View>
        </View>
        <View style={styles.btnContainer}>
          <View>
            <TouchableOpacity style={styles.btn1}>
              <Text>11:00 AM</Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity style={styles.btn2}>
              <Text>11:30 AM</Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity style={styles.btn3}>
              <Text>12:00 AM</Text>
            </TouchableOpacity>
          </View>

        </View>
        <View style={styles.footer}>
          <Pressable onPress={()=> console.warn(123)} >
            <Text style={styles.footertxt}>View All Slots</Text>
          </Pressable>
        </View>
      </View>
      <View style={styles.footerContainer}>
          <View>
            <About/>
          </View>
      </View>

      <View style={styles.bottomBtn}>
        <View>
        <TouchableOpacity style={styles.btnlst}>
          <Text style={styles.textbtnlst}>BOOK APPOINTMENT</Text>
        </TouchableOpacity>
        </View>
      </View>
     
    </View>
    </ScrollView>
  )
}









const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 28,
    paddingRight: 24,

  },
  Card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 140,
  },
  slots: {
    width: 343,
    height: 181,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    shadowOffset: {
      width: 0,
      height: 3,
  },
  shadowOpacity: 0.27,
  shadowRadius: 4.65,

  elevation: 6,
  },
  header: {
    height: 33,
    width: 343,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  titles: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    top: 20,
    paddingLeft: 10,
    paddingRight: 10
  },
  today: {
    fontSize: 11,

  },
  tomorrow: {
    fontSize: 11
  },
  may: {
    fontSize: 11
  },
  btnContainer:{
    top:40,
    flexDirection:'row',
    justifyContent:'space-evenly',

  },
  btn1:{
    width:100,
    height:40,
    backgroundColor:'#EFA860',
    borderRadius:10,
    alignItems:'center',
    justifyContent:'center'
  },
  btn2:{
    width:100,
    height:40,
    borderColor:'#C4C4C4',
    borderWidth:1,
    borderRadius:10,
    alignItems:'center',
    justifyContent:'center'
  },
  btn3:{
    width:100,
    height:40,
    borderColor:'#C4C4C4',
    borderWidth:1,
    borderRadius:10,
    alignItems:'center',
    justifyContent:'center'
  },
  footer:{
    top:60,
    justifyContent:'center',
    alignItems:'center'
  },
  footertxt:{
    fontSize:14,
    lineHeight:14,
    color:'#6BC2C2'
  },
  footerContainer:{
    width:343,
    height:200,
    justifyContent:'center',
    alignItems:'center',
    borderBottomLeftRadius:6,
    borderBottomRightRadius:6,
    borderTopRightRadius:6
  
  },
  bottomBtn:{
    height:100,
    justifyContent:'center',
    alignItems:'center'
  },
  btnlst:{
    width:375,
    height:50,
    borderRadius:6,
    backgroundColor:'#EFA860',
    justifyContent:'center',
    alignItems:'center'
  },
  textbtnlst:{
    fontWeight:'700',
    fontSize:16,
    lineHeight:24,
    color:'#FFFFFF'
  },
 
});

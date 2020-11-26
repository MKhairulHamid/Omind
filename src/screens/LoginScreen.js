import React, {useState} from 'react'
import { 
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity
} from 'react-native'
import { moderateScale, moderateVerticalScale } from 'react-native-size-matters';
import {widthPercentageToDP, heightPercentageToDP} from 'react-native-responsive-screen';

const LoginScreen = ({ navigation, route }) => {

  const [nomorHp, setNomorHp] = useState(0)

  return (
    <View style={{flex: 1}}>
      <View style={{ height: heightPercentageToDP(60), width: widthPercentageToDP(100), backgroundColor: '#F9FCFB' }}>
        <Image
          source={require('../../assets/images/logo.png')}
          style={{
            width: moderateScale(100),
            height: moderateVerticalScale(130),
            position: 'absolute',
            top: moderateVerticalScale(150),
            left: moderateScale(135)
          }}
        />
      </View>
      <View style={{ display: 'flex', height: heightPercentageToDP(40), width: widthPercentageToDP(100), backgroundColor: '#51A65F'}}>
        <View style={{ flex: 1, marginLeft: moderateScale(20) }}>
          <Text style={{ fontSize: moderateScale(30), color: 'white', marginTop: moderateVerticalScale(20)}}>
            Selamat Datang!
          </Text>
          <Text style={{ fontSize: moderateScale(15), color: 'white'}}>
            Penyelamat Lingkungan
          </Text>
        </View>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <View 
            style={{ 
              flexDirection: 'row',
              backgroundColor: 'white',
              width: widthPercentageToDP(80),
              paddingHorizontal: moderateScale(10),
              borderRadius: 5
            }}
          >
            <Image
              source={require('../../assets/images/phone.png')}
              style={{
                width: moderateScale(30),
                height: moderateVerticalScale(40),
                marginTop: moderateVerticalScale(2)
                
              }}
            />
            <TextInput
              placeholder="Nomor Handphone"
              value={nomorHp}
              keyboardType={'phone-pad'}
            />
          </View>
        </View>
        <View 
          style={{
            flex: 1,
            justifyContent:'space-around',
            flexDirection: 'row',
            marginTop: moderateVerticalScale(20),
            paddingHorizontal: moderateScale(20)
          }}>
          <TouchableOpacity
            onPress={()=> navigation.navigate('Home')}
            style={{
              width: moderateScale(135),
              height: moderateVerticalScale(40),
              backgroundColor: 'white',
              borderRadius: 5,
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <Text>
              Daftar
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={()=> navigation.navigate('Home')}
            style={{
              width: moderateScale(135),
              height: moderateVerticalScale(40),
              backgroundColor: '#F6DB6D',
              borderRadius: 5,
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <Text>
              Masuk
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
};

export default LoginScreen
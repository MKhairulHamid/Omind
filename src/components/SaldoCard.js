import React, { useRef } from 'react'
import { Text, Button, View, ScrollView, Image, Dimensions } from 'react-native';
import { widthPercentageToDP, heightPercentageToDP } from 'react-native-responsive-screen';
import { moderateScale, moderateVerticalScale } from 'react-native-size-matters';
import { TouchableOpacity } from 'react-native-gesture-handler';


export default function SaldoCard ({ logo, namaDompet, jenis, saldo, topUpLogo, onPress}) {

    return (
        <View 
          style={{
            width: moderateScale(124),
            height: moderateScale(90),
            backgroundColor: 'white',
            elevation: 2,

          }}
        >
          <View 
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              flex: 1
            }}
          >
              <Image
                source={logo}
                style={{ 
                  width: moderateScale(35),
                  height: moderateVerticalScale(35), 
                }}
              />
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: 'row'
            }}
          >
            <View
              style={{
                flex: 3
              }}
            >
              <Text
                style={{
                  fontSize: moderateScale(11),
                  marginLeft: moderateScale(15)
                }}
              >
                {namaDompet}
              </Text>
              <Text
                style={{
                  fontSize: moderateScale(14),
                  marginLeft: moderateScale(15)
                }}
              >
                {jenis == 'rupiah'
                  ? 'Rp '
                  : null
                }
                {saldo}
                {jenis == 'poin'
                  ? ' pts'
                  : null
                }
              </Text>
            </View>
            <TouchableOpacity
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'flex-end',
                marginRight: moderateScale(3)
              }}
            >
              <Image
                source={topUpLogo}
                style={{ 
                  width: moderateScale(25),
                  height: moderateVerticalScale(25), 
                }}
              />

            </TouchableOpacity>
          </View>
        </View>
    )
} 
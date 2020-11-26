import React, { useRef } from 'react'
import { Text, Button, View, ScrollView, Image, Dimensions } from 'react-native';
import { widthPercentageToDP, heightPercentageToDP } from 'react-native-responsive-screen';
import { moderateScale, moderateVerticalScale } from 'react-native-size-matters';
import SaldoCard from '../components/SaldoCard';
import Carousel from 'react-native-snap-carousel'
import { TouchableOpacity } from 'react-native-gesture-handler';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window')

const HomeScreen = ({ navigation }) => {

    return (
      <ScrollView 
        style={{ flex: 1}}
        showsVerticalScrollIndicator={false}
      >
        <View 
          style={{
            width: widthPercentageToDP(100),
            height: heightPercentageToDP(10),
            backgroundColor: '#51A65F',
            justifyContent: 'flex-start',
            flexDirection: 'row',
            alignItems: 'center'
          }}
        >
          <View style={{ width: widthPercentageToDP(50), paddingLeft:moderateScale(30)}}>
            <Text style={{ fontSize: moderateScale(12), color: 'white'}}>
              Lokasi Anda
            </Text>
            <View style={{flexDirection: 'row', marginTop: moderateVerticalScale(3)}}>
              <Image
                source={require('../../assets/images/location.png')}
                style={{ 
                  width: moderateScale(10),
                  height: moderateVerticalScale(13),
                  marginTop: moderateVerticalScale(3),
                  marginRight: moderateScale(7)
                }}
              />
              <Text style={{ fontSize: moderateScale(15), color: 'white',}}>
                Denpasar Raya
              </Text>
            </View>
          </View>
          <TouchableOpacity style={{ justifyContent: 'center'}}>
            <Image
              source={require('../../assets/images/notif.png')}
              style={{ 
                width: moderateScale(25),
                height: moderateVerticalScale(25),
                marginLeft: moderateScale(140)
              }}
            />
          </TouchableOpacity>
        </View>

        <View
          style={{
            width: widthPercentageToDP(100),
            height: heightPercentageToDP(18)
          }}
        >
          <Image
            source={require('../../assets/images/banner.png')}
            style={{
              height: moderateVerticalScale(130),
              width: widthPercentageToDP(100)
            }}
          />
        </View>

        <View
          style={{
            height: heightPercentageToDP(13),
            width: widthPercentageToDP(100),
            flexDirection: 'row',
            justifyContent: 'space-around',
          }}
        >
          <SaldoCard
            logo={require('../../assets/images/LogoDopoint.png')}
            namaDompet="Dopoint"
            saldo="4500"
            jenis="poin"
            topUpLogo={require('../../assets/images/VoucherGreen.png')}
          />
          <SaldoCard
            logo={require('../../assets/images/LogoRopay.png')}
            namaDompet="Ropay"
            saldo="450.000"
            jenis="rupiah"
            topUpLogo={require('../../assets/images/Add.png')}
          />
          <SaldoCard
            logo={require('../../assets/images/LogoRopoint.png')}
            namaDompet="Ropoint"
            saldo="4500"
            jenis="poin"
            topUpLogo={require('../../assets/images/VoucherYellow.png')}
          />
        </View>

        <View
          style={{
            height: heightPercentageToDP(6),
            width: widthPercentageToDP(100),
            justifyContent : 'center',
            marginLeft: moderateScale(20)
          }}
        >
          <Text style={{ fontSize: moderateScale(20), color: 'black'}}>
            Mulai Aksimu
          </Text>
        </View>

        <View
          style={{
            height: heightPercentageToDP(18),
            width: widthPercentageToDP(100),
            justifyContent: 'space-around',
            alignItems: 'center',
            flexDirection: 'row',
          }}
        >
          <TouchableOpacity
          >
            <Image
              source={require('../../assets/images/Jual.png')}
              style={{
                height: moderateVerticalScale(90),
                width: widthPercentageToDP(25),
                borderRadius: 10
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity
          >
            <Image
              source={require('../../assets/images/Donasi.png')}
              style={{
                height: moderateVerticalScale(100),
                width: widthPercentageToDP(28),
                borderRadius: 10
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity
          >
            <Image
              source={require('../../assets/images/Lelang.png')}
              style={{
                height: moderateVerticalScale(90),
                width: widthPercentageToDP(25),
                borderRadius: 10
              }}
            />
          </TouchableOpacity>
        </View>

        <View
          style={{
            height: heightPercentageToDP(4),
            width: widthPercentageToDP(100),
            justifyContent : 'center',
            marginLeft: moderateScale(20)
          }}
        >
          <Text style={{ fontSize: moderateScale(20), color: 'black'}}>
            Penjualanmu
          </Text>
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{
            height: heightPercentageToDP(23),
            width: widthPercentageToDP(100),
            paddingVertical: moderateVerticalScale(20)
          }}
        >
          <TouchableOpacity
          >
            <Image
              source={require('../../assets/images/BannerPenjualan.png')}
              style={{
                height: moderateVerticalScale(120),
                width: widthPercentageToDP(90),
                borderRadius: 10,
                marginHorizontal: moderateScale(10)
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity
          >
            <Image
              source={require('../../assets/images/BannerPenjualan.png')}
              style={{
                height: moderateVerticalScale(120),
                width: widthPercentageToDP(90),
                borderRadius: 10,
                marginHorizontal: moderateScale(10)
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity
          >
            <Image
              source={require('../../assets/images/BannerPenjualan.png')}
              style={{
                height: moderateVerticalScale(120),
                width: widthPercentageToDP(90),
                borderRadius: 10,
                marginHorizontal: moderateScale(10)
              }}
            />
          </TouchableOpacity>
        </ScrollView>

        <View
          style={{
            height: heightPercentageToDP(8),
            width: widthPercentageToDP(100),
            justifyContent: 'space-around',
            alignItems: 'center',
            flexDirection: 'row',
            marginTop: moderateVerticalScale(-15),
            backgroundColor: 'white'
          }}
        >
          <TouchableOpacity
          >
            <Image
              source={require('../../assets/images/Beranda.png')}
              style={{
                height: moderateVerticalScale(50),
                width: widthPercentageToDP(15),
                borderRadius: 10
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity
          >
            <Image
              source={require('../../assets/images/Pesan.png')}
              style={{
                height: moderateVerticalScale(50),
                width: widthPercentageToDP(15),
                borderRadius: 10
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity
          >
            <Image
              source={require('../../assets/images/Transaksi.png')}
              style={{
                height: moderateVerticalScale(50),
                width: widthPercentageToDP(15),
                borderRadius: 10
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity
          >
            <Image
              source={require('../../assets/images/Profil.png')}
              style={{
                height: moderateVerticalScale(50),
                width: widthPercentageToDP(15),
                borderRadius: 10
              }}
            />
          </TouchableOpacity>
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{
            height: heightPercentageToDP(23),
            width: widthPercentageToDP(100),
            paddingVertical: moderateVerticalScale(10),
            backgroundColor: 'white',
            marginLeft: moderateScale(10)
          }}
        >
          <TouchableOpacity
          >
            <Image
              source={require('../../assets/images/Kertas.png')}
              style={{
                height: moderateVerticalScale(120),
                width: widthPercentageToDP(25),
                borderRadius: 10,
                marginHorizontal: moderateScale(3)
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity
          >
            <Image
              source={require('../../assets/images/Plastik.png')}
              style={{
                height: moderateVerticalScale(120),
                width: widthPercentageToDP(25),
                borderRadius: 10,
                marginHorizontal: moderateScale(3)
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity
          >
            <Image
              source={require('../../assets/images/Kaca.png')}
              style={{
                height: moderateVerticalScale(120),
                width: widthPercentageToDP(25),
                borderRadius: 10,
                marginHorizontal: moderateScale(3)
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity
          >
            <Image
              source={require('../../assets/images/Kertas.png')}
              style={{
                height: moderateVerticalScale(120),
                width: widthPercentageToDP(25),
                borderRadius: 10,
                marginHorizontal: moderateScale(3)
              }}
            />
          </TouchableOpacity>
        </ScrollView>
        
        <TouchableOpacity
          style={{
            width: widthPercentageToDP(100),
            height: heightPercentageToDP(13),
            alignItems: 'center',
            marginTop: moderateVerticalScale(-20)
          }}
        >
          <Image
            source={require('../../assets/images/BannerGojek.png')}
            style={{
              height: moderateVerticalScale(90),
              width: widthPercentageToDP(95),
              borderRadius: 10
            }}
          />
        </TouchableOpacity>

        <View
          style={{
            height: heightPercentageToDP(4),
            width: widthPercentageToDP(100),
            justifyContent : 'space-between',
            flexDirection: 'row',
            paddingHorizontal: moderateScale(13),
            marginVertical: moderateVerticalScale(15),
            
          }}
        >
          <Text style={{ fontSize: moderateScale(20), color: 'black'}}>
            Peringkat Pendonasi
          </Text>
          <Text style={{ fontSize: moderateScale(16), color: 'green', marginTop: 5}}>
            Lihat semua
          </Text>
        </View>

        <View
          style={{
            height: heightPercentageToDP(27),
            width: widthPercentageToDP(100),
            justifyContent: 'space-around',
            alignItems: 'center',
            marginTop: moderateVerticalScale(-5),
            backgroundColor: 'white'
          }}
        >
          <TouchableOpacity
          >
            <Image
              source={require('../../assets/images/Ismaya.png')}
              style={{
                height: moderateVerticalScale(40),
                width: widthPercentageToDP(95),
                borderRadius: 10
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity
          >
            <Image
              source={require('../../assets/images/Kumar.png')}
              style={{
                height: moderateVerticalScale(38),
                width: widthPercentageToDP(95),
                borderRadius: 10
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity
          >
            <Image
              source={require('../../assets/images/Angelinda.png')}
              style={{
                height: moderateVerticalScale(38),
                width: widthPercentageToDP(95),
                borderRadius: 10
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity
          >
            <Image
              source={require('../../assets/images/Indra.png')}
              style={{
                height: moderateVerticalScale(42),
                width: widthPercentageToDP(95),
                borderRadius: 10
              }}
            />
          </TouchableOpacity>
        </View>

        <View
          style={{
            height: heightPercentageToDP(4),
            width: widthPercentageToDP(100),
            justifyContent : 'space-between',
            flexDirection: 'row',
            paddingHorizontal: moderateScale(13),
            marginVertical: moderateVerticalScale(15),
            
          }}
        >
          <Text style={{ fontSize: moderateScale(20), color: 'black'}}>
            Reward Saya
          </Text>
          <Text style={{ fontSize: moderateScale(16), color: 'green', marginTop: 5}}>
            Lihat semua
          </Text>
        </View>

        <View
          style={{
            height: heightPercentageToDP(40),
            width: widthPercentageToDP(100),
            justifyContent: 'space-around',
            alignItems: 'center',
            marginTop: moderateVerticalScale(-5),
          }}
        >
          <TouchableOpacity
          >
            <Image
              source={require('../../assets/images/TravelVoucher.png')}
              style={{
                height: moderateVerticalScale(110),
                width: widthPercentageToDP(95),
                borderRadius: 10
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity
          >
            <Image
              source={require('../../assets/images/TravelVoucher.png')}
              style={{
                height: moderateVerticalScale(110),
                width: widthPercentageToDP(95),
                borderRadius: 10
              }}
            />
          </TouchableOpacity>
        </View>

      </ScrollView>
    );
  };

export default HomeScreen
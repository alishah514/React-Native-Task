import {Platform, StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {Colors} from '../constants/Colors';

const circleSize = wp('25%'); // Adjust the circle size as needed

const CommonStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerCenter: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headingTitle: {
    fontWeight: '500',
    color: Colors.blackColor,
    fontSize: wp('10%'),
  },
  buttonText5: {
    fontWeight: '500',
    color: Colors.whiteColor,
    fontSize: wp('5%'),
  },
  paddingTop20: {paddingTop: wp('20%')},
  marginTop10: {marginTop: wp('10%')},
  marginTop7: {marginTop: wp('7%')},
  marginTop5: {marginTop: wp('5%')},
  inputField: {
    borderBottomWidth: 1,
    borderColor: Colors.blackColor,
    width: wp('80%'),
    fontSize: wp('4.5%'),
  },
  inputFieldHeading: {
    color: Colors.blackColor,
    fontWeight: '400',
    fontSize: wp('4%'),
    paddingBottom: wp('1%'),
  },
});

export default CommonStyles;

import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const mainStyle = StyleSheet.create({
  titleText: {
    // fontSize: 'md',
    fontFamily: 'NeoSansMediumTR',
    // padding: hp(1),
    color: '#25282B',
  },
  subTitle: {
    fontSize: wp('5%'),
    fontFamily: 'Roboto-Regular',
    padding: 5,
    color: '#25282B',
  },
  heading: {
    fontSize: wp(5),
    fontFamily: 'NeoSansMediumTR',
    padding: 5,
    color: '#25282B',
  },
  headingNormal: {
    fontSize: wp(5),
    fontFamily: 'NeoSansTR',
    padding: 5,
    color: '#25282B',
  },
  descriptionText: {
    fontSize: wp(3.5),
    padding: 5,
    fontFamily: 'Roboto-Regular',
    color: '#52575C',
  },
  itemText: {
    fontSize: wp(4),
    padding: 5,
    fontFamily: 'Roboto-Regular',
    color: '#25282B',
    fontWeight: 'bold',
  },
  priceTextBold: {
    fontSize: wp(3.5),
    padding: 5,
    fontFamily: 'Roboto-Regular',
    color: '#25282B',
    fontWeight: 'bold',
  },
  priceText: {
    fontSize: wp(3),
    padding: 5,
    fontFamily: 'Roboto-Regular',
    color: '#52575C',
    textDecorationLine: 'line-through',
  },
  descriptionTextGreen: {
    fontSize: 14,
    padding: 5,
    fontFamily: 'Roboto-Regular',
    color: '#29C272',
  },
  flexOneContainer: {
    flex: 1,
  },
  backgroundGreen: {
    backgroundColor: '#29C272',
  },
  backgroundWhite: {
    backgroundColor: 'white',
  },
  textAlignCenter: {
    textAlign: 'center',
  },
  errorText: {
    color: '#CF212A',
    fontFamily: 'Roboto-Regular',
    fontSize: 14,
    padding: 1,
  },
  dragLine: {
    borderBottomColor: '#c3cdd6',
    borderBottomWidth: 3,
    borderRadius: 10,
    width: 100,
    marginTop: 10,
    elevation: 0.2,
  },
  divider: {
    borderColor: '#E8E8E8',
    borderBottomWidth: 1.5,
    width: '100%',
    marginTop: 10,
    //elevation: 1
  },
  iconImg: {
    height: wp(13),
    width: wp(13),
    borderRadius: 40,
    borderWidth: 0,
    justifyContent: 'center',
    backgroundColor: '#2DBB54',
    elevation: 5,
  },
  icon: {
    height: wp(12),
    width: wp(12),
    alignSelf: 'center',
  },
  contentContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignSelf: 'stretch',
  },
  subHeading: {
    fontSize: wp(4),
    padding: 5,
    fontFamily: 'Roboto-Regular',
    color: '#25282B',
  },
  headingWhite: {
    fontSize: wp(5),
    fontFamily: 'NeoSansMediumTR',
    padding: 5,
    color: 'white',
  },
  bottomTabText: {
    fontSize: wp(4),
    fontFamily: 'NeoSansTR',
  },
  blogDescriptionText: {
    fontSize: wp(3.7),
    paddingLeft: 5,
    fontFamily: 'Roboto-Regular',
    color: '#52575C',
  },
  flag: {},
  flagTop: {
    width: 14,
    height: 22,
    backgroundColor: 'red',
  },
  flagBottom: {
    width: 0,
    height: 0,
    borderBottomWidth: 10,
    borderBottomColor: 'transparent',
    borderLeftWidth: 7,
    borderLeftColor: '#F9DA73',
    borderRightWidth: 7,
    borderRightColor: '#F9DA73',
  },
});

export default mainStyle;

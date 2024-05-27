import {StyleSheet} from 'react-native';
import {Colors} from '../../constants/Colors';

const styles = StyleSheet.create({
  container: {flex: 1},

  textInput: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: Colors.placeholderColorDark,
  },
  padding20: {padding: 20},
  padding10: {padding: 10},
  fontBold: {fontWeight: 'bold'},
});
export default styles;

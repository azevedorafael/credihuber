import { StyleSheet } from 'react-native';
import { colors, metrics } from '~/styles';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    borderRadius: metrics.borderRadius,
    borderWidth: 0.5,
    flexDirection: 'row',
    padding: metrics.basePadding,
    marginHorizontal: metrics.baseMargin * 2,
    marginTop: metrics.baseMargin,
  },

  title: {
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default styles;

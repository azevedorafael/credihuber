import { StyleSheet } from 'react-native';
import { colors, metrics } from '~/styles';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    borderWidth: 0.5,
    borderRadius: metrics.borderRadius,
    padding: metrics.basePadding,
    marginHorizontal: metrics.baseMargin * 2,
    marginTop: metrics.baseMargin,
  },

  title: {
    fontSize: 14,
    fontWeight: 'bold',
    marginHorizontal: metrics.baseMargin * 2,
    marginTop: metrics.baseMargin * 4,
  },

  mainContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },

  infoContainer: {
    flexDirection: 'row',
    marginTop: metrics.baseMargin,
  },

  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: metrics.baseMargin,
  },

  info: {
    flexDirection: 'column',
    marginRight: metrics.baseMargin,
    alignItems: 'center',
    justifyContent: 'center',
  },

  infoIcon: {
    color: colors.dark,
  },

  infoText: {
    color: colors.dark,
    fontSize: 12,
    marginLeft: metrics.baseMargin / 2,
  },

  button: {
    backgroundColor: colors.primary,
    borderRadius: metrics.baseRadius,
    width: 80,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;

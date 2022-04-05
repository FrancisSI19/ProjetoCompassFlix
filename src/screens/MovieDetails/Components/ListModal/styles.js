import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  container: {
    width: '100%',
    borderTopStartRadius: 15,
    borderTopEndRadius: 15,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderColor: '#BEBEBE',
  },
  headerTitle: {
    fontSize: 13,
    fontFamily: 'OpenSans-Bold',
    color: '#000',
  },
  content: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  noListText: {
    alignSelf: 'center',
    marginTop: 10,
    fontFamily: 'OpenSans-SemiBold',
    fontSize: 12,
    color: '#EC2626',
  },
  list: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  radio: {
    borderWidth: 2,
    borderRadius: 20,
    borderColor: '#000',
  },
  radioFill: {
    backgroundColor: '#000',
    borderRadius: 20,
  },
  listTitle: {
    marginLeft: 10,
    textTransform: 'uppercase',
    fontWeight: '400',
    fontSize: 12,
    color: '#000',
  },
  btnSave: {
    alignSelf: 'center',
    marginVertical: 20,
    paddingHorizontal: 24,
    paddingVertical: 4,
    borderRadius: 5,
  },
  txtSave: {
    textTransform: 'uppercase',
    fontFamily: 'OpenSans-Bold',
    fontSize: 10,
  }
});

export default styles;

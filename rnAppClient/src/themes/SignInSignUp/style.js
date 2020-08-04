import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingTop: 100,
        backgroundColor:'#2c3e50'
    },
    input: {
        backgroundColor: 'white',
        width: '90%',
        paddingVertical: 15,
        borderRadius: 30,
        fontSize: 22,
        textAlign: 'center',
        marginBottom: 20,
        paddingHorizontal: 20,
        color: '#676767',
        letterSpacing: 1.5
    },
    warpperResendAndChange:{
        flexDirection:'row',
        width:'90%',
        justifyContent:'space-between',
        marginTop:20,
    },
    txtResendAndChange:{
        color:'white',
        fontWeight:'bold',
        fontSize:15
    },
    txtRegis:{
        marginTop:20,
        color:'white',
        fontWeight:'bold',
        fontSize:18
    
    },
});
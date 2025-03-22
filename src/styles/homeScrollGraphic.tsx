import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    containerAll:{
        flex: 1,
        backgroundColor: '#fff',
    },
    containerUser: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#fff',
    },
    containerUserImg:{
        width: 50,
        height: 50,
        borderRadius: 25,
        marginLeft: 15,
        borderWidth: 1

    },
    containerUserName: {
        flex: 1,
        justifyContent:'center',
        alignItems: 'flex-start',
    },
    textUserWelcome:{
        marginLeft: 10,
        fontSize: 15
    },
    textUserDay: {
        marginLeft: 10,
        fontSize: 18,
        fontWeight: 'bold'
    },
    containerUserCalendar: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 15, 
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1
    },
    containerInformation: {
        marginTop: 20,
        flexDirection: 'row',
        height: 250
    },
    containerColunm: {
        flexDirection: 'column',
        flex: 1
    },
    containerCalories: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#fff',
        borderWidth: 2,
        borderColor: '#f0f0f0',
        borderRadius: 20,
        marginLeft: 15,
        marginTop: 5,
        elevation: 10,
        padding: 15
    },
    containerIconTextKcal: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    containerTextCalories:{
        fontWeight: 'bold',
        fontSize: 15,
        marginBottom: 10
    },
    containerNumCalories:{
        fontWeight: 'bold',
        fontSize: 20,
        marginLeft: -4
    },
    containerTextKcal:{
        fontSize: 14,
        opacity: 0.6
    },
    containerSteps: {
        flex: 1,
        backgroundColor: '#fff',
        borderWidth: 2,
        borderColor: '#f0f0f0',
        borderRadius: 20,
        marginLeft: 15,
        marginTop: 15,
        elevation: 10,
        padding: 15
    },
    containerIconTextSteps: {
        justifyContent: 'space-between',
        flexDirection:  'row'

    },
    containerHeart: {
        flex: 1,
        backgroundColor: '#fff',
        borderWidth: 2,
        borderColor: '#f0f0f0',
        borderRadius: 20,
        marginLeft: 15,
        marginRight: 15,
        elevation: 10,
    },
    containerHeartText:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 20,
        marginRight:20,
        marginTop: 15
    },
    containerBottom: {
        flex: 1,
        borderWidth: 2,
        backgroundColor: '#fff',
        borderColor: '#f0f0f0',
        borderRadius: 20,
        margin: 15,
        elevation: 10,
        alignItems: 'center'
    },
    heartText: {
        fontWeight: 'bold',
        fontSize: 15
    }
})

export default styles;
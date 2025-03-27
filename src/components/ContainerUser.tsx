import React from "react";
import { View, Image, StyleSheet,Text } from "react-native";
import CalendarButton from "./CalendarButton";

type CurrentDate = {
    currentDate: string
}

const ContainerUser: React.FC<CurrentDate> = ({currentDate}) => {
    return (
        <View style={styles.containerUser}>
                <View style={styles.containerUserImg}>
                <Image
                />
                </View>
                <View style={styles.containerUserName}>
                <Text style={styles.textUserWelcome}> Hello, Linh!</Text>
                <Text style={styles.textUserDay}> {currentDate}</Text>
                </View>
                <View style={styles.containerUserCalendar}>
                    <CalendarButton 
                        color='black'
                    />
                </View>
            </View>
    )
} 

export default ContainerUser;

const styles = StyleSheet.create({
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
})
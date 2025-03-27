import { formatDate } from "date-fns";
import React, { useEffect, useState } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import CalendarButton from "src/components/CalendarButton";
import ContainerUser from "src/components/ContainerUser";

const HomeScroll2: React.FC = () => {
    const [currentDate, setCurrentDate] = useState<string>("")

    useEffect(() => {
        const date = formatDate(Date.now(), "dd/MM");
        setCurrentDate(date)
    }, [])
    return (
        <View style={styles.containerAll}>
            <ContainerUser 
                currentDate={currentDate}/>
        </View>
    )
} 

const styles = StyleSheet.create({
    containerAll:{
        flex: 1,
        backgroundColor: '#fff',
    }
})
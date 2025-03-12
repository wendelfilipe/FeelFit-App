import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Dimensions, Image } from 'react-native';
import CalendarButton from 'src/components/CalendarButton';
import LineChart from 'src/components/LineChart';
import styles from 'src/styles/homeScrollGraphic';

const HeartRateCard = () => {
  const data = [70, 75, 73, 78, 72, 74, 71]; // Simulação de batimentos cardíacos
  const screenWidth = Dimensions.get('window').width;

  const [currentDate, setCurrentDate] = useState<string | null>(null);
 
     useEffect(() => {
         const currentDate = new Date();
         const formatDate = format(currentDate, 'EEEE , dd MMMM')
 
         setCurrentDate(formatDate)
     }, []);

  return (
    <View style={styles.containerAll}>
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
      <View style={styles.containerInformation}>
          <View style={styles.containerColunm}>
            <View style={styles.containerCalories}>
              <Text> Calories </Text>
              <Text> 620.68 </Text>
              <Text> Kcal </Text>
            </View>
            <View style={styles.containerSteps}>
              <Text> Calories </Text>
              <Text> 620.68 </Text>
              <Text> Kcal </Text>
            </View>
          </View>
          <View style={styles.containerHeart}>
            <LineChart/>
          </View>
      </View>
    </View>
)
}

export default HeartRateCard;

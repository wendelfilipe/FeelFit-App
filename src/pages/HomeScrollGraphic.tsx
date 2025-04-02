import { FontAwesome, FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';
import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Dimensions, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Svg, { Defs, LinearGradient, Rect, Stop } from 'react-native-svg';
import Icon from 'react-native-vector-icons/FontAwesome';
import CalendarButton from 'src/components/CalendarButton';
import { Chart } from 'src/components/Chart';
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
              <View style={styles.containerIconTextKcal}> 
                <Text style={styles.containerTextCalories}>Calories</Text>
                <FontAwesome name='fire' size={20} color='red'/>
              </View>
              <Text style={styles.containerNumCalories}> 620.68 </Text>
              <Text style={styles.containerTextKcal}> Kcal </Text>
            </View>
            <View style={styles.containerSteps}>
              <View style={styles.containerIconTextSteps}>
                <Text style={styles.containerTextCalories}> Steps </Text>
                <MaterialCommunityIcons name='shoe-sneaker' size={25} color='red' />
              </View>
              <Text style={styles.containerNumCalories}> 620.68 </Text>
              <Text style={styles.containerTextKcal}> Kcal </Text>
            </View>
          </View>
          <View style={styles.containerHeart}>
            <View style={styles.containerHeartText}>
              <Text style={styles.heartText}>Heart</Text>
              <FontAwesome name='heart' size={20} color='red'/>
            </View>
            <Chart/>
          </View>
      </View>
      <TouchableOpacity>
        <View style={styles.containerBottom}>
          <View style={styles.containerBottomRow}>
            <View style={styles.containerBottomInvite}>
              <Svg height="100%" width="100%">
                <Defs>
                  <LinearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1">
                    <Stop offset="0" stopColor="#ff3b1f" stopOpacity="0.9" />
                    <Stop offset="1" stopColor="#ff3b1f" stopOpacity="0.1" />
                  </LinearGradient>
                </Defs>
          
                {/* Retângulo com gradiente e borda */}
                <Rect
                  width="100%"
                  height="100%"
                  fill="url(#areaGradient)" 
                  stroke="#ff3b1f" 
                  rx="20"            
                  ry="20"            
                />
              </Svg>
            </View>
            <View style={styles.containerBottomInviteText}>
              <Text> Invite for friends </Text>
              <Text> use this button </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </View>
)
}

export default HeartRateCard;

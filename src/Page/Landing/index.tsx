import React, { useEffect, useState } from 'react';
import { View, Image, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler'

import api from '../../server/api';


import lanImg from '../../assets/images/landing.png';
import studyIcon from '../../assets/images/icons/study.png'
import giveClassIcon from '../../assets/images/icons/give-classes.png'
import heartIcon from '../../assets/images/icons/heart.png'

import styles from './styles';


function Landing() {

    const [totalConnections, setTotalConnection] = useState(0); 

    useEffect(()=>{ 
        api.get('connections').then(response=>{
            const {total} = response.data;

            setTotalConnection(total)
        })
     }, [] )


    //
    const navigation = useNavigation(); //ou  const { navigate } = useNavigation();... dai //navigate('GiveClasses') ou

    function handleNavigateGiveClassesPage(){
        navigation.navigate('GiveClasses')
    }
  


    function handleNavigateStudyPage() {
            navigation.navigate('Study')
    }
  //
    return (
    <View style = {styles.container} >
        <Image source={lanImg} style= {styles.banner} />
        <Text style={styles.title} >
            Seja bem-vindo, {'\n'}
            <Text style={styles.titleBold} >o que deseja fazer?</Text>
        </Text>

{/* button Study */}
        <View style={styles.buttonsContainer} >
        <RectButton onPress={handleNavigateStudyPage} style={ [styles.button, styles.buttonPrimary] } >
            <Image source= {studyIcon} />
            <Text style= {styles.buttonText} >Estudar</Text>
        </RectButton>       
{/* button give classes */}
        <RectButton onPress ={handleNavigateGiveClassesPage} style={ [styles.button, styles.buttonSecondary] } >
            <Image source= {giveClassIcon} />
            <Text style= {styles.buttonText} >Dar Aula</Text>
        </RectButton>
        </View>
        
{/* total connections */}
        <View style={styles.containerConnec} > 
        <Text style={styles.totalConnections} >
            Total de {totalConnections} Conexões já realizadas!{'  '}
            <Image source={heartIcon} />
        </Text>
        </View>
    </View>
    
    )
}

export default Landing;
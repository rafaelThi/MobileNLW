import React, { useState } from "react";
import { View, Text, TextInput } from 'react-native';

import PageHeader from "../../Components/pageHeader";
import TeacherItem, { Teacher } from "../../Components/TeacherItem";
import { ScrollView, BorderlessButton, RectButton } from "react-native-gesture-handler";

import AsyncStorage from '@react-native-community/async-storage'

import api from "../../server/api";

import { Feather } from '@expo/vector-icons';

import styles from './styles'



function TeacherList() {
    const [isFilterVisible, setIsFiltersVisible] = useState(false)

    const [teachers, setTeachers] = useState([])//aula 3

    const [favorites, setFavorites] = useState<number[]>([])

    const [subject, setSubject] = useState('')
    const [weekday, setWeekday] = useState('')
    const [time, setTime] = useState('')

     function loadFavorites() {
        AsyncStorage.getItem('favorites').then(response=>{
            if (response){
                const favoritedTeachers = JSON.parse(response)
                const favoritedTeachersIds = favoritedTeachers.map((teacher:Teacher) =>{
                    return teacher.id;
                })
                setFavorites(favoritedTeachersIds);
            }
        });
    }

   async function handleFiltersSubmit(){
    loadFavorites();

        const response = await api.get('classes', {
            params:{
                subject,
                weekday, 
                time,
            }
        }) 
        setIsFiltersVisible(false);

        setTeachers(response.data);
    }
   
    function handleFiltersVisible(){
        setIsFiltersVisible(!isFilterVisible);
    }

    return(
        <View style={styles.container} >
            <PageHeader  
            title='Proffys disponíveis' 
            headerRight={(
                <BorderlessButton onPress={handleFiltersVisible}>
                    <Feather name='filter' size={20} color='#fff'/>
                </BorderlessButton>
            )} >
                { isFilterVisible && 
                        (    
                            <View style={styles.searchForm}>


                                <Text style={styles.label} >Matéria</Text>
                                    <TextInput
                                     value = {subject}
                                     onChangeText={text => setSubject(text) }
                                    placeholderTextColor='#c1bccc'
                                    style={styles.input}
                                    placeholder="Qual a matéria?"
                                    />
                                        <View style={styles.inputGroup}>
                                            <View style={styles.inputBlock} >
                                                <Text style={styles.label} >Dia da Semana</Text>
                                                    <TextInput
                                                    style ={styles.input}
                                                    value = {weekday}
                                                    onChangeText={text => setWeekday(text) }
                                                    placeholderTextColor='#c1bccc'
                                                    placeholder="Qual o dia?"
                                                    />
                                            </View>

                                            <View style={styles.inputBlock} >
                                                <Text style={styles.label} >Horário</Text>
                                                    <TextInput
                                                     value = {time}
                                                     onChangeText={text => setTime(text) }
                                                    placeholderTextColor='#c1bccc'
                                                    style={styles.input}
                                                    placeholder="Qual a horário?"
                                                    />
                                            </View>
                                        </View>
                                <RectButton 
                                    onPress={handleFiltersSubmit}
                                    style={styles.submitButton}
                                >
                                        <Text style={styles.TextSubmitButton}>Filtrar</Text>
                                </RectButton>
                            </View>
                        )
                }       
            </PageHeader>

        <ScrollView style={styles.teacherList} 
        contentContainerStyle={{
            paddingHorizontal:16,
            paddingBottom:16
        }}>
            {teachers.map((teacher: Teacher)=>{
                       return(
                      
                            <TeacherItem 
                                key={teacher.id} 
                                teacher={teacher} 
                                favorited={favorites.includes(teacher.id)}
                            />
                            
                        )
                   }
                )
            }
               
        </ScrollView>

            
        </View>
    )
    
}

export default TeacherList;
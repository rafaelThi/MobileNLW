import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import TeacherList from '../Page/TeacherList';
import Favorites from '../Page/Favorites';



const { Navigator, Screen } = createBottomTabNavigator();
 

function StudyTabs() {
        return(
            <Navigator
            tabBarOptions={{
                style:{
                    elevation:0,
                    shadowOpacity:0,
                    height:50,//era 64, mas ficava muit grande no iPhone
                },
                tabStyle:{
                    flexDirection:'row',
                    justifyContent:'center',
                    alignContent:'center',
                },
                iconStyle:{
                    flex:1,
                    width:20,
                    height:30,
                    marginRight:-25//não existia, mas foi necessario para ajustes
                },
                labelStyle:{
                    fontFamily: 'Archivo_700Bold',
                    fontSize:13,
                    marginLeft:0,//era 16, mas foi necessario para ajustes
                    marginRight:30,//não existia, mas foi necessario para ajustes
                    lineHeight:30,//não existia, mas foi necessario para ajustes
                },
                inactiveBackgroundColor: '#fafafc',
                activeBackgroundColor: '#e1e1e3',//ebebf5, mas ficou muito azulado
                inactiveTintColor:'#c1bccc',
                activeTintColor:'#32264d',
            }}
            >
                    <Screen
                    options={{
                        tabBarLabel:'Proffys',
                        tabBarIcon:({ color, size, focused}) => {
                            return(
                                <Ionicons name='ios-easel' size={size}  color={focused ? '#8265e5': color}/>
                            )
                        }
                    }}
                    name='TeacherList' component={TeacherList} />
                    <Screen
                    options={{
                        tabBarLabel:'Favoritos',
                        tabBarIcon:({ color, size, focused}) => {
                            return(
                                <Ionicons name='ios-heart' size={size}  color={focused ? '#8265e5': color} />
                            )
                        }
                    }}
                    name='Favorites' component={Favorites} />
            </Navigator>
        )
}

export default StudyTabs;
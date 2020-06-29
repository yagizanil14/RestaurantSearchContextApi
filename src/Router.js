import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { RestaurantDetail, RestaurantList, RestaurantMap, CityList } from './pages'

import Provider from './context/Provider'

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()

function Main(){
    return(
        <Tab.Navigator>
            <Tab.Screen name="RestaurantList" component={RestaurantList}/>
            <Tab.Screen name="RestaurantMap" component={RestaurantMap}/>
        </Tab.Navigator>
    )
}

function Router() {
    return (
        <Provider>
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen options={{headerShown:false}} name="CitiyList" component={CityList} />
                <Stack.Screen name="main" component={Main} />
            </Stack.Navigator>
        </NavigationContainer>
        </Provider>
    )
}

export default Router
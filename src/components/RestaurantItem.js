import React from 'react'
import { View,Text, TouchableOpacity } from 'react-native'

const RestaurantItem = props =>{
    return(
        <TouchableOpacity>
            <Text>{props.dataItem.name}</Text>
            <Text>{props.dataItem.city}</Text>
            <Text>{props.dataItem.address}</Text>
        </TouchableOpacity>
    )
}
export {RestaurantItem}
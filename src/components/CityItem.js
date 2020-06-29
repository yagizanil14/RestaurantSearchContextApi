import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import styles from '../styles'

const CityItem = props => {
    return (
        <TouchableOpacity onPress={()=>props.selectedCity(props.dataItem)}>
            <View style={styles.components.cityItem.cityView}>
                <Text>{props.dataItem}</Text>
            </View>
        </TouchableOpacity>
    )
}
export { CityItem }
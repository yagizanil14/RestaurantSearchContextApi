import React, {useEffect, useState, useContext} from "react"
import {View,SafeAreaView,Text,FlatList} from "react-native"
import axios from "axios"
import {CityItem} from '../components'
import style from '../styles'
import Context from '../context/store'

const CityList = props => {
    const [cityList, setCityList]=useState([])
    const{state,dispatch}=useContext(Context)

    useEffect(() => {
       fetchData()
    }, [])

    const fetchData = async()=>{
        let { data } = await axios.get("https://opentable.herokuapp.com/api/cities")
        setCityList(data.cities)
    }

    const renderItem = ({item}) =><CityItem dataItem={item} selectedCity={selectCity}/>
        
    function selectCity(city) {
        dispatch({type:"SET_SELECTED_CİTY", city})
        props.navigation.navigate("main")
    }
    
    return(
        <SafeAreaView>
            <View>
                <Text style={style.pages.cityList.cityTitle}>Şehir Seçiniz</Text>
                <FlatList 
                keyExtractor={(_,index)=>index.toString()}
                data={cityList}
                renderItem={renderItem}
                />
            </View>
        </SafeAreaView>
    )
}
export {CityList}
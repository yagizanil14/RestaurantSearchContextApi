import React, {useContext,useEffect,useState} from 'react'
import { SafeAreaView, View, Text, FlatList } from 'react-native'
import Context from '../context/store'
import axios from 'axios'
import {RestaurantItem} from '../components'

const RestaurantList = props =>{
    const{state,dispatch}=useContext(Context)
    const[city,setCity]=useState({})
    
    useEffect(()=>{
        fetchData()
    },[])

    const fetchData = async() =>{
        let {data} = await axios.get("https://opentable.herokuapp.com/api/restaurants?city=" + state.selectedCity)
        setCity(data.restaurants)
        dispatch({type:"SET_RESLİST", resList:data.restaurants})
    }

    const RenderItem=({item})=><RestaurantItem dataItem={item}/>

    
    return(
        <SafeAreaView>
           
            <FlatList 
            keyExtractor={(_,index)=>index.toString()}
            data={city}
            renderItem={RenderItem}
            />
        </SafeAreaView>
    )
}
export {RestaurantList}
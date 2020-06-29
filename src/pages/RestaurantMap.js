import React, {useContext,useState} from 'react'
import { SafeAreaView, View, Text } from 'react-native'
import Context from '../context/store'
import MapView, {Marker} from 'react-native-maps';
import Modal from 'react-native-modal';

const RestaurantMap = props =>{
    const {state,dispatch}=useContext(Context)
    const[isVisible,setVisible]=useState(false)
    const[SelectRes,setSelectRes]=useState({})

    function selectRes(res){
        handleModal()
        setSelectRes(res)
    }
    const handleModal = () => setVisible(!isVisible)
    return(
        <SafeAreaView style={{flex:1}}>
            <MapView
            style={{flex:1}}
            provider="google">
                {
                    state.resList.map((restaurants,index)=>{
                        return(
                            <Marker
                            key={index}
                            coordinate={{
                                latitude: restaurants.lat,
                                longitude: restaurants.lng
                            }}
                            tracksViewChanges={false}
                            onPress={()=>selectRes(restaurants)}
                            />
                        )
                    })
                }
            </MapView>
            <Modal
            isVisible={isVisible}
            onBackdropPress={handleModal}>
                <View>
            <Text>{SelectRes.name}</Text>
                </View>
            </Modal>
        </SafeAreaView>
    )
}
export {RestaurantMap}
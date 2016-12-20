import React from 'react'
import { View, Text } from 'react-native'

export default class LayoutHome extends React.Component {

    static propTypes = {}

    render(){
        return (
            <View style={{flex:1}}>
                <Text>Hello from Home</Text>
            </View>
        )
    }
}
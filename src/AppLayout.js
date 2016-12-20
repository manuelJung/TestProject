import React from 'react'
import { Router } from 'react-native-router-flux'

export default ({scenes}) => (
    <View style={{ flex: 1 }}>
        {/* HEADER */}
        <Router scenes={scenes} />
        {/* LEFTMENU */}
    </View>
)
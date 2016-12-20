import React from 'react'
import {Scene, Actions} from 'react-native-router-flux'

import HomeScene from './scenes/home'

export default () => Actions.create(
    <Scene key="root" hideNavBar>
        {/* SCENE LOGIN */}
        <Scene key='home' component={HomeScene} />
        {/* SCENE CATEGORY */}
        {/* SCENE ARTICLE */}
        {/* SCENE CART */}
        {/* SCENE SEARCH */}
        {/* SCENE ACCOUNT */}
        {/* SCENE CHAT */}
    </Scene>
)

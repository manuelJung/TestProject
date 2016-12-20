import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

export default class Card extends React.Component {
     
     static propTypes = {
         label: React.PropTypes.string,
         children: React.PropTypes.node,
         footer: React.PropTypes.string,
         onFooterPress: React.PropTypes.func,
         style: React.PropTypes.object
     }

     render(){
         let { label, footer, onFooterPress, style } = this.props
         return (
             <View style={styles.container}>
                {/* HEADER */}
                { label && (
                <View style={styles.header}>
                    <Text style={styles.label}>{label}</Text>
                </View>) }

                {/* CONTENT */}
                <View style={[styles.content, style]}>
                    {this.props.children}
                </View>

                {/* FOOTER */}
                { footer && (
                <View style={styles.footer}>
                    <TouchableOpacity onPress={onFooterPress}>
                        <Text style={styles.footerLabel}>{footer}</Text>
                    </TouchableOpacity>
                </View>)}
             </View>
         )
     }
}

const styles = {
    // View
    container: {
        margin: 5,
        padding: 5,
        backgroundColor: 'whitesmoke'
    },
    // View
    header: {
        paddingBottom: 5,
        marginBottom: 5,
        borderBottomColor: '#5f79a4',
        borderBottomWidth: 2
    },
    // Text
    label: {
        fontSize: 25,
        color: '#5f79a4'
    },
    // View
    content: {

    },
    // View
    footer: {
        paddingTop: 5,
        marginTop: 5,
        borderTopColor: '#5f79a4',
        borderTopWidth: 2
    },
    // Text
    footerLabel: {
        fontSize: 20,
        color: '#5f79a4'
    }
}
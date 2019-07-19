import React from 'react'
import {View,Image,StyleSheet,Text} from 'react-native'
import Styles from '../../utils/variables/styles';
import { heightPercentageToDP, widthPercentageToDP } from '../../utils/helpers/responsive';
import Names from '../../utils/variables/names';
import { RFValue } from 'react-native-responsive-fontsize';

class Menu extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        return (
            <View style={styles.containerHeader}>
                <View style={styles.header}>
                    <View><Text style={styles.menu}>Game Guides v</Text></View>
                    <View><Text style={styles.menu}>Card Sets v</Text></View>
                    <View><Text style={styles.menu}>Community v</Text></View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    containerHeader : {
        height  : widthPercentageToDP('9%'),
        paddingLeft : widthPercentageToDP(Styles.container),
        paddingRight: widthPercentageToDP(Styles.container),
        paddingTop  : widthPercentageToDP('1%'),
        backgroundColor: Styles.colorBackgroundMenu
    },
    header : {
        flex : 1,
        flexDirection  : 'row',
        justifyContent : 'space-between',
    },
    menu : {
        color : Styles.colorMenu,
        fontFamily:'RobotoRegular',
        fontSize : widthPercentageToDP('4%')
    }
})

export default Menu;
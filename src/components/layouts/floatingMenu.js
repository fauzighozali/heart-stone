import React from 'react'
import {View,Text,StyleSheet,TouchableOpacity} from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize';
import { widthPercentageToDP } from '../../utils/helpers/responsive';

export const FloatingMenu = (props) => {
    return props.showMenu ? (
         <View style={styles.popup}>
             <TouchableOpacity style={styles.list} >
                 <Text style={styles.titleList}>card sets</Text>
                 <View style={styles.point}></View>
             </TouchableOpacity>
             <TouchableOpacity style={styles.list} >
                 <Text style={styles.titleList}>guides</Text>
                 <View style={styles.point}></View>
            </TouchableOpacity>
             <TouchableOpacity style={styles.list} >
                 <Text style={styles.titleList}>adventures</Text>
                 <View style={styles.point}></View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.list} >
                 <Text style={styles.titleList}>forum</Text>
                 <View style={styles.point}></View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.list} >
                 <Text style={styles.titleList}>news</Text>
                 <View style={styles.point}></View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.list} >
                 <Text style={styles.titleList}>heroes</Text>
                 <View style={styles.point}></View>
            </TouchableOpacity>
         </View>
    ) : <Text></Text>
}

const styles = StyleSheet.create({
    popup : {
        width : widthPercentageToDP('45%'),
        height : 'auto',
        backgroundColor : 'rgba(86,86,86,0.8)',
        position : "absolute",
        top : widthPercentageToDP('9%'),
        right : widthPercentageToDP('5%'),
        padding:10,
        zIndex:100
    },
    list : {
        flexDirection : 'row',
        justifyContent:'flex-end',
        borderBottomColor : '#222',
        borderBottomWidth : 1,
        paddingBottom:widthPercentageToDP('2%'),
        paddingTop:widthPercentageToDP('1%'),
        height : 40,
        width:widthPercentageToDP('41%')
    },
    titleList : {
        fontFamily:'RobotoRegular',
        color : 'white',
        fontSize:RFValue(13)
    },
    point : {
        width:8,height:8,backgroundColor:'#de6d10',borderRadius:8,
        marginLeft:10,
        marginTop:10
    }
});
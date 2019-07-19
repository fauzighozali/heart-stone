import React from 'react'
import {View,StyleSheet,Text,Image,TouchableOpacity} from 'react-native'
import { widthPercentageToDP } from '../../utils/helpers/responsive';
import Names from '../../utils/variables/names';
import Styles from '../../utils/variables/styles';

export const ItemCard = ({card,moveToDetail}) => (
    <TouchableOpacity 
        style={styles.containerCard} 
        key={card.cardId}
        onPress={() => moveToDetail(card)}
    >
        <View style={styles.areaImageCard}>
            <Image 
                resizeMode="contain"
                style={styles.imageCard}
                source={{uri : card.img}} />
            <Image 
                resizeMode="contain"
                style={styles.imageBackgroundCard}
                source={Names.urlBackgroundCard} />
        </View>
        <View style={styles.areaNameCard}>
            <Image 
                style={{width: 30, height: 30}}
                source={Names.urlUniqueIcon} />
            <Text style={styles.nameCard}>{card.name}</Text>
        </View>
    </TouchableOpacity>
)

const styles = StyleSheet.create({
    containerCard : {
        flex : 1,
        marginBottom : widthPercentageToDP('0%')
    },
    areaImageCard : {
        position: 'relative'
    },
    imageBackgroundCard : {
        position : 'absolute',
        zIndex : 1,
        width : widthPercentageToDP('36%'),
        height: widthPercentageToDP('36%'),
        right : 0,
        bottom : widthPercentageToDP('2%')
    },
    imageCard :{
        width : widthPercentageToDP('44%'),
        height: widthPercentageToDP('44%'),
        position : 'relative',
        zIndex : 2,
        transform: [{ rotate: '-13deg' }],
        marginLeft:-widthPercentageToDP('7%'),
        marginTop:15
    },
    areaNameCard : {
        flex:1,
        flexDirection:'row',
        justifyContent:'flex-start',
        marginLeft : widthPercentageToDP('5%')
    },
    nameCard : {
        fontSize: 19,
        fontFamily:"RobotoRegular",
        color:Styles.colorDesc,
        marginLeft:5,
    }
})
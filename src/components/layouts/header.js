import React from 'react'
import {View,Image,StyleSheet,Text,TextInput,TouchableOpacity,ScrollView} from 'react-native'
import Styles from '../../utils/variables/styles';
import { heightPercentageToDP, widthPercentageToDP } from '../../utils/helpers/responsive';
import Names from '../../utils/variables/names';
import { RFValue } from 'react-native-responsive-fontsize';


class Header extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            text : null
        }
    }

    render(){
        return (
            <View style={styles.containerHeader}>
                <View style={styles.header}>
                    <Image source={Names.urlLogo} resizeMode="contain" style={styles.logo}/>
                </View>
                <View style={styles.areaSearch}>
                    <Image source={Names.urlIconSearch} resizeMode="contain" style={styles.iconSearch} />
                    <TextInput
                        style={styles.inputSearch}
                        onChangeText={(text) => this.setState({text})}
                        value={this.state.text}
                        placeholder="search"
                        placeholderTextColor="#000"
                    />
                    <TouchableOpacity style={styles.categorySearch} onPress={() => this.props.clickCategory()}>
                        <Text style={{color : '#FFF',fontFamily:'RobotoRegular',fontSize:RFValue(11)}}>category</Text>
                    </TouchableOpacity>
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
        backgroundColor: Styles.colorHeader,
        flexDirection  : 'row',
        justifyContent : 'space-between',
        zIndex : 99
    },
    header : {
        flex : 1,
        flexDirection  : 'row',
        justifyContent : 'space-between',
    },
    areaSearch : {
        width : widthPercentageToDP("45%"),
        height : widthPercentageToDP("5%"),
        marginTop : widthPercentageToDP("1%"),
        backgroundColor: "#FFFFFF",
        borderRadius : widthPercentageToDP("5%"),
        flexDirection  : 'row',
        justifyContent : 'space-between',
        zIndex:99
    },
    logo : {
        width : widthPercentageToDP("30%"),
        marginTop : -widthPercentageToDP("5%")
    },
    inputSearch : {
        height : widthPercentageToDP("9%"), 
        width  : widthPercentageToDP("20%"),
        marginTop : -widthPercentageToDP("1.8%"),
        fontSize:RFValue(11)
    },
    categorySearch : {
        width : widthPercentageToDP("21%"),
        height : widthPercentageToDP("5%"),
        color : "#FFFFFF",
        backgroundColor : "#ff7300",
        paddingLeft : widthPercentageToDP("1%"),
        paddingTop:widthPercentageToDP("0.5%") ,
        borderTopRightRadius :  widthPercentageToDP("5%"),
        borderBottomRightRadius : widthPercentageToDP("5%"),
        marginRight : widthPercentageToDP("5%")
    },
    iconSearch : {
        width : widthPercentageToDP("3%"),
        height : widthPercentageToDP("3%"),
        marginTop : widthPercentageToDP("1%"),
        marginLeft : widthPercentageToDP("2%")
    }
})

export default Header;
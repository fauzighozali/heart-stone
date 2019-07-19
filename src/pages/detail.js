import React from 'react'
import {View,Text,StyleSheet,ImageBackground,SafeAreaView,ScrollView,Image} from 'react-native'
import Header from '../components/layouts/header';
import Names from '../utils/variables/names';
import { heightPercentageToDP, widthPercentageToDP } from '../utils/helpers/responsive';
import Styles from '../utils/variables/styles';
import ContainerCard from '../components/cards/containerCard';
import Menu from '../components/layouts/menu';
import { FloatingMenu } from '../components/layouts/floatingMenu';

class Detail extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            isDetail : true,
            cardDetail : {},
            showMenu : false
        }

        this.clickCategory = this.clickCategory.bind(this)
    }

    clickCategory = e => {
        this.setState({
            showMenu : !this.state.showMenu
        })
    }

    render(){
        return (
            <View style={styles.root}>
                <Header clickCategory={this.clickCategory}/>
                <Menu />
                <SafeAreaView>
                    <ScrollView>
                        <View style={{minHeight:heightPercentageToDP('100%')}}>
                            <ImageBackground resizeMode={"cover"} 
                                source={Names.urlMainBackground} style={styles.mainBackground} >    
                                <View style={{minHeight:heightPercentageToDP('100%')}}>
                                    <Image resizeMode="contain" source={Names.urlBackgroundDetail} style={styles.backgroundDetail} />
                                    <View style={styles.areaImageCard}>
                                        <Image 
                                            resizeMode="contain"
                                            style={styles.imageCard}
                                            source={{uri : this.props.navigation.getParam('img')}} />
                                        <Image 
                                            resizeMode="contain"
                                            style={styles.imageBackgroundCard}
                                            source={Names.urlBackgroundCard} />
                                    </View>
                                    <Text style={styles.nameDetail}>
                                        {this.props.navigation.getParam('name')}
                                    </Text>
                                    <View style={styles.areaPembatas}>
                                        <View style={{...styles.border,position:'absolute',left:widthPercentageToDP('10%')}}></View>
                                        <View style={{...styles.border,position:'absolute',left:widthPercentageToDP('55%')}}></View>
                                        
                                        <Image 
                                            resizeMode="contain"
                                            style={styles.uniqueIcon}
                                            source={Names.urlUniqueIcon} />
                                        
                                        <View style={{marginTop:widthPercentageToDP('5%'),height:4000,width:widthPercentageToDP("100%")}}>
                                            <View style={styles.areaDesc}>
                                                <Text style={styles.labelName}> Type: </Text> 
                                                <Text style={styles.value}>
                                                    {this.props.navigation.getParam('type')}
                                                </Text>
                                               
                                            </View>
                                            <View style={styles.areaDesc}>
                                                <Text style={styles.labelName}> Class: </Text> 
                                                <Text style={styles.value}>
                                                    {this.props.navigation.getParam('playerClass')}
                                                </Text>
                                               
                                            </View>
                                            <View style={styles.areaDesc}>
                                                <Text style={styles.labelName}> Rarity: </Text> 
                                                <Text style={styles.value}>
                                                    -
                                                </Text>
                                               
                                            </View>
                                            <View style={styles.areaDesc}>
                                                <Text style={styles.labelName}> Set: </Text> 
                                                <Text style={styles.value}>
                                                    {this.props.navigation.getParam('cardSet')}
                                                </Text>
                                               
                                            </View>
                                            <View style={styles.areaDesc}>
                                                <Text style={styles.labelName}> Race: </Text> 
                                                <Text style={styles.value}>
                                                    -
                                                </Text>
                                               
                                            </View>
                                            <View style={styles.areaDesc}>
                                                <Text style={styles.labelName}> Crafting Cost: </Text> 
                                                <Text style={styles.value}>
                                                    -
                                                </Text>
                                               
                                            </View>
                                            <View style={styles.areaDesc}>
                                                <Text style={styles.labelName}> Arcane Dust Gained: </Text> 
                                                <Text style={styles.value}>
                                                    -
                                                </Text>
                                               
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            </ImageBackground>
                        </View>    
                    </ScrollView>
                </SafeAreaView>
                <FloatingMenu showMenu={this.state.showMenu}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    root : {
        flex : 1
    },
    body : {
        width : widthPercentageToDP('100%')
    },
    mainBackground : {
        width: widthPercentageToDP('100%'),
        zIndex:0,
        height : heightPercentageToDP('120%'),
        marginBottom: widthPercentageToDP('20%')
    },
    headerBackground : {
        width : widthPercentageToDP('100%'),
        height: (widthPercentageToDP('100%')/268)*320,
        marginTop: -widthPercentageToDP('19%'),
        zIndex:1
    },
    uniqueIcon : {
        position : 'absolute',
        top : -widthPercentageToDP('5%'),
        left: widthPercentageToDP('45%'),
        width:widthPercentageToDP('10%'),
        height:widthPercentageToDP('10%'),
        zIndex : 7
    },
    descriptionHeader : {
        fontSize : 19,
        color:Styles.colorDesc,
        fontFamily:"RobotoRegular",
        textAlign : 'center'
    },
    content : {
        minHeight   :   heightPercentageToDP('100%'),
        paddingTop  :   widthPercentageToDP('50%'),
        paddingBottom :   widthPercentageToDP('15%')
    },
    titleHeader : {
        textAlign : "center",
        fontSize:24,
        marginTop:widthPercentageToDP("2%"),
        marginBottom:widthPercentageToDP("2%"),
        fontFamily:"BerkshireSwashRegular"
    },
    backgroundDetail : {
        width : widthPercentageToDP("80%"),
        height : widthPercentageToDP("80%"),
        marginLeft: widthPercentageToDP("10%"),
        position : 'absolute',
        top:widthPercentageToDP("13%")
        
    },
    areaImageCard : {
        position: 'relative'
    },
    imageBackgroundCard : {
        position : 'absolute',
        zIndex : 2,
        width : widthPercentageToDP('75%'),
        height: widthPercentageToDP('75%'),
        left :  widthPercentageToDP('20%'),
        top : widthPercentageToDP('14%')
    },
    imageCard :{
        width : widthPercentageToDP('90%'),
        height: widthPercentageToDP('90%'),
        position : 'absolute',
        zIndex : 3,
        transform: [{ rotate: '-13deg' }],
        left :  widthPercentageToDP('0%'),
        top : widthPercentageToDP('3%')
    },
    nameDetail : {
        fontSize : 48,
        fontFamily:"BerkshireSwashRegular",
        textAlign : 'center',
        marginTop : widthPercentageToDP('100%')
    },
    areaPembatas : {
        minHeight : widthPercentageToDP('100%'),
        marginTop : widthPercentageToDP('120%'),
        position: 'absolute',
        zIndex : 7
    },
    border : {
        width:widthPercentageToDP('35%'),
        height : 1,
        backgroundColor : '#CCC'
    },
    labelName : {
        fontSize : 18,
        color : '#32170b',
        fontWeight : 'bold',
        fontFamily:'RobotoRegular'
    },
    value : {
        fontSize : 18,
        fontFamily:'RobotoRegular',
        color : '#534a3a'
    },
    areaDesc : {
        flexDirection : 'row',
        justifyContent : 'flex-start',
        paddingLeft : widthPercentageToDP('10%'),
        paddingRight : widthPercentageToDP('10%'),
        marginBottom : 10,
        height : 25
    }
})


export default Detail;
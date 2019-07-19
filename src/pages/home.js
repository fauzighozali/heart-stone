import React from 'react'
import {View,Text,StyleSheet,ImageBackground,SafeAreaView,ScrollView,Image} from 'react-native'
import Header from '../components/layouts/header';
import Names from '../utils/variables/names';
import { heightPercentageToDP, widthPercentageToDP } from '../utils/helpers/responsive';
import Styles from '../utils/variables/styles';
import ContainerCard from '../components/cards/containerCard';
import Menu from '../components/layouts/menu';
import { FloatingMenu } from '../components/layouts/floatingMenu';

class Home extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            isDetail : true,
            cardDetail : {},
            navigation : this.props.navigation,
            showMenu : false
        }

        this.moveToDetail = this.moveToDetail.bind(this)
        this.clickCategory = this.clickCategory.bind(this)
    }

    clickCategory = e => {
        this.setState({
            showMenu : !this.state.showMenu
        })
    }

    moveToDetail = data => {
        this.state.navigation.navigate('toDetail',data)
    }

    render(){
        
        return (
            <View style={styles.root}>
                <Header clickCategory={this.clickCategory}  />
                <Menu />
                <SafeAreaView>
                    <ScrollView>
                        <View style={styles.body}>
                            <Image resizeMode={"contain"} source={Names.urlHeaderBackground} style={styles.headerBackground} />
                            <Image resizeMode={"stretch"} source={Names.urlUniqueIcon} style={styles.uniqueIcon}/>
                            <ImageBackground resizeMode={"cover"} source={Names.urlMainBackground} style={styles.mainBackground}>    
                                <View style={styles.content}>
                                    <Text style={styles.descriptionHeader}>A fast-paced strategy</Text>
                                    <Text style={styles.descriptionHeader}>card game for everyone.</Text>
                                    <Text style={styles.titleHeader}>Cards</Text>
                                    <View style={styles.border}></View>
                                    <ContainerCard moveToDetail={this.moveToDetail} />
                                    <Text style={styles.playYourTitle}>Play your way:</Text>
                                    <Text style={styles.playYourDesc}>Find your perfect match in casual, ranked, and arena games, participate incrazy Tavern Brawls, or practice against devious AI opponents and hone your skills in Hearthstone’s adventure mode.</Text>
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
        marginTop: -widthPercentageToDP('49%'),
        zIndex:0,
        minHeight : heightPercentageToDP('100%')
    },
    mainBackgroundDetail : {
        width: widthPercentageToDP('100%'),
        zIndex:0,
        minHeight : heightPercentageToDP('100%')
    },
    headerBackground : {
        width : widthPercentageToDP('100%'),
        height: (widthPercentageToDP('100%')/268)*320,
        marginTop: -widthPercentageToDP('19%'),
        zIndex:1
    },
    uniqueIcon : {
        position : 'absolute',
        top : widthPercentageToDP('69%'),
        left: widthPercentageToDP('35%'),
        width:widthPercentageToDP('30%'),
        height:widthPercentageToDP('30%'),
        zIndex : 1
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
    border : {
        backgroundColor : '#b4b4b4',
        width:widthPercentageToDP('90%'),
        height : 2,
        marginLeft : widthPercentageToDP('5%')
    },
    playYourTitle : {
        fontFamily:"BerkshireSwashRegular",
        fontSize : 24,
        marginBottom : 15,
        textAlign:"center",
        color:Styles.colorTitle,
        marginTop : widthPercentageToDP("7%")
    },
    playYourDesc : {
        fontFamily:"RobotoRegular",
        fontSize :19,
        maxWidth:widthPercentageToDP("80%"),
        textAlign : "center",
        marginLeft : widthPercentageToDP("10%"),
        color:Styles.colorDesc,
        marginBottom :widthPercentageToDP("10%")
    },
    backgroundDetail : {
        width : widthPercentageToDP("90%"),
        marginLeft: widthPercentageToDP("5%"),
        marginTop:widthPercentageToDP("15%")
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
})


export default Home;
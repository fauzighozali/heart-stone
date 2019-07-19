import React from 'react';
import {FlatList,TouchableOpacity,StyleSheet,View,ImageBackground,Image,Text} from 'react-native'
import { ItemCard } from "./itemCard";
import Axios from 'axios'
import Api from '../../utils/variables/api'
import Names from '../../utils/variables/names';
import { widthPercentageToDP } from '../../utils/helpers/responsive';

class ContainerCard extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            listCard : [],
            showCard : [],
            limit    : 10,
            lastOffset  : 0,
            length   : 0,
            showMore : false
        }
    }

    async componentDidMount(){
        await Axios.get(Api.getCardSets("Naxxramas"),Api.optionHeader).then(response => {
            console.log(response);
            let curResponse = response.data.slice();

            this.setState({
                listCard : response.data,
                showCard : curResponse.slice(0,10),
                length   : response.data.length,
                showMore : true,
                lastOffset : this.state.limit
            })
        }).catch(err => console.log(err));
    }

    showMore = () => {
        
        let getCurrentLast  = this.state.length % this.state.limit;
        
        let currentShow     = this.state.showCard;
        let currentSlice    = this.state.listCard.slice();

        if(this.state.length > this.state.showCard.length){
            let getCurrentFuture = this.state.listCard.length - getCurrentLast;

            
            if(this.state.showCard.length == getCurrentFuture){
                this.setState({ 
                    showCard: [...currentShow,...currentSlice.splice(this.state.lastOffset,getCurrentLast)],
                    lastOffset : this.state.lastOffset + getCurrentLast
                })
            }else{
                this.setState({ 
                    showCard: [...currentShow,...currentSlice.splice(this.state.lastOffset,this.state.limit)],
                    lastOffset : this.state.lastOffset + this.state.limit 
                })
            }
            
        }

        
       
    }

    render(){
        
        return (

            <View>
                <View style={styles.areaList}>
                    <FlatList
                        data={this.state.showCard}
                        extraData={this.state.showCard}
                        renderItem= {
                            ({item}) => <ItemCard card={item} moveToDetail={this.props.moveToDetail}/>
                        }
                        keyExtractor={(item, index) => index.toString()}
                        numColumns={2}
                    />
                </View>
                {
                    this.state.showMore && (this.state.showCard.length < this.state.length  ) ? (
                       <View style={styles.areaMore}>
                            
                            <ImageBackground resizeMode={"cover"} source={Names.urlMainBackgroundBottom} style={{...styles.bottomTransparent,zIndex:5}} >
                                <Image resizeMode={"cover"} source={Names.urlMainBackgroundBottom} style={styles.bottomTransparent} />
                                <Image resizeMode={"cover"} source={Names.urlMainBackgroundBottom} style={styles.bottomTransparent} />
                                <Image resizeMode={"cover"} source={Names.urlMainBackgroundBottom} style={styles.bottomTransparent} />
                            </ImageBackground>
                            <TouchableOpacity onPress={() => this.showMore()} style={{zIndex:6,flex:1,position:'absolute',marginTop   : widthPercentageToDP('50%')}} >
                                <Image resizeMode={"contain"} source={Names.urlButton} style={styles.seemore} />
                            </TouchableOpacity>
                       </View>
                    ) : <Text></Text>
                }
                
            </View>
        )
    }
}

const styles = StyleSheet.create({
    areaList : {
        paddingLeft : widthPercentageToDP('5%'),
        paddingRight : widthPercentageToDP('5%')
    },  
    seemore : {
        justifyContent : 'center',
        alignItems  :'center',
        width       : widthPercentageToDP('40%'),
        marginLeft  : widthPercentageToDP('30%'),
        zIndex : 5
    },
    areaMore : {
        zIndex : 3,
        height : 300,
        overflow:"hidden",
        marginTop:-widthPercentageToDP("50%"),
        position : 'relative'
    },
    bottomTransparent : {
        width : widthPercentageToDP('100%'),
        height: 450,
    }
})

export default ContainerCard;
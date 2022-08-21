import React from "react";
import {View, Image, Text, StyleSheet} from 'react-native'

const ResultsDetail = ({result}) => {
    return(
        <View style={styles.container}>
            <Image style= {styles.ImageStyle} source={{uri: result.image_url}}/>
            <Text style={styles.Name}>{result.name}</Text>
            <Text >{result.rating} Stars, {result.review_count} Reviews</Text>

        </View>
    ); 
};

const styles = StyleSheet.create({
    container:{
        marginLeft:15
        
    },

    ImageStyle:{
        width: 250,
        height: 130,
        borderRadius: 4,
        marginBottom: 5

    },
    Name:{
        fontWeight: 'bold',

    }
});

export default ResultsDetail;
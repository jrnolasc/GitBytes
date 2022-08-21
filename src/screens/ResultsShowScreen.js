import React,{useState, useEffect} from "react";
import {View,StyleSheet,Text, Image, FlatList} from 'react-native';
import ResultsList from "../components/ResultsList";
import yelp from "../api/yelp";

const ResultsShowScreen = ({navigation}) =>{
    const [result, setResult] = useState(null);

    const id = navigation.getParam('id');

    const getResult = async(id) =>{
       const response=  await yelp.get(`/${id}`);
       setResult(response.data);
    };
    useEffect(() =>{
        getResult(id);
    }, []);

    if(!result){
        return null;
    }
    return(
        <>
            <Text style={styles.header}>{result.name}</Text>
            <FlatList 
            showsHorizontalScrollIndicator={false}
            horizontal
            data={result.photos}
            keyExtractor= {(photo) => photo}
            renderItem={({item}) =>{
                return <Image style= {styles.images}source={{uri:item}} />
                }  
            }    
           
            />
            <Text style={styles.text}> {result.location.display_address}</Text>
            <Text style={styles.texttwo}>Reviews: {result.review_count}  Stars: {result.rating}/5</Text>
            

        </>
    );
};

const styles = StyleSheet.create({

    header:{
        fontWeight: 'bold',
        fontSize: 30,
        marginBottom: 15
       
    },

    images:{
        height:300,
        width: 400,
        borderRadius: 6,
        flexDirection: 'row',
        flexWarp: 'warp',
        margin: 10
       
        
    },
    text:{
        flexDirection: 'column',
        position: 'relative',
        bottom:  390,
        fontSize: 20,

    },
    texttwo:{
        flexDirection: 'column',
        position: 'relative',
        bottom:  370,
        fontSize: 16
    },

});

export default ResultsShowScreen;
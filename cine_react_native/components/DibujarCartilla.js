import React, { Component } from 'react';
import { Image, View } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body } from 'native-base';
import { Cards } from '../components/Cards';


export default class DibujarCartelera extends Component{
    render(){
        return(
            <View>
                {this.props.cartilla.map(peli => {
                    return <Cards contenido={peli} key={peli.id}/>
                })}
            </View>
        )
    }
}
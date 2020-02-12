import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body } from 'native-base';
export default class Cards extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Content>
          <Card style={{flex: 0}}>
            <CardItem>
              <Left>
                <Thumbnail source={{uri: 'https://image.freepik.com/vector-gratis/pelicula-cartel-cine-simbolos-produccion-peliculas-cinta-gafas-estereo-palomitas-maiz_80590-5232.jpg'}} />
                <Body>
                  <Text>{this.props.contenido.titulo}</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Body>
                <Image source={{uri: 'https://www.elsoldemexico.com.mx/gossip/jlsc22-sonic-la-pelicula.jpg/ALTERNATES/LANDSCAPE_400/Sonic-La-Pelicula.jpg'}} style={{height: 200, width: 200, flex: 1}}/>
                <Text>
                  {this.props.contenido.resumen}
                </Text>
              </Body>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent textStyle={{color: '#87838B'}}>
                  <Icon name="logo-github" />
                  <Text>1,926 stars</Text>
                </Button>
              </Left>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}
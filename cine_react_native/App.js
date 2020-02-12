import React, {Component} from 'react';
import { AppLoading } from 'expo';
import { Container, Text, Button } from 'native-base';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import DibujarCartelera from './components/DibujarCartilla';
import getData from './components/ap';


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false,
      cartilla: []
    };
    this.insertarCartilla=this.insertarCartilla.bind(this);
  }
  insertarCartilla(){
    getData().then(contenido => {
      this.setState({
        cartilla: contenido
      });
    });
  }
  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
    });
    this.setState({ isReady: true });
  }

  render() {
    if (!this.state.isReady) {
      return <AppLoading />;
    }

    return (
      <Container>
        <DibujarCartelera cartilla={this.state.cartilla}/>
        <Button onPress = {this.insertarCartilla}>
          <Text>Presiona</Text>
        </Button>
      </Container>
    );
  }
}
'use strict';

import React, { Component }  from  'react';
import 
  { 
  Text,
  View,
  Navigator,
  TouchableOpacity }
 from  'react-native';
 import Icon from 'react-native-vector-icons/Ionicons';

class PersonPage extends Component {
  render() {
    return (
      <Navigator
          renderScene={this.renderScene.bind(this)}
          navigator={this.props.navigator}
          navigationBar={
            <Navigator.NavigationBar style={{backgroundColor: '#246dd5'}}
                routeMapper={NavigationBarRouteMapper} />
          } />
    );
  }
  renderScene(route, navigator) {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <TouchableOpacity
            onPress={this.gotoNext.bind(this)}>
          <Text>Soy pagina persona, haz tap para abrir un modal</Text>
        </TouchableOpacity>
      </View>
    );
  }
  gotoNext() {
    this.props.navigator.push({
      id: 'NoNavigatorPage',
      sceneConfig: Navigator.SceneConfigs.FloatFromBottom,
    });
  }
}

var NavigationBarRouteMapper = {
  LeftButton(route, navigator, index, nextState) {
    return (
        <TouchableOpacity style={{width: 40, justifyContent: 'center',  borderColor: '#999', borderRadius: 20,  backgroundColor: '#999', top: 8}}
            onPress={() => navigator.parentNavigator.pop()}>
          <Text style={{margin: 10, textAlign: 'center'}}>
            <Icon name="ios-arrow-back" color="#fff" size={16}/> 
          </Text>
       </TouchableOpacity>
    );
  },
  RightButton(route, navigator, index, nextState) {
    return (
      <TouchableOpacity style={{flex: 1, justifyContent: 'center'}}
          onPress={() => navigator.parentNavigator.push({id: 'unknown'})}>
        <Text style={{color: 'white', margin: 10,}}>
          Hacia lo desconocido
        </Text>
      </TouchableOpacity>
    );
  },
  Title(route, navigator, index, nextState) {
    return (
      <TouchableOpacity style={{flex: 1, justifyContent: 'center'}}>
        <Text style={{color: 'white', margin: 10, fontSize: 16}}>
          Titulo
        </Text>
      </TouchableOpacity>
    );
  }
};

module.exports = PersonPage;

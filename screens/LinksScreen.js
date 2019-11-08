import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Ionicons,
  TouchableOpacity
} from 'react-native';


export default class HomeScreen extends Component {

  static navigationOptions = ({ navigation }) => {
    const params = navigation.state.params || {};

    return {
      headerLeft: <View style={styles.headerLeft}>
      <TouchableOpacity><Text style={{fontSize: 15, color: 'gray'}}>Back</Text></TouchableOpacity>
    </View>
        ,
      headerRight: <View style={styles.headerRight}>
                      <TouchableOpacity><Text style={{fontSize: 15, color: 'gray'}}>Cancel</Text></TouchableOpacity>
                    </View>,
      title: '계약관리',
      headerTitleStyle: {
        textAlign: 'center',
        flex: 1,
        fontSize: 20
      }
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>세입자 인증 </Text>
        <Text style={{paddingLeft: 25, fontSize: 15}}>세입자 이름</Text>
        <TextInput style={styles.arrange}
          placeholder="이름을 입력해주세요."
          multiline={false}
          onChangeText={(text) => this.setState({ content: text })}
        />
        <Text style={{paddingLeft: 25, fontSize: 15}}>주민등록번호</Text>
        <TextInput style={styles.arrange}
          placeholder="주민등록번호를 입력해주세요 (-포함)"
          multiline={false}
          onChangeText={(text) => this.setState({ content: text })}/>
            <View>
              <Text style={{paddingLeft: 25, fontSize: 15}}>휴대전화 번호</Text>
                <TouchableOpacity 
                  style={styles.button}
                  onPress={this.onPress}>
                    <Text style={{fontSize: 15, color: 'red'}}>인증번호 발송</Text>
                </TouchableOpacity>
                <TextInput style={styles.arrange}
                  placeholder="휴대폰 번호를 입력해 주세요. (-제외)"
                  multiline={false}
                  onChangeText={(text) => this.setState({ content: text })}          
                />
            </View>
            <View>
                <Text style={{paddingLeft: 25, fontSize: 15}}>인증 번호</Text>
                <TouchableOpacity 
                  style={styles.button}
                  onPress={this.onPress}>
                <Text style={{fontSize: 15, color: 'red'}}>휴대폰 인증</Text>
                </TouchableOpacity>
                <TextInput style={styles.arrange}
                  placeholder="휴대폰 인증번호 입력"
                  multiline={false}
                  onChangeText={(text) => this.setState({ content: text })}          
                />
            </View>
            <View style={styles.buttonStyle}>
              <TouchableOpacity 
                    style={styles.bigButton}
                    onPress={this.onPress}>
                  <Text style={{fontSize: 23, color: 'white', marginTop: 10 }}>다음 단계로 이동</Text>
                  </TouchableOpacity>
            </View>
               
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    padding: 30,
    fontSize: 25,
    fontWeight: 'bold'
  },
  headerRight:{
    padding:5,
    paddingRight: 18
  },
  headerLeft:{
    padding:5,
    paddingLeft: 18
  },
  arrange: {
    
    color: 'gray',
    borderBottomColor: 'lightgray',
    borderBottomWidth: 1,
    marginLeft: 30,
    marginRight: 50,
    marginTop: 10,
    marginBottom: 30
  },
  redtap: {
    paddingTop: 8,
    color: 'gray',
    borderBottomColor: 'lightgray',
    borderBottomWidth: 1,
    marginLeft: 50,
    marginRight: 20,
    marginTop: 10,
    marginBottom: 30
  },
  button: {
    alignItems: 'flex-end',
    backgroundColor: 'white',
    marginRight: 50,
  },
  bigButton: {
    alignItems: 'center',
    backgroundColor: '#43DE67',
    width: 300,
    height: 50,

  },
  buttonStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingVertical: 50
  }

});
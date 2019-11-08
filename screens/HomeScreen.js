import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Ionicons,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native';


export default class SignUpScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '이메일',
            password: '비밀번호',
            password2: '비밀번호 확인',
            firstName: '이름',
            lastName: '성',
        }
    }

    render() {
        return (
            <View style={StyleSheet.container}>
                
              <View style={styles.logo}>
                  <Image
                    style={{width: 180, height: 180}}
                    source={require('/Users/tag4/apps/wolb/assets/images/wolb.png')}/>
              </View>

                <Text style={styles.wolbText}> WOLB{"\n"}계정만들기</Text>
            
                 <TextInput 
                    style={styles.TextInput}
                    onChangeText={(email) => this.setState({email})}
                    placeholder={this.state.email}
                    autoCorrect={false}
                />
                <TextInput 
                    style={styles.TextInput}
                    onChangeText={(password) => this.setState({password})}
                    placeholder={this.state.password}
                    autoCorrect={false}
                />
                <TextInput 
                    style={styles.TextInput}
                    onChangeText={(password2) => this.setState({password2})}
                    placeholder={this.state.password2}
                    autoCorrect={false}
                />
                <TextInput 
                    style={styles.TextInput}
                    onChangeText={(firstName) => this.setState({firstName})}
                    placeholder={this.state.firstName}
                    autoCorrect={false}
                />
                <TextInput 
                    style={styles.TextInput}
                    onChangeText={(lastName) => this.setState({lastName})}
                    placeholder={this.state.lastName}
                    autoCorrect={false}
                />
                <Text style={styles.descriptionText}>회원가입 시 이용약관에 동의한 것으로 간주합니다.</Text>

                <View style={styles.buttonStyle}>
                  <TouchableOpacity 
                      style={styles.bigButton}
                      onPress={() => {
                        Alert.alert('회원가입 완료.')
                      }}>
                    <Text style={{fontSize: 23, color: 'white', marginTop: 10 }}>회원 가입</Text>
                  </TouchableOpacity>
              </View>

            </View>
            
        );
    };
};

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        
        
        

    },
    wolbText: {
        fontSize: 21,
        color: '#43DE67',
        marginTop: 80,
        textAlign: 'center',
        marginBottom: 115,
        fontWeight: 'bold',

    },
    TextInput: {
        
      color: 'gray',
      borderBottomColor: 'lightgray',
      borderBottomWidth: 1,
      marginLeft: 30,
      marginRight: 50,
      marginTop: 10,
      marginBottom: 30,
        
    },
    descriptionText: {
      marginTop: 10,
      fontSize: 12,
      fontWeight: '200',
      textAlign: 'center',
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
      paddingVertical: 50,
      marginTop: 50,
    },
    logo: {
      marginTop: 10,
      alignItems: 'center',
      
      width: 180, 
      height: 180,
    },

});

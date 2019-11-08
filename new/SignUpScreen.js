import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Ionicons,
  TouchableOpacity,
  Image,
} from 'react-native';


export default class SignUpScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '이메일',
            password: '비밀번호',
            firstName: '이름',
            lastName: '성',
        }
    }

    render() {
        return (
            <View style={StyleSheet.container}>
                <Text style={styles.wolbText}> WOLB{"\n"}계정만들기</Text>
            
                 <TextInput
                    style={styles.TextInput}
                    onChangeText={(email) => this.setState({email})}
                    placeholder={this.state.email}
                    autoCorrect={false}
                />
            </View>
            
        );
    };
};

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',

    },
    wolbText: {
        fontSize: 16,
        color: '#43DE67',
        marginTop: 41,
        textAlign: 'center',
        marginBottom: 115,

    },
    TextInput: {
        color: 'gray',
        borderBottomColor: 'lightgray',
        borderBottomWidth: 1,
        marginLeft: 30,
        marginRight: 50,
        marginTop: 10,
        marginBottom: 30
    }

});

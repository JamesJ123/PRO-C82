import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class CreateStory extends Component {
    render() {
        return (
            <View
                style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                <Text>Create Story</Text>
                <TouchableOpacity>
                    <Text>Create Your Story Here!</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text>Name of Author</Text>
                </TouchableOpacity>
                if(TouchableOpacity=True){
                    return db()=>CreateStory();
                }
            </View>
        )
    }
}
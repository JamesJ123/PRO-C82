import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class Feed extends Component {
    render() {
        return (
            <View
                style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                <Text>Feeds</Text>
                <TouchableOpacity>
                    <Button>
                        <Fade style={12}>
                            Put In Personal Info Here!
                        </Fade>
                    </Button>
                </TouchableOpacity>
            </View>
            
        )
    }
}
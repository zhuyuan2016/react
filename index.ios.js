import React from 'react';
import {
    AppRegistry, Easing, Animated
}
    from 'react-native';
import index from './index';
import {
    StackNavigator
} from 'react-navigation'; //路由组件


import Home from './src/Home';
import PageOne from './src/PageOne';
import PageTwo from './src/PageTwo';

//写入所有开发页面
const RootNavigator = StackNavigator({
    Home: {
        screen: Home,
        navigationOptions: {
            headerTitle: '这里是欢迎页'
        }
    },
    PageOne: {
        screen: PageOne,
        navigationOptions: {}
    },
    PageTwo: {
        screen: PageTwo,
        navigationOptions: {}
    }
}, {
        headerMode: 'screen',
        mode: 'modal',
        navigationOptions: {
            gesturesEnabled: true,
        },
        transitionConfig: () => ({
            transitionSpec: {
                duration: 300,
                easing: Easing.out(Easing.poly(4)),
                timing: Animated.timing,
            },
            screenInterpolator: sceneProps => {
                const {
                layout, position, scene
            } = sceneProps;
                const {
                index
            } = scene;

                const height = layout.initHeight;
                const translateY = position.interpolate({
                    inputRange: [index - 1, index, index + 1],
                    outputRange: [height, 0, 0],
                });

                const opacity = position.interpolate({
                    inputRange: [index - 1, index - 0.99, index],
                    outputRange: [0, 1, 1],
                });

                return {
                    opacity, transform: [{
                        translateY
                    }]
                };
            },
        }),
    });

//初始页面
AppRegistry.registerComponent('react', () => index);

export default RootNavigator;
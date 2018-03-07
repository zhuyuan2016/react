import React, { Component } from "react";
import {
  View,
  TouchableOpacity,
  Text,
  Button,
  StyleSheet,
  ActivityIndicator,
  Modal,
  Picker,
  WebView,
   TextInput
} from "react-native";

export default class FirstPageComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      modalVisible: false,
      text: ""
    };
    setInterval(() => {
      this.setState({
        loading: !this.state.loading
      });
    }, 300);
  }

  direct(link, params) {
    this.props.navigation.navigate(link, params || {});
  }

  closeModal() {
    this.setState(_ => {
      return {
        modalVisible: !_.modalVisible
      };
    });
  }

  render() {
    return (
      <View style={{ alignItems: "center" }}>
        <ActivityIndicator
          animating={this.state.loading}
          size="small"
          color="#00ff00"
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() =>
            this.direct("PageOne", { sourcePage: "我来自第Home页面" })
          }
        >
          <Text>跳转至PageOne</Text>

        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() =>
            this.direct("PageTwo", { sourcePage: "我来自第Home页面" })
          }
        >
          <Text>跳转至PageTwo{this.state.text}</Text>
        </TouchableOpacity>
        <Picker
          selectedValue="java"
          style={{ width: 70 }}
          onValueChange={itemValue => this.setState({ language: itemValue })}
        >
          <Picker.Item label="Java" value="java" />
          <Picker.Item label="JavaScript" value="js" />
        </Picker>
        <TextInput
          style={{ height: 40, borderColor: "#EEE", width: 150 }}
          onChangeText={text => this.setState({ text })}
          value={this.state.text}
          underlineColorAndroid={"transparent"}
          selectionColor="#CCC"
          placeholder="在这里键入你的关键信息"
          placeholderTextColor="#DDD"
          enablesReturnKeyAutomatically="true"
        />
        <Modal
          visible={this.state.modalVisible}
          animationType={"fade"}
          onRequestClose={() => this.closeModal()}
        >
          <Button onPress={() => this.closeModal()} title="Close modal" />
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    margin: 10,
    backgroundColor: "#6495ED",
    padding: 5,
    borderRadius: 5
  }
});

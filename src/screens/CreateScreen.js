import React, { useContext, useState } from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import BlogContext from "../contexts/BlogContext";

const CreateScreen = (props) => {
  const { navigation } = props;

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const data = useContext(BlogContext);

  console.log("DDDDDDDDDDDDDDDDDDDDDData", data);

  return (
    <View>
      <Text style={styles.label}>Enter title</Text>
      <View style={styles.input}>
        <TextInput onChangeText={(text) => setTitle(text)} value={title} />
      </View>
      <Text style={styles.label}>Enter description</Text>
      <View style={styles.input}>
        <TextInput onChangeText={(text) => setContent(text)} value={content} />
      </View>
      <View>
        <Button
          title="Add blog"
          onPress={() => {
            data.AddBlogPosts(title, content);
            navigation.navigate("Index");
          } }
          color="blue" // You can specify the button's color
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 5,
    padding: 10,
    fontSize: 16,
    margin: 10,
  },
  label: {
    fontSize: 16,
    margin: 10,
  },
});

export default CreateScreen;

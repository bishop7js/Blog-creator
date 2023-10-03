import React, { useContext, useState } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import BlogContext from "../contexts/BlogContext";

const EditScreen = (props) => {
  const data = useContext(BlogContext);

  const selectedBlogPost = data.data.find(
    (blogPost) =>
      blogPost.id === props.navigation.getParam("selectedBlogPostId")
  );

  const [title, setTitle] = useState(selectedBlogPost?.title);
  const [content, setContent] = useState(selectedBlogPost?.content);

  console.log("EEEEEEEEEEEEEEEEEdit page", title);

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
          title="Edit blog"
          onPress={() => {
            data.editBlogPosts(title, content, selectedBlogPost.id);
            props.navigation.navigate("Index");
          }}
          color="blue"
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

export default EditScreen;

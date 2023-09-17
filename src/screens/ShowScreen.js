import React, { useContext } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import BlogContext from "../contexts/BlogContext";
import { Entypo } from "@expo/vector-icons";

const ShowScreen = (props) => {
  const data = useContext(BlogContext);

  const selectedBlogPost = data.data.find(
    (blogPost) => blogPost.id === props.navigation.getParam("blogPostId")
  );

  console.log("SSSSSSSSSSSSSSSSSSelected", selectedBlogPost);

  return (
    <View style={styles.containerStyles}>
      <Text style={styles.headerStyles}>{selectedBlogPost.title}</Text>
      <Text>{selectedBlogPost.content}</Text>
    </View>
  );
};

ShowScreen.navigationOptions = (props) => {
  return {
    headerRight: (
      <TouchableOpacity onPress={() => console.log('go to edit screen')}>
        <View style={{ marginRight: 20 }}>
          <Entypo name="edit" size={24} color="black" />
        </View>
      </TouchableOpacity>
    ),
  };
};

const styles = StyleSheet.create({
  containerStyles: {
    marginHorizontal: 16,
    marginTop: 16,
  },

  headerStyles: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 24,
  },
});

export default ShowScreen;

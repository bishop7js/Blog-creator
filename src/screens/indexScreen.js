import { useContext } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import BlogContext from "../contexts/BlogContext";
import { FlatList } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";

const indexScreen = (props) => {
  const { navigation } = props;

  const data = useContext(BlogContext);

  const blogPostsData = data?.data;

  console.log('DDDDDDDDDDDDDDDDDDDData', data?.data.length)

  const renderBlogPostList = () => {
    return (
      <FlatList
        data={blogPostsData}
        renderItem={(item) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("show", { blogPostId: item.item.id })
              }
            >
              <View style={styles.blogListItem}>
                <Text style={styles.textStyle}>{item.item.title}</Text>
                <TouchableOpacity
                  onPress={() => data.deleteBlogPosts(item.item.id)}
                >
                  <Icon name="trash" size={30} color="red" />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    );
  };

  const renderAddPostContent = () => {
    return <Text>Press + icon to create a new blog post</Text>;
  };

  return (
    <View>
      {data?.data.length === 0 ? renderAddPostContent() : null}
      <Text>{renderBlogPostList()}</Text>
    </View>
  );
};

indexScreen.navigationOptions = (props) => {
  return {
    headerRight: (
      <TouchableOpacity onPress={() => props.navigation.navigate("create")}>
        <View style={{ marginRight: 20 }}>
          <Feather name="plus" size={30} />
        </View>
      </TouchableOpacity>
    ),
  };
};

const styles = StyleSheet.create({
  blogListItem: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#AAFD91",
    padding: 10,
    marginBottom: 5,
    borderRadius: 5,
    width: "100%",
  },
  textStyle: {
    fontSize: 20,
  },
});

export default indexScreen;

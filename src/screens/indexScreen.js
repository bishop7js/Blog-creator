import { useContext } from "react";
import { View, Text, Stylesheet, Button } from "react-native";
import BlogContext from "../contexts/BlogContext";
import { FlatList } from "react-native";

const indexScreen = () => {
  const data = useContext(BlogContext);

  const blogPostsData = data?.data;

  const renderBlogPostList = () => {
    return (
      <FlatList
        data={blogPostsData}
        renderItem={(item) => {
          return <Text>{item.item}</Text>;
        }}
      />
    );
  };

  const renderAddPostButton = () => {
    return <Button title="Add blog" onPress={() => data.AddBlogPosts()} />;
  };

  return (
    <View>
      {renderAddPostButton()}
      <Text>{renderBlogPostList()}</Text>
    </View>
  );
};

//const styles = Stylesheet.create({});

export default indexScreen;

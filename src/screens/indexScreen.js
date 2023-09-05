import { useContext } from "react";
import { View, Text, Stylesheet } from "react-native";
import BlogContext from "../contexts/BlogContext";
import { FlatList } from "react-native";

const indexScreen = () => {
  const blogs = useContext(BlogContext);

  const renderBlogPostList = () => {
    return (
      <FlatList
        data={blogs}
        renderItem={(item) => {
          console.log("AAAAAAAAAAAAAAAAAAAAAAAA", item);
          return (
            <Text>
              {item.item.name}
            </Text>
          );
        }}
      />
    );
  };

  return (
    <View>
      <Text>Index Screen</Text>
      <Text>{renderBlogPostList()}</Text>
    </View>
  );
};

//const styles = Stylesheet.create({});

export default indexScreen;

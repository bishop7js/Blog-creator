import {createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import indexScreen from "./src/screens/indexScreen";
import { BlogProvider } from "./src/contexts/BlogContext";

const navigator = createStackNavigator({
  Index: indexScreen
}, {
  initialRouteName: "Index",
  defualtNavigationOptions: {
    title: "Blogs"
  }
})

const App = createAppContainer(navigator);

export default  () => {
  return (
    <BlogProvider>
      <App />
    </BlogProvider>
  );
}

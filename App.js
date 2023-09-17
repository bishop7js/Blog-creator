import {createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import indexScreen from "./src/screens/indexScreen";
import { BlogProvider } from "./src/contexts/BlogContext";
import ShowScreen from "./src/screens/ShowScreen";
import CreateScreen from "./src/screens/CreateScreen";

const navigator = createStackNavigator({
  Index: indexScreen,
  show: ShowScreen,
  create: CreateScreen
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

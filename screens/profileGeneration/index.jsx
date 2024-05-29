import { createStackNavigator } from '@react-navigation/stack';
import EnterSpaceTitle from "./space/EnterSpaceTitle";
import EnterSpaceCode from "./space/EnterSpaceCode";
import SelectCategory from "./space/SelectCategory";

const Stack = createStackNavigator();

const Register = () => {
  return (
    <Stack.Navigator
      initialRouteName="EnterSpaceCode"
      screenOptions={{
        headerShown: false  // This line hides the header globally for all screens
      }}
    >
      <Stack.Screen name="EnterSpaceCode" component={EnterSpaceCode} />
      <Stack.Screen name="EnterSpaceTitle" component={EnterSpaceTitle} />
      <Stack.Screen name="SelectCategory" component={SelectCategory} />
      {/* Additional screens can be added here */}
    </Stack.Navigator>
  );
};

export default Register;
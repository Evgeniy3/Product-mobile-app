import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { Home } from "./Home";
import { FullProduct } from "./Product";

const Stack = createNativeStackNavigator();

export const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: "Продукты" }}
        />
        <Stack.Screen
          name="FullProduct"
          component={FullProduct}
          options={{ title: "Продукт" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

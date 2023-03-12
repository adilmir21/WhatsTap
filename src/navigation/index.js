//import liraries
import { NavigationContainer } from "@react-navigation/native";
import ChatScreen from "../screens/ChatScreen";
import ChatsScreen from "../screens/ChatsScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet } from "react-native";
import MainTabNavigator from "./MainTabNavigator";


const Stack = createNativeStackNavigator();
// create a component
const Navigator = () => {
    return (
       <NavigationContainer>
       <Stack.Navigator
            screenOptions={{headerStyle:
            {
                backgroundColor: 'whitesmoke'
            }
        }
     }
       >
            <Stack.Screen 
                name='Home'
                component={MainTabNavigator}
                options = {{
                    headerShown: false, 
                    
                            }}
            />
            {/* <Stack.Screen 
                name="Chats"
                component={ChatsScreen}
            /> */}
            <Stack.Screen 
                name="Chat"
                component={ChatScreen}
            />
         </Stack.Navigator>
       </NavigationContainer>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
    },
});

//make this component available to the app
export default Navigator;

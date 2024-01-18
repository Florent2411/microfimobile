import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import OnboardingScreen from '../Screens/OnboardingScreen';
import OnboardingScreen1 from '../Screens/OnboardingScreen1';
import OnboardingScreen2 from '../Screens/OnboardingScreen2';
import OnboardingScreen3 from '../Screens/OnboardingScreen3';
import LoginScreen from '../Screens/LoginScreen';
import WelcomeScreen from '../Screens/WelcomeScreen';
import HomePageScreen from '../Screens/HomePageScreen';
import HowIsWorkScreen from '../Screens/HowIsWorkScreen';
import HistoryScreen from '../Screens/HistoryScreen';
import CollectScreen from '../Screens/CollectScreen';
import DetailsCollectScreen from '../Screens/DetailsCollect';
import LastTransScreen from '../Screens/LastTransScreen';


   
    const Stack = createNativeStackNavigator();

    const MainNavigation = () => {
      return (
        <NavigationContainer>
          <Stack.Navigator initialRouteName='Splash'>
            <Stack.Screen 
              name="Splash" 
              options ={{animationEnabled:false, header:() =>null}}
              component={WelcomeScreen}  />
            
            <Stack.Screen 
              name="homepage" 
              component={HomePageScreen}
              options ={{animationEnabled:true, header:() =>null}} />
            
            <Stack.Screen 
              name="howiswork" 
              component={HowIsWorkScreen}
              options ={{animationEnabled:true, header:() =>null}} />
            
            <Stack.Screen 
              name="DetailCollecte" 
              component={DetailsCollectScreen}
              options ={{animationEnabled:true, header:() =>null}} />
            
            <Stack.Screen 
              name="history" 
              component={HistoryScreen}
              options ={{animationEnabled:true, header:() =>null}} />
            
            
            <Stack.Screen 
              name="LastTransfert" 
              component={LastTransScreen}
              options ={{animationEnabled:true, header:() =>null}} />
            
            <Stack.Screen 
              name="collect" 
              component={CollectScreen}
              options ={{animationEnabled:true, header:() =>null}} />
            
            <Stack.Screen 
              name="Login" 
              component={LoginScreen}
              options ={{animationEnabled:true, header:() =>null}} />
            
            <Stack.Screen 
              name="Onboarding" 
              component={OnboardingScreen1}
              options ={{animationEnabled:true, header:() =>null}} />
            
            <Stack.Screen 
              name="Onboarding2" 
              component={OnboardingScreen2}
              options ={{animationEnabled:true, header:() =>null}} />
            
            <Stack.Screen 
              name="Onboarding3" 
              component={OnboardingScreen3}
              options ={{animationEnabled:true, header:() =>null}} />
          </Stack.Navigator>
        </NavigationContainer>
      );
    };


export default MainNavigation;
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  createStaticNavigation,
  StaticParamList,
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Image, View } from 'react-native';
import findImg from '../assets/find.png';
import homeImg from '../assets/home.png';
import fmImg from '../assets/fm.png';
import forumImg from '../assets/forum.png';
import meImg from '../assets/me.png';
import { Profile } from './screens/Profile';
import { Home } from './screens/Home';
import { Find } from './screens/Find';
import { NotFound } from './screens/NotFound';
import { HeaderComponentItem } from '@/components/header/HeaderComponentList';
import Header from '@/components/header/Header';
import { Fm } from './screens/Fm';
import { Me } from './screens/Me';
import { Forum } from './screens/Forum';
import TabBarIcon from '@/components/tabBarIcon/TabBarIcon';


const HomeDrawer = createDrawerNavigator({
  screens: {
    Settings: {
      screen: Home,
      options: {
        drawerType: 'front',
        header: (props) => <Header lefeComponents={[HeaderComponentItem.MENU]} headerCenter='searchInput' {...props}></Header>,
      }
    },
  }
})

const HomeTabs = createBottomTabNavigator({
  screens: {
    Home: {
      screen: HomeDrawer,
      options: {
        title: '推荐',
        headerShown: false,
        tabBarIcon: (props) => <TabBarIcon {...props} source={homeImg}></TabBarIcon>,
        tabBarStyle: {
          height: 50,
          borderTopWidth: 1,
          borderTopColor: '#eee',
        }
      },
    },
    Find: {
      screen: Find,
      options: {
        title: '发现',
        tabBarIcon: (props) => <TabBarIcon {...props} source={findImg}></TabBarIcon>,
        tabBarStyle: {
          height: 50,
          borderTopWidth: 1,
          borderTopColor: '#eee',
        }
      },
    },
    Fm: {
      screen: Fm,
      options: {
        title: '漫游',
        tabBarIcon: (props) => <TabBarIcon {...props} source={fmImg}></TabBarIcon>,
        tabBarStyle: {
          height: 50,
          borderTopWidth: 1,
          borderTopColor: '#eee',
        }
      },
    },
    Forum: {
      screen: Forum,
      options: {
        title: '笔记',
        tabBarIcon: (props) => <TabBarIcon {...props} source={forumImg}></TabBarIcon>,
        tabBarStyle: {
          height: 50,
          borderTopWidth: 1,
          borderTopColor: '#eee',
        }
      },
    },
    Me: {
      screen: Me,
      options: {
        title: '我的',
        tabBarIcon: (props) => <TabBarIcon {...props} source={meImg}></TabBarIcon>,
        tabBarStyle: {
          height: 50,
          borderTopWidth: 1,
          borderTopColor: '#eee',
        }
      },
    },
  },
});

const RootStack = createNativeStackNavigator({
  screens: {
    HomeTabs: {
      screen: HomeTabs,
      options: {
        title: 'Home',
        headerShown: false,
      },
    },
    Profile: {
      screen: Profile,
      linking: {
        path: ':user(@[a-zA-Z0-9-_]+)',
        parse: {
          user: (value) => value.replace(/^@/, ''),
        },
        stringify: {
          user: (value) => `@${value}`,
        },
      },
    },
    // Settings: {
    // screen: DrawerNavigation,
    // options: ({ navigation }) => ({
    //   presentation: 'modal',
    //   headerRight: () => (
    //     <HeaderButton onPress={navigation.goBack}>
    //       <Text>Close</Text>
    //     </HeaderButton>
    //   ),
    // }),
    // },
    NotFound: {
      screen: NotFound,
      options: {
        title: '404',
      },
      linking: {
        path: '*',
      },
    },
  },
});



export const Navigation = createStaticNavigation(RootStack);

type RootStackParamList = StaticParamList<typeof RootStack>;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList { }
  }
}

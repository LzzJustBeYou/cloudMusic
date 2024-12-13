import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  createStaticNavigation,
  StaticParamList,
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import findImg from '../assets/find.png';
import homeImg from '../assets/home.png';
import fmImg from '../assets/fm.png';
import forumImg from '../assets/forum.png';
import meImg from '../assets/me.png';
import { NotFound } from './screens/NotFound';
import { HeaderComponentItem } from '@/components/header/HeaderComponentList';
import Header from '@/components/header/Header';
import TabBarIcon from '@/components/tabBarIcon/TabBarIcon';
import HomeScreen from './screens/home/HomeScreen';
import { FindScreen } from './screens/find/FindScreen';
import { FmScreen } from './screens/fm/FmScreen';
import { ForumScreen } from './screens/Forum/ForumScreen';
import { MeScreen } from './screens/me/MeScreen';


const HomeDrawer = createDrawerNavigator({
  screens: {
    Settings: {
      screen: HomeScreen,
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
      screen: FindScreen,
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
      screen: FmScreen,
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
      screen: ForumScreen,
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
      screen: MeScreen,
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

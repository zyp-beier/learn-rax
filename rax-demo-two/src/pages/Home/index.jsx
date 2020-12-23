import { createElement, Fragment } from 'rax';
// import {usePageShow,usePageHide} from 'ranx-app'
import View from 'rax-view';
import Text from 'rax-text';
import Link from 'rax-link';

import './index.css';

import Logo from '../../components/Logo';
import { useAppHide, useAppShow } from 'rax-app';

export default function Home(props) {
  const {history} = props;
  useAppHide(() => {
    console.log('页面级别生命周期，隐藏');
  });
  useAppShow(() => {
    console.log('页面级别生命周期，显示');
  });
  const life = 0;
  const attr = [
    {name: 'lihua'},
    {name: 'wangbin'},
    {name: 'lihongming'}
  ];
  return (
    <View className="home">
      <div onClick={() => history.push('/about')}>关于我们</div>
      <div onClick={() => history.push('/error')}>404</div>
      <Logo />
      <div onClick={() => console.log(123)}>123</div>
      <img src="//gw.alicdn.com/tfs/TB1MRC_cvb2gK0jSZK9XXaEgFXa-1701-1535.png" alt="" />
      <input type="text" value="12478" />
      <view x-class={{item:true}}>
        <div x-if={life===0}>
          生命在于运动
        </div>
        <div x-elseif={life===1}>
          生命在于静止
        </div>
        <div x-else>
          生命在于睡觉
        </div>
      </view>
      <Fragment>
        <div x-for={(item, key) in attr} key={key}>{item.name}-{key}</div>
      </Fragment>
      <Text className="title">Welcome to Your Rax App</Text>
      <Link href={'/#/about'}>关于我们</Link>
      <Link href={'/*'}>404</Link>
    </View>
  );
}

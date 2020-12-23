import {createElement} from 'rax';
import View from 'rax-view';
import Text from 'rax-text';

import './index.css';
import { useAppShow } from 'rax-app';

export default function About() {
  useAppShow(() => {
    console.log('about页面显示');
  });
  return (
    <View>
      <Text className="about-us">关于我们</Text>
    </View>
  );
}
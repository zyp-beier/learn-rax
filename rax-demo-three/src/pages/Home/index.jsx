import { createElement } from 'rax';
import View from 'rax-view';
import Text from 'rax-text';

import './index.css';

import Logo from '../../components/Logo';

export default function Home(props) {
  const { history } = props;
  return (
    <View className="home">
      123
      <Logo uri="//gw.alicdn.com/tfs/TB1MRC_cvb2gK0jSZK9XXaEgFXa-1701-1535.png" />
      <Text className="title" onClick={() => history.push('./pay')}>Go to page pay.</Text>
    </View>
  );
}

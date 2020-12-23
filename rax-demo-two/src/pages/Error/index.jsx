import {createElement} from 'rax';
import { useAppShow } from 'rax-app';

export default function About() {
  useAppShow(() => {
    console.log('404页面显示');
  });
  return (
    <div>
      404
    </div>
  );
}
import style from './Main.module.scss';
import { Container } from '../Container/Container';
import { Search } from '../Search/Search';
import { Result } from '../Result/Result';

export const Main = () => (
  <div className={style.main}>
    <Container>
      <Search />
      <Result />
    </Container>
  </div>
);

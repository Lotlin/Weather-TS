import { useState } from 'react';
import style from './Search.module.scss';
import SearchIcon from './search.svg';
import { weatherRequestAsync } from '../../store/weather/action';
import { useAppDispatch } from '../../hooks';

type Props = {}

export const Search = (props: Props) => {
  const dispatch = useAppDispatch();
  const [search, setSearch] = useState('');

  const handlerSubmit = (e: React.FormEvent<EventTarget>) => {
    e.preventDefault();
    dispatch(weatherRequestAsync(search));
  }

  const handlerChange = (e: React.ChangeEvent<EventTarget>) => {
    if (e.target instanceof HTMLInputElement) {
      setSearch(e.target.value);
    }
  }

  return (
    <form className={style.form} onSubmit={handlerSubmit}>
      <input
        type='search'
        className={style.search}
        onChange={handlerChange}
        value={search}
      />

      <button className={style.btn} type='submit'>
        <SearchIcon />
      </button>
    </form>
  )
}

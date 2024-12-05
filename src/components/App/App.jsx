import css from './App.module.css';

export default function App({ title }) {
  return (
    <div className={css.container}>
      <h1 className={css.title}>{title}</h1>
    </div>
  );
}

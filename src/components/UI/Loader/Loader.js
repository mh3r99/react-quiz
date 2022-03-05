import s from "./Loader.module.css";

const Loader = (props) => {
  return (
    <div className={s.center}>
      <div className={s.Loader}>
        <div />
        <div />
      </div>
    </div>
  );
};

export default Loader;

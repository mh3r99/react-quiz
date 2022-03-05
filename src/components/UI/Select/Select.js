import s from "./Select.module.css";

const Select = (props) => {
  const htmlFor = `${props.label}-${Math.random().toFixed(2)}`;
  return (
    <div className={s.Select}>
      <label htmlFor={htmlFor}>{props.label}</label>
      <select id={htmlFor} value={props.value} onChange={props.onChange}>
        {props.options.map((option, i) => {
          return (
            <option value={option.value} key={option.value + i}>
              {option.text}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default Select;

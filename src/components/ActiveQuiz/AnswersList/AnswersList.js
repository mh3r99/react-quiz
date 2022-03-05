import AnswerItem from "./AnswerItem/AnswerItem";
import s from "./AnswersList.module.css";

const AnswersList = (props) => {
  return (
    <ul className={s.answersList}>
      {props.answers.map((answer, i) => {
        return (
          <AnswerItem
            key={i}
            answer={answer}
            onAnswerClick={props.onAnswerClick}
            state={props.state ? props.state[answer.id] : null}
          />
        );
      })}
    </ul>
  );
};

export default AnswersList;

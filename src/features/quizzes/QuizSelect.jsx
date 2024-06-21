import { useState } from 'react';
import styles from './QuizSelect.module.css';
import { useQuiz } from '../../contexts/ProviderQuizz';
import { Link } from "react-router-dom";


const quizzTipes = [{id:1, name: "Poluare", color: 'a'},
{id:1,name: "Mediul inconjurator", color: 'b'},
{id:1,name: "Ecologie", color: 'c'},
{id:1,name: "Planeta noastra", color: 'd'},
{id:1,name: "Siguranta in trafic", color: 'e'},
{id:1,name: "Siguranta in mediul Online", color: 'f'},
 ]

function QuizSelect() {

  const {dispatch} = useQuiz();
  
 

  return <div>
    <div>Welcome to quizz section</div>
    <ul className={styles.quizContainer}>
     {quizzTipes.map((el,i)=> <Link key={i} to={`${el.id}`} >
     <li className={styles[el.color]}
     onClick={()=>dispatch({type: 'quiz/select', payload: el.name })}>{el.name}
     </li> </Link>)}
Link
    </ul>
  </div>;
}

export default QuizSelect;

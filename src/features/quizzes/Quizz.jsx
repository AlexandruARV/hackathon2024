import { useParams, useSearchParams } from "react-router-dom";
import { useQuiz } from "../../contexts/ProviderQuizz";
import Options from './Options'


export default function Quizz(){
    const {currentQuizz,questions,questionsOnScreen, dispatch} = useQuiz();
    const {id} = useParams();
    console.log(id)
    console.log(currentQuizz, questions )

    const displayQuestions = questions.slice(questionsOnScreen[0], questionsOnScreen[0] + 5)
    console.log(displayQuestions)

    return <div>
        <h1>{currentQuizz}</h1>
       {displayQuestions.map(el=>
       <div key={el.id}>
        <div>{el.question}</div>
       <Options question={el}/>
       
       </div>
       
       )}
      <button onClick={()=> dispatch({type:"quiz/next"})}>Next</button>
    </div>
}
 
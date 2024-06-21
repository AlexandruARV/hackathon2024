import { useQuiz } from "../../contexts/ProviderQuizz"

export default function Options({question}){
    const {dispatch} = useQuiz();
    

    return <div>
        {question.answers.map((el,i)=>{
            return <button key={i} 
            onClick={()=> dispatch({type:"quiz/answer", payload: {el, questionId: question.id}})}>
                {el}</button>
        })}
    </div>
}


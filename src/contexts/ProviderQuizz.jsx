import { createContext, useContext, useEffect, useReducer } from "react";
import { getQuestions } from "../services/apiServer";

const fakeQuestions = [
    
    {
      "id": 1,
      "question": "Care este capitala Franței?",
      "answers": [
        "Londra",
        "Berlin",
        "Paris",
        "Madrid"
      ],
      "correctAnswer": 2
    },
    {
      "id": 2,
      "question": "Ce planetă este cunoscută ca Planeta Roșie?",
      "answers": [
        "Venus",
        "Marte",
        "Jupiter",
        "Saturn"
      ],
      "correctAnswer": 1
    },
    {
      "id": 3,
      "question": "Cine a scris 'Romeo și Julieta'?",
      "answers": [
        "Mark Twain",
        "William Shakespeare",
        "Charles Dickens",
        "Jane Austen"
      ],
      "correctAnswer": 1
    },
    {
      "id": 4,
      "question": "Care este cea mai mare planetă din sistemul solar?",
      "answers": [
        "Saturn",
        "Neptun",
        "Marte",
        "Jupiter"
      ],
      "correctAnswer": 3
    },
    {
      "id": 5,
      "question": "Care este cea mai mică țară din lume?",
      "answers": [
        "Vatican",
        "Monaco",
        "Nauru",
        "San Marino"
      ],
      "correctAnswer": 0
    },
    {
      "id": 6,
      "question": "Cine a pictat 'Mona Lisa'?",
      "answers": [
        "Vincent van Gogh",
        "Leonardo da Vinci",
        "Pablo Picasso",
        "Claude Monet"
      ],
      "correctAnswer": 1
    },
    {
      "id": 7,
      "question": "Care este cel mai lung fluviu din lume?",
      "answers": [
        "Nil",
        "Amazon",
        "Yangtze",
        "Mississippi"
      ],
      "correctAnswer": 1
    },
    {
      "id": 8,
      "question": "În ce an a avut loc primul zbor al fraților Wright?",
      "answers": [
        "1903",
        "1899",
        "1912",
        "1905"
      ],
      "correctAnswer": 0
    },
    {
      "id": 9,
      "question": "Ce gaz constituie cea mai mare parte din atmosfera Pământului?",
      "answers": [
        "Oxigen",
        "Dioxid de carbon",
        "Azot",
        "Hidrogen"
      ],
      "correctAnswer": 2
    },
    {
      "id": 10,
      "question": "Care este cel mai înalt munte din lume?",
      "answers": [
        "K2",
        "Kangchenjunga",
        "Lhotse",
        "Everest"
      ],
      "correctAnswer": 3
    },
    {
      "id": 11,
      "question": "În ce an a căzut Zidul Berlinului?",
      "answers": [
        "1987",
        "1989",
        "1991",
        "1993"
      ],
      "correctAnswer": 1
    },
    {
      "id": 12,
      "question": "Ce element chimic are simbolul 'O'?",
      "answers": [
        "Osmium",
        "Oxigen",
        "Oganesson",
        "Oxygenium"
      ],
      "correctAnswer": 1
    },
    {
      "id": 13,
      "question": "Care este capitala Japoniei?",
      "answers": [
        "Beijing",
        "Seoul",
        "Tokyo",
        "Bangkok"
      ],
      "correctAnswer": 2
    },
    {
      "id": 14,
      "question": "Ce animal este cunoscut pentru faptul că își schimbă culoarea?",
      "answers": [
        "Cameleon",
        "Octopus",
        "Foca",
        "Iepure"
      ],
      "correctAnswer": 0
    },
    {
      "id": 15,
      "question": "Care este cel mai mare ocean de pe Pământ?",
      "answers": [
        "Atlantic",
        "Indian",
        "Pacific",
        "Arctic"
      ],
      "correctAnswer": 2
    }
]

const quizContext = createContext();

const initialState ={
    isSelected: false,
    questionsOnScreen: [0,1,2,3,4],
    userAnswers: [],
    idQuestions: 1,
    index: null,
    questions: fakeQuestions,
    isLoading: false,
    currentQuizz: '',
    points: null,
}

function reducer(state, action){
    switch (action.type){
        case 'quiz/select':
            return {...state, isSelected: true, currentQuizz: action.payload }
        case 'quiz/questions':
            return {...state, questions: action.payload}
        case 'quiz/next':
            return {...state, questionsOnScreen: state.questionsOnScreen.map(item => item + 5)}
        case 'quiz/answer':
          
            return {...state, userAnswers: [...state.userAnswers, action.payload]}
        
            default: throw new Error('not good')
    }
}

function ProviderQuizz({children}){
    const [{isSelected,currentQuizz,idQuestions,
         questions,questionsOnScreen,userAnswers}, dispatch] = useReducer(reducer, initialState);
    
      console.log(userAnswers);
    // useEffect(function(){
    //     async function data(){
    //        const questions = await getQuestions(idQuestions)
    //         dispatch({type: 'quiz/questions', payload: questions})
            
    //     }
    //    data();
    // },[idQuestions])

    return <quizContext.Provider value={{isSelected,
        currentQuizz,
        questions,
        questionsOnScreen,
        dispatch}}>
        {children}
    </quizContext.Provider>
}

function useQuiz(){
    const context = useContext(quizContext);
    if(!context){
        throw new Error('useQuiz must be used within a QuizProvider');
    }
    return context;
}

export {ProviderQuizz, useQuiz}

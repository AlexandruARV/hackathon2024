const API_URL = "d";
const API_QUESTIONS = 'http://localhost:3001/';

export async function loginUser(user) {
  try {
    const res = await fetch(`${API_URL}/login`, {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!res.ok) throw Error();
    const { data } = await res.json();
    return data;
  } catch {
    throw Error("Failed login");
  }
}

export async function getQuestions(idQuestions){
  try{
    const res = await fetch(`${API_QUESTIONS}questions${idQuestions}`);
    if(!res.ok) throw Error();
    const {data} = await res.json();
    return data;
  }catch{
    throw Error("Failed to get questions");
  }

}
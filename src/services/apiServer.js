const API_URL = "d";

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

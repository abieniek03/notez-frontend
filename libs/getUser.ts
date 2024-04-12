export const getUser = async (id: string = "") => {
  if (id != "") {
    const res = await fetch(`http://localhost:8000/users/${id}`, {
      cache: "no-store",
    });
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    return await res.json();
  }
};

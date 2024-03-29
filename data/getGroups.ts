export const getGroups = async () => {
  const res = await fetch("http://localhost:8000/groups", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return await res.json();
};

export default async function getAllUsers() {
    const response = await fetch("jsonplaceholder.typicode.com/users");

    if (!response.ok) throw new Error("Failed to fetch JSON.");

    return response.json();
}

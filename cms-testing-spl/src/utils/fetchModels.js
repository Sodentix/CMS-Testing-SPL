export async function fetchModels(quantity = 10) {
  try {
    const response = await fetch(`https://fakerapi.it/api/v2/persons?_quantity=${quantity}`);
    const data = await response.json();

    const models = data.data.map(person => {
      return {
        modelName: `${person.firstname} ${person.lastname}`,
        modelDescription: "lorem ipsum",
        imageUrl: `https://picsum.photos/200/300?random=${Math.floor(Math.random() * 10000)}`
      };
    });

    return models;
  } catch (error) {
    console.error("Fehler beim Laden der Modelle:", error);
    return [];
  }
}

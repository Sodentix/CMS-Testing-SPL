export async function fetchModels(quantity = 10) {
  try {
    const response = await fetch(`https://fakerapi.it/api/v2/persons?_quantity=${quantity}`);
    const data = await response.json();

    const models = data.data.map(person => {
      return {
        modelName: `${person.firstname} ${person.lastname}`,
        modelDescription: "Lorem ipsum dolor sit amet consectetur. Quis vitae ut quam urna ut turpis. Nunc imperdiet augue dis suspendisse.",
        imageUrl: `https://picsum.photos/294/300?random=${Math.floor(Math.random() * 10000)}`
      };
    });

    return models;
  } catch (error) {
    console.error("Fehler beim Laden der Modelle:", error);
    return [];
  }
}

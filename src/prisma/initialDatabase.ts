const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function seedDatabase() {
  try {
    // Crie instâncias dos modelos e insira dados no banco
    await prisma.games.createMany({
      data: [
        { name: "Roletas" },
        { name: "Bac Bo" },
        { name: "Dragon Tiger" },
        { name: "Crazy time" },
        { name: "Football Studio" },
        { name: "Mines" },
        { name: "Mines 3x" },
        { name: "Fortune Tiger" },
        { name: "Fortune Rabbit" },
        { name: "Fortune OX" },
        { name: "Fortune Mouse" },
        { name: "Aviator 1.5x" },
        { name: "Aviator 2x" },
        { name: "Aviator Velas Altas" },
        { name: "Spaceman 1.5x" },
        { name: "Spaceman 2.0x" },
        { name: "Spaceman Velas Altas" },
        // Adicione mais dados conforme necessário
      ],
    });

    await prisma.cardsNumbers.createMany({
      data: [
        { game: 1, day: 17, validity: 13, green: 45, red: 2 },
        { game: 2, day: 17, validity: 13, green: 55, red: 1 },
        { game: 3, day: 17, validity: 13, green: 60, red: 2 },
        { game: 4, day: 17, validity: 13, green: 65, red: 2 },
        { game: 5, day: 17, validity: 13, green: 70, red: 3 },
        { game: 6, day: 17, validity: 13, green: 75, red: 2 },
        { game: 7, day: 17, validity: 13, green: 80, red: 2 },
        { game: 8, day: 17, validity: 13, green: 85, red: 1 },
        { game: 9, day: 17, validity: 13, green: 90, red: 2 },
        { game: 10, day: 17, validity: 13, green: 95, red: 2 },
        { game: 11, day: 17, validity: 13, green: 100, red: 3 },
        { game: 12, day: 17, validity: 13, green: 105, red: 2 },
        { game: 13, day: 17, validity: 13, green: 110, red: 2 },
        { game: 14, day: 17, validity: 13, green: 115, red: 1 },
        { game: 15, day: 17, validity: 13, green: 120, red: 2 },
        { game: 16, day: 17, validity: 13, green: 125, red: 2 },
        { game: 17, day: 17, validity: 13, green: 130, red: 2 },

        // Adicione mais dados conforme necessário
      ],
    });

    // Feche a conexão com o Prisma
    await prisma.$disconnect();
  } catch (error) {
    console.error("Erro ao adicionar dados iniciais:", error);
  }
}

seedDatabase();

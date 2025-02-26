//TODO: Camiar en un futuro por img din , o algo neon ;
export const TURNS = {
    p1: '🔴',
    p2: '🔵 ' 
//! OTRAS OP DE FICHAS: ⚪ , 🟠​ , 🟡 , ​🟢​ , 🟣 , ​🟤 , ​⚫ 
//! OTRAS OP DE FICHAS: 🧿 , ​🎱​ , 🌀 , ​❄️ , ​🍪 , ​🍩 , ​🍥​ , 🥝

};


export const WINNER_COMBOS = [];

// Generar combinaciones
for (let row = 0; row < 6; row++) {
  for (let col = 0; col < 7; col++) {
        let index = row * 7 + col;

    // Horizontales →
    if (col <= 3) {
        WINNER_COMBOS.push([index, index + 1, index + 2, index + 3]);
    }

    // Verticales ↓
    if (row <= 2) {
        WINNER_COMBOS.push([index, index + 7, index + 14, index + 21]);
    }

    // Diagonal ↘
    if (row <= 2 && col <= 3) {
        WINNER_COMBOS.push([index, index + 8, index + 16, index + 24]);
    }

    // Diagonal ↙
    if (row <= 2 && col >= 3) {
        WINNER_COMBOS.push([index, index + 6, index + 12, index + 18]);
    }
  }
}

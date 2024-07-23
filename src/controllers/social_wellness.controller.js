import { Tip } from "../models/Social_wellness.model.js";

let listTips = [
    { "tip": "Pratique a meditação diária", "description": "A meditação pode ajudar a reduzir o estresse e aumentar o foco e a clareza mental.", "category": "bem-estar" },
    { "tip": "Mantenha uma rotina de exercícios", "description": "A atividade física regular pode melhorar o humor e reduzir a ansiedade.", "category": "bem-estar"},
    { "tip": "Durma bem", "description": "O sono adequado é essencial para o bem-estar mental e físico.", "category": "bem-estar" },
    { "tip": "Conecte-se com outras pessoas", "description": "Manter relações sociais saudáveis pode fornecer apoio emocional e diminuir sentimentos de solidão.", "category": "bem-estar" },
    { "tip": "Pratique a gratidão", "description": "A gratidão pode aumentar a felicidade e a satisfação com a vida.", "category": "bem-estar" },

    { "tip": "Meditação Mindfulness", "description": "Reserve um tempo todos os dias para focar na respiração e estar presente no momento. Sente-se em um lugar tranquilo e observe seus pensamentos sem julgamento.", "category": "Meditação"},
    { "tip": "Meditação Guiada", "description": "Encontre gravações de meditações guiadas que possam ajudá-lo a seguir uma prática estruturada. Existem muitas disponíveis gratuitamente em plataformas como YouTube.", "category": "Meditação" },
    { "tip": "Meditação com Foco na Respiração", "description": "Concentre-se na sua respiração. Inspire e expire profundamente, prestando atenção a cada movimento do ar entrando e saindo dos seus pulmões.", "category": "Meditação" },
    { "tip": "Meditação com Mantras", "description": "Escolha uma palavra ou frase que tenha significado para você e repita-a silenciosamente durante a meditação. Isso pode ajudar a focar a mente e trazer um senso de calma.", "category": "Meditação" },
    { "tip": "Meditação de Visualização", "description": "Imagine um lugar tranquilo e sereno, como uma praia ou um jardim. Visualize-se nesse lugar, explorando cada detalhe e permitindo-se relaxar." },

    { "tip": "Caminhada", "description": "A caminhada regular pode melhorar o humor e a saúde cardiovascular.", "category": "exercicio" },
    { "tip": "Yoga", "description": "O yoga combina exercícios físicos com técnicas de respiração e meditação.", "category": "exercicio"},
    { "tip": "Ciclismo", "description": "Andar de bicicleta é uma ótima maneira de melhorar a aptidão cardiovascular e reduzir o estresse.", "category": "exercicio"},
    { "tip": "Natação", "description": "A natação é um exercício de baixo impacto que pode melhorar a saúde geral e reduzir a ansiedade.", "category": "exercicio"},
    { "tip": "Dança", "description": "A dança é uma atividade divertida que pode melhorar o humor e a forma física.", "category": "exercicio"}
]

export const getWellness = (category) =>{
    return listTips.filter(({ category }) => category == 'bem-estar')
}

export const getMeditation = (category) =>{
    return listTips.filter(({ category }) => category == 'Meditação')
}


export const getExercicios = (category) =>{
    return listTips.filter(({ category }) => category == 'exercicio')
}
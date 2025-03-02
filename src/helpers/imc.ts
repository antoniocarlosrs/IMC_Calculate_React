export type Level = {
    title: string;
    color: string;
    icon: 'down' | 'up';
    imc: number[] 
    yourIMC?: number;
}

export const levels: Level[] = [
    { title: "Abaixo do Peso", color: "#96A3AB", icon: "down", imc: [0, 18.5] },
    { title: "Normal", color: "#0EAD69", icon: "up", imc: [18.6, 24.9] },
    { title: "Sobrepeso", color: "#E2B039", icon: "down", imc: [25, 30] },
    { title: "Obsidade", color: "#C3423F", icon: "down", imc: [30.1, 99] },
];

// Calcular o IMC
export const calculateImc = (height: number, wieight: number) => {
    const imc = wieight / (height * height);

    for(const i in levels) {
        if(imc >= levels[i].imc[0] && imc < levels[i].imc[1]) {
            levels[i].yourIMC = parseFloat(imc.toFixed(2));
            return levels[i];
        }
    }

    return null;
};

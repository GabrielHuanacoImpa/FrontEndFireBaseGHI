// es una interface que permite que haya consistencia de tipo de datos
export interface Idioma {
    id?: number; //cuando creamos podria no venir
    habilidadI: string;
    nivelI: number;
    //reminder: number;
    persona_id: number;
}
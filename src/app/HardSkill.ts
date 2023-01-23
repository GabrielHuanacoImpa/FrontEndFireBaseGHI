// es una interface que permite que haya consistencia de tipo de datos
export interface HardSkill {
    id?: number; //cuando creamos podria no venir
    habilidadH: string;
    nivelH: number;
    //reminder: boolean;
    persona_id: number;
}
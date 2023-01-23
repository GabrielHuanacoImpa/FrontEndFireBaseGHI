// es una interface que permite que haya consistencia de tipo de datos
export interface Experiencia {
    /*
    id?: number; //cuando creamos podria no venir  
    tipo: string;
    tiempo: string;
    fecha_experiencia: string;
    Lugar: string;
    fecha_ultima_actualizacion: string;
    image_logo: string;
    reminder: boolean;
    */

 
    id?: number; //cuando creamos podria no venir 
    nombre_empresa: string;
    es_trabajo_actual : number;
    descripcion : string;
    tipo: string;
    fecha_inicio : Date;
    fecha_fin : Date;
    lugar : string;
    fecha_ultima_actualizacion: Date;
    image_logo : string;
    reminder: number;
    persona_id : number;

}


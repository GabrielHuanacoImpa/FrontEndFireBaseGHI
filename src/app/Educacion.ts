export interface Educacion {
    /*
    id?: number; //cuando creamos podria no venir  
    institucion: string;
    titulo: string;
    id_domicilio: string;
    fecha_carrera: string;
    image_institucion: string;
    reminder: boolean;
    */
    id?: number; //cuando creamos podria no venir 
    institucion: string;
    titulo: string;
    domicilio: string;
    fecha_inicio: Date;
    fecha_fin: Date;
    image_institucion: string;
    ultima_actualizacion: Date;
    reminder: number;
    persona_id: number;

}
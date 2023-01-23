export interface Proyecto {
    /*
    id?: number; //cuando creamos podria no venir  
    nombre_proyecto: string;
    fecha_realizacion: string;
    descripcion: string;
    link: string;
    imagenes: string;
    id_domicilio: string;
    tipo_ocupacion: string;
    ultima_actualizacion: string;
    image_logo: string;
    reminder: boolean;
    */
    id?: number; //cuando creamos podria no venir  
    nombre_proyecto: string;
    fecha_inicioP: Date;
    fecha_finP:Date;
    descripcionP: string;
    link: string;
    url_imagenes: string;
    domicilio: string;
    tipo_ocupacion: string;
    ultima_actualizacion: Date;
    url_image_logo: string;
    reminder: number;
    persona_id: number;


}
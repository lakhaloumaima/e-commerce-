export class Materiel {
    id? : number;
    nom? : string;
    prix? : number;
    image? : String ;
   
constructor(args: Materiel = {}) {
    this.id=args.id;  
    this.nom = args.nom;
    this.prix = args.prix;
    this.image = args.image;
}
}

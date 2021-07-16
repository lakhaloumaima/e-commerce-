import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class ConnexionService {
  connecte : boolean = false;
  

  constructor(private router: Router) { }
  seConnecter (l,m)
  {
    if (l=="oumaima" && m =="oumaima")
    {
      this.connecte=true ;

      this.router.navigate(['/admin']);
   
    }
    else
    {
      alert("Login ou mot de passe incorrectes");
    }
  }
}

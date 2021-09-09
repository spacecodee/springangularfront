import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Persona} from 'src/app/model/Persona';
import {ServiceService} from "../../Service/service.service";

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  // @ts-ignore
  personaModel: Persona = new Persona();

  constructor(private router: Router, private service: ServiceService) {
  }

  ngOnInit(): void {
  }

  afterCreate(name: string, latName: string): void {
    this.personaModel = new Persona(name, latName);
    this.submit(this.personaModel);
  }

  submit(persona: Persona) {
    console.log(persona);
    console.log("***********")
    this.service.createPersona(persona).subscribe(data => {
      alert("Agregado");
      this.router.navigate(['list']);
    });
  }
}

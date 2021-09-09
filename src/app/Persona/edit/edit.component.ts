import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Persona} from 'src/app/model/Persona';
import {ServiceService} from 'src/app/Service/service.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  personaModel: Persona = new Persona();

  constructor(private router: Router, private service: ServiceService) {
  }

  ngOnInit(): void {
    this.edit(this.personaModel);
  }

  edit(persona: Persona) {
    const idPersona = localStorage.getItem('id');
    // @ts-ignore
    persona.id = +idPersona;

    this.service.getPersonaById(persona).subscribe(
      data => {
        // @ts-ignore
        this.personaModel = data
      }
    )
  }

  update(persona: Persona) {
    this.service.updatePersona(persona).subscribe(
      data => {
        this.personaModel = data;
        alert("actualizado");
        this.router.navigate(['list']);
      }
    )
  }
}

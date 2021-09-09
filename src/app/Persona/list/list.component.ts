import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Persona} from 'src/app/model/Persona';
import {ServiceService} from '../../Service/service.service'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  personas: Persona[] | undefined;

  constructor(private service: ServiceService, private router: Router) {
  }

  ngOnInit(): void {
    this.service.getPersonas().subscribe((data) => this.personas = data);
  }

  edit(persona: Persona) {
    localStorage.setItem('id', persona.id.toString());
    this.router.navigate(['edit']);
  }

  delete(persona: Persona) {
    this.service.deletePersona(persona).subscribe(data => {
      this.personas = this.personas?.filter(
        p => p !== persona
      );
      alert("Eliminado");
    })
  }
}

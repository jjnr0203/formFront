import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {
  formulario: FormGroup 
  constructor(protected formBuilder:FormBuilder){
    this.formulario = this.formBuilder.group({
      name:[null, Validators.required],
      email:"",
      adress:"",
      cellphone: "",
      
    });

  }

}

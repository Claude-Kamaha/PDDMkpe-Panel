import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormInputBase } from '../form-input';

@Component({
  selector: 'app-dynanic-form-input',
  templateUrl: './dynanic-form-input.component.html',
  styleUrls: ['./dynanic-form-input.component.scss']
})
export class DynanicFormInputComponent {
  @Input()
  field!: FormInputBase<string | boolean | null>;
  @Input()
  form!: FormGroup;

  hasFieldError(): any {
    return (
      this.form.get(this.field.key)?.invalid &&
      (this.form.get(this.field.key)?.dirty ||
        this.form.get(this.field.key)?.touched)
    );
  }
}


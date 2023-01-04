import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormInputBase } from '../form-input';

@Component({
  selector: 'app-dynanic-form',
  templateUrl: './dynanic-form.component.html',
  styleUrls: ['./dynanic-form.component.scss']
})
export class DynanicFormComponent {
  @Input() formFields: FormInputBase<string | boolean>[] = [];

  form!: FormGroup;

  ngOnInit(): void {
    this.toFormGroup();
  }
  // Returns whether the form exists and has been modified or not as a helper for the confirmation dialog
  hasFormUnsavedChanges(): boolean {
    return this.form && this.form.dirty;
  }

  onSubmit(): void {
    this.form.markAllAsTouched();

    if (this.form.invalid) return;
    alert('Submit form!');
  }
  private toFormGroup(): void {
    const group: any = {};

    this.formFields.forEach((field: any) => {
      group[field.key] = field.required
        ? new FormControl(field.value || '', [
          ...field.validators,
          Validators.required,
        ])
        : new FormControl(field.value || '', field.validators);
    });
    this.form = new FormGroup(group);
  }
}

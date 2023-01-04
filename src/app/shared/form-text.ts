import { FormInputBase } from './form-input';

export class FormTextbox extends FormInputBase<string> {
  override controlType = 'textbox';
}

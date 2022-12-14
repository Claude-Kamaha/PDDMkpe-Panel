import { Component } from '@angular/core';
import { FormInputBase } from './shared/form-input';
import { FormTextbox } from './shared/form-text';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'PDDMkpe-Panel';

  myForm: FormInputBase<string | boolean>[] = [
    new FormTextbox({
      key: 'title',
      label: 'Title',
      type: 'text',
      required: true,
    }),

    new FormTextbox({
      key: 'name',
      label: 'Name',
      type: 'text',
      required: true,
    }),

    // new FormDropdown({
    //   key: 'animal',
    //   label: 'Favorite animal',
    //   options: [
    //     { key: 'cat', value: 'Cat' },
    //     { key: 'dog', value: 'Dog' },
    //   ],
    // }),

    // new FormCheckbox({
    //   key: 'readAgreement',
    //   label: 'Read agreement?',
    //   required: true,
    // }),
  ];
}

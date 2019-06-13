// show-errors.component.ts
import { Component, Input } from '@angular/core';
import { AbstractControlDirective, AbstractControl } from '@angular/forms';


@Component({
 // tslint:disable-next-line:component-selector
 selector: 'show-errors',
 // tslint:disable-next-line:max-line-length
 template: `<span class="help-block" ><ul *ngIf="shouldShowErrors()"><li style="color: red" *ngFor="let error of listOfErrors()">{{error}}</li></ul></span> `,
})
export class ShowErrorsComponent {
/*<ul *ngIf="shouldShowErrors()">
     <li style="color: red" *ngFor="let error of listOfErrors()">{{error}}</li>
   </ul>
 */
 private static readonly errorMessages = {
   'required': (params) => 'Esta campo é Obrigatório',
   'minlength': (params) => 'O numero minimo de caracteres é ' + params.requiredLength,
   'maxlength': (params) => 'O numero máximo de caracteres permitidos é ' + params.requiredLength,
   'pattern': (params) => 'O padrão requerido é ' + params.requiredPattern,
   'max': (params) => 'O valor maximo é '+ params.max,
   'min' : (params) => 'O valor minimo é' + params.min,
   'years': (params) => params.message,
   'countryCity': (params) => params.message,
   //'uniqueName': (params) => params.message,
   'telephoneNumbers': (params) => params.message,
   'telephoneNumber': (params) => params.message
 };

 @Input()
 private control: AbstractControlDirective | AbstractControl;

 shouldShowErrors(): boolean {
   return this.control &&
     this.control.errors && this.control.invalid &&
     this.control.touched/*(this.control.dirty || this.control.touched)*/;
 }

 listOfErrors(): string[] {
   return Object.keys(this.control.errors)
     .map(field => this.getMessage(field, this.control.errors[field]));
 }

 private getMessage(type: string, params: any) {
   return ShowErrorsComponent.errorMessages[type](params);
 }

}

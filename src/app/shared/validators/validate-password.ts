import { AbstractControl } from '@angular/forms';

export function MatchPassword(abstractControl: AbstractControl) {
    const password = abstractControl.get('newPassword').value;
    const confirmPassword = abstractControl.get('confirmPassword').value;
     if (password != confirmPassword) {
         abstractControl.get('confirmPassword').setErrors({
           MatchPassword: true
         })
    } else {
      return null
    }
  }

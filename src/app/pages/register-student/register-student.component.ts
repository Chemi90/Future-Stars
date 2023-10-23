import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-student',
  templateUrl: './register-student.component.html',
  styleUrls: ['./register-student.component.scss'],
  animations: [
    trigger('openClose', [
      state('true', style({ height: '*' })),
      state('false', style({ height: '0px' })),
      transition('false <=> true', [animate('0.20s ease')]),
    ]),
  ],
})
export class RegisterStudentComponent {
  isStep2 = false;
  url = '';
  iframeUrl!: SafeResourceUrl;
  videoEmbedCode: string = '';

  constructor(private router: Router, public sanitizer: DomSanitizer) {}

  incrustarVideo() {
    const tempurl = this.url.replace('watch?v=', '/embed/');
    this.iframeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(tempurl);
  }

  send() {
    this.router.navigate(['/register-success']);
  }
}

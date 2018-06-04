import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  text_max= 200;
  constructor() {}
  
  ngOnInit() {
    $(document).ready(function() {
      var text_max = 99;
      $('#textarea_feedback').html(text_max + ' characters remaining');
  
      $('#textarea').keyup(function() {
          var text_length = $('#textarea').val().length;
          var text_remaining = text_max - text_length;
  
          $('#textarea_feedback').html(text_remaining + ' characters remaining');
      });
  });
  }
}

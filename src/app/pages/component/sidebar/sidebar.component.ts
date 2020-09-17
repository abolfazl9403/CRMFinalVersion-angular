import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor() { }
  dropdownBtn = document.querySelector('.custom-dropdown');
  menuContent = document.querySelector('.custom-dropdown-content');
  ngOnInit(): void {
  }
  openDropdown(){
    this.dropdownBtn.addEventListener('click', () => {
      if ((this.menuContent as HTMLElement).style.display === ''){
        (this.menuContent as HTMLElement).style.display == 'block';
      }else {
        (this.menuContent as HTMLElement).style.display == '';
      }
    });
  }
}

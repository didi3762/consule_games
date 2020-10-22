import { Component, OnInit, ViewChild, TemplateRef, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'showmodal',
  templateUrl: './showmodal.component.html',
  styleUrls: ['./showmodal.component.css']
})
export class ShowmodalComponent {

  @ViewChild('modal_1') modal_1: TemplateRef<any>;
  @ViewChild('vc', {read: ViewContainerRef}) vc: ViewContainerRef;
  backdrop: any
  showDialog(){
      let view = this.modal_1.createEmbeddedView(null);
      this.vc.insert(view);
      this.modal_1.elementRef.nativeElement.previousElementSibling.classList.remove('fade');
      this.modal_1.elementRef.nativeElement.previousElementSibling.classList.add('modal-open'); 
      this.modal_1.elementRef.nativeElement.previousElementSibling.style.display = 'block';
      this.backdrop = document.createElement('DIV')
      this.backdrop.className = 'modal-backdrop';
      document.body.appendChild(this.backdrop)
  }
  
  closeDialog() {
      this.vc.clear()
      document.body.removeChild(this.backdrop)
  }

}

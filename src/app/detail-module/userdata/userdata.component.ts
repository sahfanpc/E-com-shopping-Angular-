import { Component } from '@angular/core';
import { DatasarviceService } from 'src/app/datasarvice.service';

@Component({
  selector: 'app-userdata',
  templateUrl: './userdata.component.html',
  styleUrls: ['./userdata.component.scss']
})
export class UserdataComponent {
constructor(private db:DatasarviceService){}
value:any;
ngOnInit():void{
  this.currentUserData();
  console.log(this.value);
  
}
currentUserData(){
 this.value= this.db.token[0]
}
}

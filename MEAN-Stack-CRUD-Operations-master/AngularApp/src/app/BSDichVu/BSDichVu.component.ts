
import { DichVuService } from '../shared/dichVu.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { BSDichVuService } from '../shared/BSDichVu.service';
import { BSDichVu } from '../shared/BSDichVu.model';
import { DichVu } from '../shared/dichVu.model';
import { BacSi } from '../shared/BacSi.model';
import { BacSiService } from '../shared/BacSi.service';

declare var M: any;

@Component({
  selector: 'app-BSDichVu',
  templateUrl: './BSDichVu.component.html',
  styleUrls: ['./BSDichVu.component.css'],
  providers: [BSDichVuService, DichVuService, BacSiService]
})
export class BSDichVuComponent implements OnInit {
  _DichVu: any;
  _BacSi: any;
  constructor(
    private BSDichVuService: BSDichVuService,
    private DichVuService: DichVuService,
    private BacSiService: BacSiService) { }

  ngOnInit() {
    this.resetForm();
    this.refreshBSDichVuList();
    this.getDichVuList();
    this.getBacSiList();
  }

  resetForm(form?: NgForm) {
    if (form)
      form.reset();
    this.BSDichVuService.selectedBSDichVu = {
      _id: "",
      maDichVu: "",
      maBacSi: "",
      tenDichVu: "",
      tenBacSi: "",
      donGiaDichVu: null
    }
  }

  onSubmit(form: NgForm) {
    if (form.value._id == "" || form.value._id == null) {
      this.BSDichVuService.postBSDichVu(form.value).subscribe((res) => {
        this.resetForm(form);
        this.refreshBSDichVuList();
        M.toast({ html: 'Saved successfully', classes: 'rounded' });
      });
    }
    else {
      this.BSDichVuService.putBSDichVu(form.value).subscribe((res) => {
        this.resetForm(form);
        this.refreshBSDichVuList();
        M.toast({ html: 'Updated successfully', classes: 'rounded' });
      });
    }
  }

  refreshBSDichVuList() {
    this.BSDichVuService.getBSDichVuList().subscribe((res) => {
      this.BSDichVuService.dsBSDichVu = res as BSDichVu[];
    });
    
  }
  getDichVuList(){
    this.DichVuService.getDichVuList().subscribe((res) =>{
      this.DichVuService.dsDichVu = res as DichVu[];
    })
  }
  getBacSiList() {
    this.BacSiService.getBacSiList().subscribe((res) => {
      this.BacSiService.BacSis = res as BacSi[];
    });
  }
  onEdit(BSDV: BSDichVu) {
    this.BSDichVuService.selectedBSDichVu = BSDV;
  }

  onDelete(_id: string, form: NgForm) {
    if (confirm('Are you sure to delete this record ?') == true) {
      this.BSDichVuService.deleteBSDichVu(_id).subscribe((res) => {
        this.refreshBSDichVuList();
        this.resetForm(form);
        M.toast({ html: 'Deleted successfully', classes: 'rounded' });
      });
    }
  }
  changeOptionService(maDichVu?: string){
    this._DichVu = this.DichVuService.dsDichVu.find( (t) => 
       t.maDichVu == maDichVu
     );
     this.BSDichVuService.selectedBSDichVu.tenDichVu = this._DichVu.tenDichVu;
   }
  changeOptionDoctor(maBacSi?: string){
    this._BacSi = this.BacSiService.BacSis.find( (t) => 
       t.MaBacSi == maBacSi
     );
     this.BSDichVuService.selectedBSDichVu.tenBacSi = this._BacSi.TenBacSi;
   }
}

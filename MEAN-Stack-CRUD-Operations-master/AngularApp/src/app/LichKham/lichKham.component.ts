import { Component, Injectable, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

import { LichKham } from '../shared/lichKham.model';
import { LichKhamService } from '../shared/lichKham.service';
import { BacSiService } from '../shared/BacSi.service';
import { BacSi } from '../shared/BacSi.model';

declare var M: any;

@Component({
  selector: 'app-lichKham',
  templateUrl: './lichKham.component.html',
  styleUrls: ['./lichKham.component.css'],
  providers: [LichKhamService, BacSiService]
})
export class LichKhamComponent implements OnInit {
  // @ViewChild('dt') table: Table;
  constructor(
    private lichKhamService: LichKhamService,
    private BacSiService: BacSiService) { }
_BacSi: any;
  danhSachGioKham:Array<Object> =[
    {
      name:"gio", value:"7:30"
    },
    {
      name:"gio", value:"8:00"
    },
    {
      name:"gio", value:"8:30"
    },
    {
      name:"gio", value:"9:00"
    },
    {
      name:"gio", value:"9:30"
    },
    {
      name:"gio", value:"10:00"
    },
    {
      name:"gio", value:"10:30"
    },
    {
      name:"gio", value:"11:00"
    },
    {
      name:"gio", value:"11:30"
    },
    {
      name:"gio", value:"14:30"
    },
    {
      name:"gio", value:"15:00"
    },
    {
      name:"gio", value:"15:30"
    },
    {
      name:"gio", value:"16:00"
    },
    {
      name:"gio", value:"16:30"
    },
    {
      name:"gio", value:"17:00"
    }

  ]
  ngOnInit() {
    this.resetForm();
    this.refreshLichKhamList();
    this.getBacSiList();

  }
  getBacSiList() {
    this.BacSiService.getBacSiList().subscribe((res) => {
      this.BacSiService.BacSis = res as BacSi[];
    });
  }
  resetForm(form?: NgForm) {
    if (form)
      form.reset();
    this.lichKhamService.selectedLichKham = {
      _id: "",
      maLichKham: "",
      maBacSi: "",
      tenBacSi: "",
      ngay: "",
      gio: "",
    }
  }

  onSubmit(form: NgForm) {
    if (form.value._id == "" || form.value._id == null) {
      this.lichKhamService.postLichKham(form.value).subscribe((res) => {
        this.resetForm(form);
        this.refreshLichKhamList();
        M.toast({ html: 'Saved successfully', classes: 'rounded' });
      });
    }
    else {
      this.lichKhamService.putLichKham(form.value).subscribe((res) => {
        this.resetForm(form);
        this.refreshLichKhamList();
        M.toast({ html: 'Updated successfully', classes: 'rounded' });
      });
    }
  }

  refreshLichKhamList() {
    this.lichKhamService.getLichKhamList().subscribe((res) => {
      this.lichKhamService.dsBSLichKham = res as LichKham[];
    });
  }

  onEdit(emp: LichKham) {
    this.lichKhamService.selectedLichKham = emp;
  }

  onDelete(_id: string, form: NgForm) {
    if (confirm('Are you sure to delete this record ?') == true) {
      this.lichKhamService.deleteLichKham(_id).subscribe((res) => {
        this.refreshLichKhamList();
        this.resetForm(form);
        M.toast({ html: 'Deleted successfully', classes: 'rounded' });
      });
    }
  }
  changeOptionDoctor(maBacSi?: string){
   this._BacSi = this.BacSiService.BacSis.find( (t) => 
      t.MaBacSi == maBacSi
    );
    console.log(this._BacSi);
     this.lichKhamService.selectedLichKham.tenBacSi = this._BacSi.TenBacSi;
  }
}

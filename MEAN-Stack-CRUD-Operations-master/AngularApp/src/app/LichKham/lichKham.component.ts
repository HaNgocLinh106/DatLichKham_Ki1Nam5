import { Component, Injectable, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { LichKham } from '../shared/lichKham.model';
import { LichKhamService } from '../shared/lichKham.service';

declare var M: any;

@Component({
  selector: 'app-lichKham',
  templateUrl: './lichKham.component.html',
  styleUrls: ['./lichKham.component.css'],
  providers: [LichKhamService]
})
export class LichKhamComponent implements OnInit {

  constructor(private lichKhamService: LichKhamService) { }

  ngOnInit() {
    this.resetForm();
    this.refreshLichKhamList();
  }

  resetForm(form?: NgForm) {
    if (form)
      form.reset();
    this.lichKhamService.selectedLichKham = {
      _id: "",
      maLichKham: "",
      maBacSi: "",
      ngay: "",
      gio: "",
    }
  }

  onSubmit(form: NgForm) {
    if (form.value._id == "") {
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
      this.lichKhamService.lichKhams = res as LichKham[];
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

}

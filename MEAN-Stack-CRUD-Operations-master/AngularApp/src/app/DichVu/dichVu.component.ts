import { Component, Injectable, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { DichVuService } from '../shared/dichVu.service';
import { DichVu } from '../shared/dichVu.model';

declare var M: any;

@Component({
  selector: 'app-dichVu',
  templateUrl: './dichVu.component.html',
  styleUrls: ['./dichVu.component.css'],
  providers: [DichVuService]
})

export class DichVuComponent implements OnInit {

  constructor(private dichVuService: DichVuService) { }

  ngOnInit() {
    this.resetForm();
    this.refreshDichVuList();
  }

  resetForm(form?: NgForm) {
    if (form)
      form.reset();
    this.dichVuService.selectedDichVu = {
      _id: "",
      maDichVu: "",
      tenDichVu: ""
    }
  }

  onSubmit(form: NgForm) {
    if (form.value._id == "") {
      this.dichVuService.postDichVu(form.value).subscribe((res) => {
        this.resetForm(form);
        this.refreshDichVuList();
        M.toast({ html: 'Saved successfully', classes: 'rounded' });
      });
    }
    else {
      this.dichVuService.putDichVu(form.value).subscribe((res) => {
        this.resetForm(form);
        this.refreshDichVuList();
        M.toast({ html: 'Updated successfully', classes: 'rounded' });
      });
    }
  }

  refreshDichVuList() {
    this.dichVuService.getDichVuList().subscribe((res) => {
      this.dichVuService.dsDichVu = res as DichVu[];
    });
  }

  onEdit(emp: DichVu) {
    this.dichVuService.selectedDichVu = emp;
  }

  onDelete(_id: string, form: NgForm) {
    if (confirm('Are you sure to delete this record ?') == true) {
      this.dichVuService.deleteDichVu(_id).subscribe((res) => {
        this.refreshDichVuList();
        this.resetForm(form);
        M.toast({ html: 'Deleted successfully', classes: 'rounded' });
      });
    }
  }

}

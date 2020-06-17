import {Component, EventEmitter, Input, OnInit, Output, OnChanges, SimpleChanges} from '@angular/core';
import { FormControl} from '@angular/forms';
import { startWith, map} from 'rxjs/operators';
import {Observable} from 'rxjs';
@Component({
  selector: 'app-custom-dropdown',
  templateUrl: './custom-dropdown.component.html',
  styleUrls: ['./custom-dropdown.component.scss']
})
export class CustomDropdownComponent implements OnInit, OnChanges {
  @Input() lists: any[] = []; 
  @Input() placeholeder: string;
  @Input() addNewList = true;
  @Input() propName: string;
  @Input() selectedlist: any = {};
  @Input() propIdKey: string;
  @Output() selectedId  = new EventEmitter<number>();
  @Output() onSelect = new EventEmitter();
  @Output() onAdd = new EventEmitter();
  searchCtrl = new FormControl();
  filteredData: Observable<any[]>;

  constructor() {
    this.filteredData = this.searchCtrl.valueChanges
    .pipe(
      startWith(''),
      map(value => value ? this._filterData(value) : this.lists.slice())
    );
   }

  ngOnInit() {
    if (this.selectedlist && this.selectedlist[this.propIdKey]) {
      this.searchCtrl.patchValue(this.selectedlist[this.propName]);
      this.onSelect.emit(this.lists.find(list => list[this.propIdKey] === this.selectedlist[this.propName]));
    }
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.filteredData = this.searchCtrl.valueChanges
    .pipe(
      startWith(''),
      map(value => value ? this._filterData(value) : this.lists.slice())
    );
  }

  _filterData(value: string) {
    const filterValue = value.toLowerCase();
    return this.lists.filter(list => list[this.propName].toLowerCase().indexOf(filterValue) === 0);
  }
  createNewList() {
    this.onAdd.emit(this.searchCtrl.value);
  }

  onSelectList(list: any) {
    this.onSelect.emit(list);
    this.searchCtrl.patchValue(list[this.propName]);
  }

}

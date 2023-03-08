import { Component, EventEmitter, Input, Output } from '@angular/core';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'header-filter',
  templateUrl: './header-filter.component.html',
  styleUrls: ['./header-filter.component.scss']
})
export class HeaderFilterComponent {
  faMagnifyingGlass = faMagnifyingGlass
  @Input() isHeaderFilterActive!: boolean
  @Output() toggleHeaderFilter = new EventEmitter<void>()
  modalNav = ''
  searchFilter = ''


  onToggleHeaderFilter() {
    this.toggleHeaderFilter.emit()
  }

  setModalNav(val: string) {
    this.modalNav = val
  }

  onWhereClick() {
    if(this.searchFilter)  this.setModalNav('search-place-modal')
    else this.setModalNav('region-modal')
  }
}

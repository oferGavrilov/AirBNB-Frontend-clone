import { Component, EventEmitter, Output } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

interface Language {
  language: string
  country: string
  isSuggested: boolean
  currLang: string
}

@Component({
  selector: 'language-modal',
  templateUrl: './language-modal.component.html',
  styleUrls: ['./language-modal.component.scss']
})
export class languageModalComponent {

  @Output() onToggleLanguageModal = new EventEmitter()
  constructor(private translateService: TranslateService) {
    
  }

  languages = [
    { language: 'עברית', country: 'ישראל', isSuggested: true, currLang: 'he' },
    { language: 'English', country: 'United States', isSuggested: true, currLang: 'en' },
    { language: 'Deutsch', country: 'Deutschland', isSuggested: false, currLang: 'de' },
    { language: 'Français', country: 'France', isSuggested: false, currLang: 'fr' },
    { language: 'Italiano', country: 'Italia', isSuggested: false, currLang: 'it' },
    { language: 'Español', country: 'España', isSuggested: false, currLang: 'es' },
    { language: 'Русский', country: 'Россия', isSuggested: false, currLang: 'ru' },
    { language: 'عربيه', country: 'المملكة العربية السعودية', isSuggested: false, currLang: 'ar' },
  ]

  get Suggested() {
    return this.languages.filter(language => language.isSuggested)
  }

  get UnSuggested() {
    return this.languages.filter(language => !language.isSuggested)
  }

  isActive(lang: Language) {
    return lang.currLang === this.translateService.currentLang
  }

  onSetLang(lang: Language) {
    this.translateService.use(lang.currLang)
    this.onCloseModal()
  }

  onCloseModal() {
    this.onToggleLanguageModal.emit()
  }
}

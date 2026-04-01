// pages/DropdownListPage.ts
import { expect, type Locator, type Page } from '@playwright/test';

export class DropdownListPage {
  // On définit les types avec 'readonly' pour la sécurité
  readonly page: Page;
  readonly dropdownElement: Locator;

  constructor(page: Page) {
    this.page = page;
    
    // On cible la liste déroulante par son ID 'dropdown'
    this.dropdownElement = page.locator('#dropdown');
    
  }

  async goto() {
    // S'assurer que la baseURL est bien "https://the-internet.herokuapp.com" dans ton playwright.config.ts
    await this.page.goto('/dropdown');
  }

  async choisirOption(valeurOuTexte: string) {
    // Playwright permet de sélectionner par le texte visible ou par la "value"
    await this.dropdownElement.selectOption(valeurOuTexte);
  }

  async verifierOptionSelectionnee(texteAttendu: string) {
    // On vérifie que la valeur actuellement sélectionnée est la bonne
    await expect(this.dropdownElement).toHaveValue(texteAttendu);
  }

}
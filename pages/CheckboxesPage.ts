// pages/CheckboxesPage.ts
import { expect, type Locator, type Page } from '@playwright/test';

export class CheckboxesPage {
  // On définit les types avec 'readonly' pour la sécurité
  readonly page: Page;
  readonly checkbox1: Locator;
  readonly checkbox2: Locator;

  constructor(page: Page) {
    this.page = page;
    
  // On utilise nth(0) et nth(1) car les cases n'ont pas d'ID ou de label unique simple
    this.checkbox1 = page.locator('input[type="checkbox"]').nth(0);
    this.checkbox2 = page.locator('input[type="checkbox"]').nth(1);
    
  }

  async goto() {
    // S'assurer que la baseURL est bien "https://the-internet.herokuapp.com" dans ton playwright.config.ts
    await this.page.goto('/checkboxes');
  }

  async cocherCheckbox1() {
    // .check() est plus intelligent que .click() : 
    // il ne fait rien si la case est déjà cochée !
    await this.checkbox1.check();
  }

  async cocherCheckbox2() {
    await this.checkbox2.check();
  }

  async decocherCheckbox1() {
    await this.checkbox1.uncheck();
  }

  async decocherCheckbox2() {
    await this.checkbox2.uncheck();
  }

  async verifierEtats_Doit_EtreCocher() {
    await expect(this.checkbox1).toBeChecked();
  }
  async verifierEtats_NeDoitpas_EtreCocher() {
    await expect(this.checkbox1).not.toBeChecked();
  }

}
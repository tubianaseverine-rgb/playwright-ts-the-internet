// pages/AddRemoveElementsPage.ts
import { expect, type Locator, type Page } from '@playwright/test';

export class AddRemoveElementsPage {
  // On définit les types avec 'readonly' pour la sécurité
  readonly page: Page;
  readonly buttonAdd: Locator;
  readonly buttonDelete: Locator;

  constructor(page: Page) {
    this.page = page;
    
    // Définition des sélecteurs via les Locators recommandés
    this.buttonAdd = page.getByRole('button', { name: 'Add Element' });
    // On ajoute .first() pour être sûr de ne cibler qu'un seul bouton même s'il y en a plein
    this.buttonDelete = page.getByRole('button', { name: 'Delete' }).first();
    
  }

  async goto() {
    // S'assurer que la baseURL est bien "https://the-internet.herokuapp.com" 
    // dans ton playwright.config.ts
    await this.page.goto('/add_remove_elements/');
  }

  async cliquerButtonAdd() {
    await this.buttonAdd.click();
  }

  async verifierAffichageButtonDelete() {
    // Assertion web-first : attend automatiquement que l'élément soit visible
    await expect(this.buttonDelete).toBeVisible();
  }

  async cliquerButtonARemove() {
    await this.buttonDelete.click();
  }

  async verifierDisparitionButtonDelete() {
    // Assertion cruciale : vérifie que l'élément n'est plus dans le DOM
    await expect(this.buttonDelete).toBeHidden();
  }

}
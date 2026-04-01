// tests/DropdownList.spec.ts
import { test } from '@playwright/test';
import { DropdownListPage } from '../pages/DropdownListPage';

// Utilisation de backticks ( ` ) pour éviter les soucis avec l'apostrophe dans "Tests d'éléments"
test.describe(`Tests des dropdown List`, () => {

  test('Sélectionner une valeur dans une liste', async ({ page }) => {
    // Initialisation du POM
    const dropdownListPage = new DropdownListPage(page);

    // Navigation
    // Note : assure-toi que ta baseURL dans playwright.config.ts est bien définie
    await dropdownListPage.goto();

   // 1. Sélectionner l'Option 1 (sa value est "1")
    await dropdownListPage.choisirOption('1');
    await dropdownListPage.verifierOptionSelectionnee('1');
   
   // 2. Sélectionner l'Option 2 (sa value est "2")
    await dropdownListPage.choisirOption('2');
    await dropdownListPage.verifierOptionSelectionnee('2');
 
  });

});
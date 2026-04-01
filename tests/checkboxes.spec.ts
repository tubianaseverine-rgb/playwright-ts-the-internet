// tests/AddRemoveElements.spec.ts
import { test } from '@playwright/test';
import { CheckboxesPage } from '../pages/CheckboxesPage';

// Utilisation de backticks ( ` ) pour éviter les soucis avec l'apostrophe dans "Tests d'éléments"
test.describe(`Tests des checkboxes`, () => {

  test('Cocher les 2 cases, puis décocher les 2 cases', async ({ page }) => {
    // Initialisation du POM
    const checkboxesPage = new CheckboxesPage(page);

    // Navigation
    // Note : assure-toi que ta baseURL dans playwright.config.ts est bien définie
    await checkboxesPage.goto();

   // Action : Modifier les états
   await checkboxesPage.cocherCheckbox1();

  // Assertion : Vérifier le résultat si les cases sont cochées
  await checkboxesPage.verifierEtats_Doit_EtreCocher();

   // Action : Modifier les états
   await checkboxesPage.decocherCheckbox1();

  // Assertion : Vérifier le résultat si les cases ne sont pas cochées
  await checkboxesPage.verifierEtats_NeDoitpas_EtreCocher();

  });

});
// tests/AddRemoveElements.spec.ts
import { test } from '@playwright/test';
import { AddRemoveElementsPage } from '../pages/AddRemoveElementsPage';

// Utilisation de backticks ( ` ) pour éviter les soucis avec l'apostrophe dans "Tests d'éléments"
test.describe(`Tests d'ajouts et suppressions d'éléments`, () => {

  test('Ajouter et vérifier l\'affichage du bouton Delete', async ({ page }) => {
    // Initialisation du POM
    const addRemoveElementsPage = new AddRemoveElementsPage(page);

    // Navigation
    // Note : assure-toi que ta baseURL dans playwright.config.ts est bien définie
    await addRemoveElementsPage.goto();

    // Action : Ajout d'un élément
    await addRemoveElementsPage.cliquerButtonAdd();

    // Assertion : Vérification via la méthode définie dans la classe
    await addRemoveElementsPage.verifierAffichageButtonDelete();
    
    // Action : Suppression d'un élément
    await addRemoveElementsPage.cliquerButtonARemove();

    // Vérification : Absence
    await addRemoveElementsPage.verifierDisparitionButtonDelete();

  });

});
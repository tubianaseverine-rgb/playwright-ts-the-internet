// ajouter un expert dans import ligne 2 si on retire les commentaires
import { test } from '@playwright/test';
import { IframePage } from '../pages/IframePage';

test.describe('Tests avec Page Object Model', () => {

  test('Manipulation de l editor via le POM', async ({ page }) => {
    // 1. Initialisation de la page via ta classe
    const iframePage = new IframePage(page);

    // 2. Aller sur la page (méthode goto de ta classe)
    await iframePage.goto();

    // 3. Utiliser ta méthode pour écrire (plus besoin de connaître l'ID de l'iframe ici !)
    //const message = 'Test réussi avec le modèle POM !';
    //await iframePage.writeInEditor(message);

    // 4. Assertion : On vérifie que le texte est bien présent
    // On utilise directement le locator exposé par ta classe
    //await expect(iframePage.textArea).toHaveText(message);
  });

});
import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test.describe('Tests d\'authentification', () => {

test('Vérification des variables', async ({ page }) => {
  console.log('Utilisateur chargé :', process.env.USER_NAME);
});
  
test('Connexion sécurisée avec variables d\'environnement', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.goto();
  
  // On utilise les variables chargées depuis le .env
  await loginPage.login(
    process.env.USER_NAME!, 
    process.env.USER_PASSWORD!
  );

  await expect(page).toHaveURL(/.*secure/);
});


  });

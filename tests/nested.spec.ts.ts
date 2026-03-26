import { test, expect } from '@playwright/test';
import { NestedPage } from '../pages/NestedPage';

test('Vérifier le contenu des cadres imbriqués', async ({ page }) => {
  // 1. Initialisation de la page via ta classe
    const nestedPage = new NestedPage(page);

  
  await nestedPage.goto();

  await nestedPage.VerifierTexteMilieu('MIDDLE');

  await nestedPage.VerifierTexteBas('BOTTOM');
});
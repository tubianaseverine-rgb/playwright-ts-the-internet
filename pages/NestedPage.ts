// pages/NestedPage.ts
import { Page, FrameLocator, Locator, expect } from '@playwright/test';

export class NestedPage {
  readonly page: Page;
  readonly frameTop: FrameLocator;
  readonly frameBottom: FrameLocator;
  readonly frameMiddle: FrameLocator;
  readonly texteMiddle: Locator;
  readonly texteBottom: Locator;

  constructor(page: Page) {
    this.page = page;
  // --- ACCÉDER AU CADRE DU MILIEU (MIDDLE) ---
  // 1. On cible d'abord le parent ("frame-top")
    this.frameTop = page.frameLocator('frame[name="frame-top"]');

  // --- ACCÉDER AU CADRE DU BAS (BOTTOM) ---
  // Il n'est pas dans "frame-top", il est au même niveau (frère)
    this.frameBottom = page.frameLocator('frame[name="frame-bottom"]');

  // 2. DEPUIS le parent, on cible l'enfant ("frame-middle")
    this.frameMiddle = this.frameTop.frameLocator('frame[name="frame-middle"]');

 // 3. On vérifie le texte à l'intérieur
  this.texteMiddle = this.frameMiddle.locator('#content');
  this.texteBottom = this.frameBottom.locator('body');

  }

  async goto() {
    await this.page.goto('/nested_frames');
  }

  async VerifierTexteMilieu(text: string) {
    await expect(this.texteMiddle).toHaveText(text);
  }

  async VerifierTexteBas(text: string) {
    await expect(this.texteBottom).toHaveText(text);
  }
    

}
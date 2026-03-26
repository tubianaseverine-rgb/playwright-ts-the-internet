// pages/IframePage.ts
import { Page, FrameLocator, Locator } from '@playwright/test';

export class IframePage {
  readonly page: Page;
  readonly editorFrame: FrameLocator;
  readonly textArea: Locator;

  constructor(page: Page) {
    this.page = page;
    this.editorFrame = page.frameLocator('#mce_0_ifr');
    this.textArea = this.editorFrame.locator('body#tinymce');
  }

  async goto() {
    await this.page.goto('/tinymce');
  }

  async writeInEditor(text: string) {
    await this.textArea.fill(text);
  }
}
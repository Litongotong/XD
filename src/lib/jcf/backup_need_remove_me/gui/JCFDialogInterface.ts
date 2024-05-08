export interface JCFDialogInterface {
  // getFocusOwner(): Component
  requestFocus(): void
  setFocusTraversalKeysEnabled(flag: boolean): void
  show(): void
  // setLayout(layoutManager: LayoutManager): void
  setTitle(title: string): void
  getTitle(): string
  // setCursor(cursor: Cursor): void
  setEnabled(flag: boolean): void
  setBounds(x: number, y: number, width: number, height: number): void
  setLocation(point: any): void // TODO
  setResizable(flag: boolean): void
  removeAll(): void
  dispose(): void
}

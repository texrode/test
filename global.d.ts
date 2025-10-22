export {};
declare global {
  interface Window {
    ym?: (id: number, action: string, ...args: any[]) => void;
  }
}

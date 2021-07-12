class Palette {
  black: string;
  dark: string;
  input: string;
  border: string;
  red: string;
  blue: string;
  white: string;

  constructor() {
    this.black = '#000';
    this.dark = '#191a20';
    this.input = '#f3f3f4';
    this.border = '#e0e2e7';
    this.red = '#f86d7d';
    this.blue = '#3da5f5';
    this.white = '#fff';
  }
}

const palette = new Palette();

export default palette;

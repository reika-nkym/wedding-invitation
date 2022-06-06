const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  // パージの対象ファイルを設定
  content: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      // スプレッドで展開している前に、メインとしたいフォント名を追加する
      // フォント名にスペースがある場合は、'Noto\\ Sans\\ JP'のように \ (バックスラッシュ)でエスケープする
      // Serif 体がメインの場合は、 `...defaultTheme.fontFamily.serif` を展開する
      ja: [...defaultTheme.fontFamily.sans],
      en: [...defaultTheme.fontFamily.sans],
    },
    extend: {
      colors: {
        // 開発で使用するカラーを設定する
        // `DEFAULT` で設定しているものは、`text-theme` や `bg-primary` のように使用できる
        // それ以外は、 `text-theme-light` や `bg-primary-dark` のように使用する
        // テキストなどに使うベースカラー
        theme: {
          light: '#ffffff',
          medium: '#cccccc',
          DEFAULT: '#242424',
          dark: '#111111',
        },
        // メインカラー
        primary: {
          // light: '',
          // medium: '',
          DEFAULT: '#eaddd2',
          green: '#cbdbc8',
          // dark: '',
        },
        secondary: {
          DEFAULT: '#2c3e4d',
        },
        'tree-brown': '#a38c6b',
        'tree-brown-dark': '#8c7c62',
        'off-white': '#f2f2f2',
        'off-black': '#333333',

        // サブカラー
        // secondary: {
        //   light: '',
        //   medium: '',
        //   DEFAULT: '',
        //   dark: '',
        // },
        // アクセントカラー
        // accent: {
        //   light: '',
        //   medium: '',
        //   DEFAULT: '',
        //   dark: '',
        // },
      },
    },
  },

  variants: {
    extend: {},
  },
  plugins: [],
};

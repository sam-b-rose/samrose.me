import { PrismTheme } from 'prism-react-renderer';

export const syntaxTheme: PrismTheme = {
  plain: {
    color: 'var(--colors-syntaxFg)',
    backgroundColor: 'var(--colors-syntaxBg)',
    fontFamily: 'var(--fonts-mono)',
  },
  styles: [
    {
      types: ['prolog', 'comment', 'doctype', 'cdata'],
      style: { color: 'var(--colors-syntaxComment)' },
    },
    {
      types: ['property', 'tag', 'deleted', 'constant', 'symbol'],
      style: { color: 'var(--colors-syntaxProp)' },
    },
    {
      types: ['punctuation'],
      style: { color: 'var(--colors-syntaxPunctuation)' },
    },
    {
      types: ['boolean', 'number'],
      style: { color: 'var(--colors-syntaxBool)' },
    },
    {
      types: ['attr-name', 'tag'],
      style: {},
    },
    {
      types: ['string', 'attr-value'],
      style: {
        color: 'var(--colors-syntaxVal)',
      },
    },
    {
      types: ['keyword'],
      style: {
        color: 'var(--colors-syntaxKeyword)',
        fontStyle: 'italic',
      },
    },
    {
      types: ['operator', 'entity', 'url', 'string', 'language-css'],
      style: {
        color: 'var(--colors-syntaxStr)',
      },
    },
    {
      types: ['variable'],
      style: { color: 'var(--colors-syntaxVariable)' },
    },
    {
      types: [
        'selector',
        'attr-name',
        'char',
        'builtin',
        'insert',
        'script-punctuation',
      ],
      style: {
        color: 'var(--colors-syntaxName)',
      },
    },
    {
      types: ['deleted'],
      style: {
        color: 'var(--colors-syntaxDel)',
        fontStyle: 'italic',
      },
    },
    {
      types: ['italic'],
      style: {
        fontStyle: 'italic',
      },
    },
    {
      types: ['regex', 'important'],
      style: {
        color: 'var(--colors-syntaxRegex)',
      },
    },
    {
      types: ['atrule', 'function'],
      style: {
        color: 'var(--colors-syntaxFn)',
      },
    },
    {
      types: ['symbol'],
      style: {
        opacity: 0.7,
      },
    },
    {
      types: ['comment'],
      style: {
        fontStyle: 'italic',
      },
    },
  ],
};

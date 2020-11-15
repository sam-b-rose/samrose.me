import { PrismTheme } from 'prism-react-renderer';

export const syntaxTheme: PrismTheme = {
  plain: {
    color: 'var(--syntax-txt)',
    backgroundColor: 'var(--syntax-bg)',
    fontFamily: 'var(--font-family-mono)',
  },
  styles: [
    {
      types: ['prolog', 'comment', 'doctype', 'cdata'],
      style: { color: 'var(--syntax-comment)' },
    },
    {
      types: ['property', 'tag', 'deleted', 'constant', 'symbol'],
      style: { color: 'var(--syntax-prop)' },
    },
    {
      types: ['punctuation'],
      style: { color: 'var(--syntax-punctuation)' },
    },
    {
      types: ['boolean', 'number'],
      style: { color: 'var(--syntax-bool)' },
    },
    {
      types: ['attr-name', 'tag'],
      style: {},
    },
    {
      types: ['string', 'attr-value'],
      style: {
        color: 'var(--syntax-val)',
      },
    },
    {
      types: ['keyword'],
      style: {
        color: 'var(--syntax-keyword)',
        fontStyle: 'italic',
      },
    },
    {
      types: ['operator', 'entity', 'url', 'string', 'language-css'],
      style: {
        color: 'var(--syntax-str)',
      },
    },
    {
      types: ['variable'],
      style: { color: 'var(--syntax-variable)' },
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
        color: 'var(--syntax-name)',
      },
    },
    {
      types: ['deleted'],
      style: {
        color: 'var(--syntax-del)',
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
        color: 'var(--syntax-regex)',
      },
    },
    {
      types: ['atrule', 'function'],
      style: {
        color: 'var(--syntax-fn)',
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

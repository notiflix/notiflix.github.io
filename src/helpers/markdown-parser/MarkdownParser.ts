import { load } from 'js-yaml';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type TMarkdownParserMetaData = any;

interface IMarkdownParserData {
  lines: Array<string>;
  indexes: Array<number>;
}

interface IMarkdownParser {
  attributes: TMarkdownParserMetaData;
  html: string;
}

const mdFindAttributeIndexes = (previousValue: Array<number>, currentValue: string, currentIndex: number): Array<number> => {
  if (/^---/.test(currentValue)) {
    previousValue.push(currentIndex);
  }
  return previousValue;
};

const mdParseAttributes = ({ lines, indexes }: IMarkdownParserData): TMarkdownParserMetaData => {
  if (indexes.length > 0) {
    const attributes = lines.slice(indexes[0] + 1, indexes[1]);
    const loadedAttributes = load(attributes.join('\n'));
    return loadedAttributes;
  }
  return {};
};

const mdParseHTML = ({ lines, indexes }: IMarkdownParserData): string => {
  if (indexes.length > 0) {
    lines = lines.slice(indexes[1] + 1, lines.length);
  }
  return lines?.join('\n') || '';
};


const markdownParser = (contents: string): IMarkdownParser => {
  const lines: Array<string> = contents.split('\n');
  const indexes: Array<number> = lines.reduce(mdFindAttributeIndexes, []);

  const attributes = mdParseAttributes({ lines, indexes });
  const html = mdParseHTML({ lines, indexes });

  return { attributes, html };
};

export type { IMarkdownParser };

export { markdownParser };

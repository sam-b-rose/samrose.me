import React, { HTMLAttributes } from 'react';
import { styled } from '@style';
import IconBase from 'react-icons-kit';
import { link as linkIcon } from 'react-icons-kit/ionicons/link';

const slugify = (str = '') =>
  str
    .toLowerCase()
    .replace(/\s/g, '-')
    .replace(/[^a-zA-Z0-9-]/g, '');

type HeadingProps = HTMLAttributes<HTMLElement> & {
  anchorId?: string;
  size?: 1 | 2 | 3 | 4 | 5 | 6;
  style?: React.CSSProperties;
};

const Heading: React.FC<HeadingProps> = ({
  size = 3,
  anchorId,
  children,
  ...delegated
}) => {
  const Element = [H1, H2, H3, H4, H5, H6][size - 1];
  const as = `h${size}` as 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  const id = React.useMemo(() => {
    return anchorId || slugify(children as string);
  }, [anchorId, children]);

  React.useEffect(() => {
    // Check and see if the anchor ID is duplicated
    const numOfAnchorsWithThisId = document.querySelectorAll(`#${id}`).length;

    if (numOfAnchorsWithThisId > 1) {
      console.error(
        'Found multiple anchors on the page with this ID:',
        anchorId,
        '\n\n',
        'Please add an explicit unique "anchorId" to this Heading'
      );
    }
  }, [id]);

  return (
    <Element {...delegated} as={as}>
      <Anchor id={id} href={`#${id}`}>
        <IconBase size="0.75em" icon={linkIcon} />
      </Anchor>

      {children}
    </Element>
  );
};

const Base = styled('div', {
  position: 'relative',
  fontWeight: '700',
  lineHeight: '1.5',
  webkitFontSmoothing: 'antialiased',
  textRendering: 'optimizeLegibility',
  marginBottom: '1rem',
});

const H1 = styled(Base, {
  fontSize: '3rem',
  letterSpacing: '-2px',
});

const H2 = styled(Base, {
  fontSize: '2rem',
  letterSpacing: '-0.5px',
  paddingTop: '4rem',
});

const H3 = styled(Base, {
  fontSize: '1.5rem',
  paddingTop: '4rem',
});

const H4 = styled(Base, {
  fontSize: '1.25rem',
  paddingTop: '2rem',
});

const H5 = styled(Base, {
  fontSize: '1rem',
});

const H6 = styled(Base, {
  fontSize: '1rem',
});

const Anchor = styled('a', {
  display: 'block',
  position: 'absolute',
  bottom: '0',
  left: '0',
  transform: 'translateX(-125%)',
  transition: 'opacity 250ms',
  opacity: '0',

  [`${Base}:hover &, &:focus`]: {
    opacity: 0.75,
  },

  '@bp2': {
    display: 'none',
  },
});

export default Heading;

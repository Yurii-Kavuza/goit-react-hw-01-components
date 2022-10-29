import styled from '@emotion/styled';
import { space, color, layout } from 'styled-system';

export const Box = styled('div')(
  { boxSizing: 'border-box' },
  space,
  color,
  layout
);

import Example from '../src';

const fixtureGroups = [
  {
    component: Example,
    fixtures: {
      'One Column': {
        props: {
          isTwoColumn: false,
        },
      },
      'Two Columns': {
        props: {
          isTwoColumn: true,
        },
      },
    },
  },
];

export default fixtureGroups;

import bbonline from '../../sampleData/bbonline.json';
import bedbreakfast from '../../sampleData/bedbreakfast.json';
import cabbi from '../../sampleData/cabbi.json';
import excellentromantic from '../../sampleData/excellentromantic.json';
import uniqueinns from '../../sampleData/uniqueinns.json';

export const mutations = {
  ADD_REPORTGROUP: (state, newReportGroup) => {
    state.reportGroups.push(newReportGroup);
  },
  EDIT_REPORTGROUP: (state, updatedReportGroup) => {
    state.reportGroups.splice(updatedReportGroup.index, 1, updatedReportGroup);
  },
  REMOVE_REPORTGROUP: (state, index) => {
    state.reportGroups.splice(index, 1);
  },
};

export const initialState = {
  reportGroups: [
    {
      name: 'Social Sites',
      _id: '507f1f77bcf86cd799439011',
      userUrl: 'https://www.google.com',
      otherUrls: [{ value: 'https://www.facebook.com' }, { value: 'https://www.myspace.com' }],
      scores: [
        {
          userUrlScore: { value: 'https://www.google.com', data: bedbreakfast },
          otherUrlsScores: [
            { value: 'https://www.facebook.com', data: cabbi },
            { value: 'https://www.myspace.com', data: excellentromantic },
            { value: 'https://www.mys2pace.com', data: excellentromantic },
            { value: 'https://www.mysp3ace.com', data: excellentromantic },
            { value: 'https://www.myspa4ce.com', data: excellentromantic },
            { value: 'https://www.myspac5e.com', data: excellentromantic },
            { value: 'https://www.myspace6.com', data: excellentromantic },
            { value: 'https://www.mysp2ace6.com', data: excellentromantic },
            { value: 'https://www.myspa3ce6.com', data: excellentromantic },
            { value: 'https://www.myspac4e6.com', data: excellentromantic },
          ],
          createdDate: '2018-10-22T03:24:00',
        },
        {
          userUrlScore: { value: 'https://www.google.com', data: cabbi },
          otherUrlsScores: [
            { value: 'https://www.facebook.com', data: uniqueinns },
            { value: 'https://www.myspace.com', data: bedbreakfast },
          ],
          createdDate: '2018-11-16T03:24:00',
        },
      ],
    },
    {
      name: 'Wineries',
      _id: '507f1f77bcf86cd799439013',
      userUrl:'https://argylewinery.com',
      otherUrls: [{ value: 'https://www.acornwinery.com' }, { value: 'https://www.kevinsfancywine.com' }, { value: 'https://www.dollarstorewine.com' }],
      scores: [
        {
          userUrlScore: { value: 'https://argylewinery', data: bbonline },
          otherUrlsScores: [
            { value: 'https://www.acornwinery.com', data: bedbreakfast },
            { value: 'https://www.kevinsfancywine.com', data: cabbi },
            { value: 'https://www.dollarstorewine.com', data: uniqueinns },
          ],
          createdDate: '2018-11-16T03:24:00',
        },
      ],
    },
  ],
};

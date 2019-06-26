

export const initialState = {
  galleryByCategory: {
    'cuttings': {
      1: {
        category: 'cuttings',
        dateMade: '2017',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.Dolores natus sed fuga enim ?',
        title: 'Bands',
        forSale: false,
        id: 1,
        srcFile: 'https://publicrawartistsorg.s3.amazonaws.com/1520725865.3ea1d194cc3c110e1c327478ddaf8d95.jpeg'
      },
      2: {
        title: 'The Lady in Red',
        dateMade: '2017',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.Dolores natus sed fuga enim ?',
        forSale: false,
        category: 'cuttings',
        id: 2,
        srcFile: 'https://publicrawartistsorg.s3.amazonaws.com/1520722601.cd5228c9889d44ed6cd885ebf83602f6.jpeg'
      },
    },
    'paintings': {
      3: {
        title: 'I Wish You The Best',
        dateMade: '2016',
        description: 'We won\'t alwalys be together...but oh the song\'s we\'ll sing in heaven',
        forSale: false,
        category: 'painting',
        id: 3,
        srcFile: 'https://publicrawartistsorg.s3.amazonaws.com/1520722609.53e913137a6c7cee298ef092931ae2ca.jpeg'
      },
      4: {
        title: 'Space Ladies',
        dateMade: '2016',
        description: 'It won\'t matter how it ended, becasuse we\'ll all be together and we\'ll be singing',
        forSale: false,
        category: 'painting',
        id: 4,
        srcFile: 'https://publicrawartistsorg.s3.amazonaws.com/1520722615.75d53d4f77a0cda16df7980ad47b5fcc.jpeg'
      },

    },
    'photography': {
      5: {
        title: 'The Hills',
        dateMade: '2015',
        description: 'Who have you been in and how small were you then? The world doesn\'t stop moving, and the hills don\'t forget',
        forSale: false,
        category: 'photography',
        id: 5,
        srcFile: 'https://images.unsplash.com/photo-1506710766034-d5b43d2af393?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=958&q=80'

      },
      6: {
        title: 'You\'ve come a long way baby',
        dateMade: '2015',
        description: 'Who have you been in and how small were you then? The world doesn\'t stop moving, and the hills don\'t forget',
        forSale: false,
        category: 'photography',
        id: 6,
        srcFile: 'https://publicrawartistsorg.s3.amazonaws.com/1520722607.90fa04c217cace3f10fce609a831e355.jpeg'
      }
    }

  }
};

interface Home {
    _id: string;
    _type: 'home';
    title: string;
    description: string;
    image: {
      _type: 'image';
      asset: {
        _ref: string;
        _type: 'reference';
      };
      alt: string;
    };
  }
  
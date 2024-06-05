interface About {
    _id: string;
    _type: 'about';
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
  
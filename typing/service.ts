interface Service {
    _id: string;
    _type: 'service';
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
  
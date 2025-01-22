export type Project = {
  name: string;
  description: string;
  image: string,
  path: string,
};

export type Service = {
  name: string;
  description: string;
  image: {
    asset: {
      _ref: string;
      url: string;
    };
  };
  slug: {
    current: string
    _type: string
  };
  detail: string
};



export type Services = {
  title: string;
  slug: string;
  description: string,
  image: string,
  tags: string[];
  lottieImg: string;
  url: string;
  miniDetails: string;
  benefits: {
    icon: any,
    heading: string,
    details: string,
  }[]
}


export type ServicesCardProp = {
  name: string;
  description: string;
  image: string,
  slug: string;
};


// Type for the asset (Sanity Image Object)
export type ImageAsset = {
  _ref: string;
  url: string;
};

// Type for the source parameter in urlFor
export type ImageSource = {
  _ref: string;
  url: string;
};
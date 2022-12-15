import {writeFileSync} from 'fs';
import * as icons from './icons.json';

enum IconTypeEnum {
  solid = 'solid',
  brands = 'brands',
  regular = 'regular',
}

type IconType = {
  free: IconTypeEnum[];
};

type IconsList = {
  [key: string]: IconType;
};

type FinalList = {
  solid: IconListElement[];
  brands: IconListElement[];
  regular: IconListElement[];
};

type IconListElement = {
  name: string;
  className: string;
};

const finalList: FinalList = {
  solid: [],
  brands: [],
  regular: [],
};

const typedIcons = icons as IconsList;

Object.keys(typedIcons).forEach(key => {
  const iconType = typedIcons[key];
  iconType.free.forEach(iconName => {
    const icon = {
      name: key,
      className: `fa-${iconName} fa-${key}`,
    };
    finalList[iconName].push(icon);
  });
});

writeFileSync('./icons.json', JSON.stringify(finalList));

import {
  accentDictionary,
  activityDictionary,
  activityStyleDictionary,
  animationDictionary,
  buttonShapeDictionary,
  buttonSpecialDictionary,
  colorDictionary, easingDictionary,
  gravatarDictionary,
  iconCategoryDictionary,
  iconDictionary,
  popoverTriggerDictionary,
  positionBaseDictionary,
  positionDictionary,
  positionHorizontalDictionary,
  positionVerticalDictionary,
  progressTypeDictionary,
  roundTypeDictionary,
  sizeDictionary,
  thinDictionary,
  widePointDictionary
} from './lists';

export type WidePointType = keyof typeof widePointDictionary;

export type AccentType = keyof typeof accentDictionary;

export type PositionVerticalType = keyof typeof positionVerticalDictionary;
export type PositionHorizontalType = keyof typeof positionHorizontalDictionary;
export type PositionBaseType = keyof typeof positionBaseDictionary;
export type PositionType = keyof typeof positionDictionary;

export type SizeType = keyof typeof sizeDictionary;

export type ColorType = keyof typeof colorDictionary;

export type GravatarDefaultsType = keyof typeof gravatarDictionary;

export type ActivityType = keyof typeof activityDictionary;
export type ActivityStyleType = keyof typeof activityStyleDictionary;

export type IconCategoryType = keyof typeof iconCategoryDictionary;
export type IconType = keyof typeof iconDictionary;

export type AnimationType = keyof typeof animationDictionary;

export type ButtonShapeType = keyof typeof buttonShapeDictionary;
export type ButtonSpecialType = keyof typeof buttonSpecialDictionary;

export type PopoverTriggerType = keyof typeof popoverTriggerDictionary;

export type ProgressTypeType = keyof typeof progressTypeDictionary;

export type RoundTypeType = keyof typeof roundTypeDictionary;

export type ThinType = keyof typeof thinDictionary;

export type EasingType = keyof typeof easingDictionary;

// exported
import type { Props as MobileArticleIntroProps,
    Content as MobileArticleIntroContent } from './MobileArticleIntro';
import type { Props as DesktopArticleIntroProps,
    Content as DesktopArticleIntro } from './DesktopArticleIntro';
// used
import type { SliderItem } from 'elements/types';


export interface ArticleIntroSliderItem extends Omit<SliderItem, 'labelChildren'> {
    label: string;
}

export interface ArticleIntroSliderContent {
    items: ArticleIntroSliderItem[];
}

export type {
    MobileArticleIntroContent,
    MobileArticleIntroProps,
    DesktopArticleIntro,
    DesktopArticleIntroProps,
}
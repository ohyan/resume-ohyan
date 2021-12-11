import { string } from "prop-types";

export interface IIntroduction {
    name: string;
    avatar: string;
    location: string;
    description: string;
    position: string;
}

export interface IWork {
    title: string;
    company: string;
    location: string;
    duration: string;
    description: string;
    stack: { name: string; icon: string; }[];
}

export interface ISchoolEntity {
    name: string;
    title: string;
    duration: string;
    credentialLink?: string;
}

export interface ISkill {
    name: string;
    icon: string;
}

export interface IAward {
    title: string;
    issuer: string;
    location: string;
    logo: string;
    description: string;
    link: string;
    date: string;
}

export interface ILanguage {
    name: string;
    level: string;
}

export interface IContact {
    name: string;
    icon: string;
    link: string;
}

export interface IPublication {
    title: string;
    link: string;
}

export interface IResume {
    introduction: IIntroduction;
    experience: IWork[];
    education: ISchoolEntity[];
    skills: ISkill[];
    awards: IAward[];
    languages: ILanguage[];
    contact: IContact[];
    publications: IPublication[];
}

const Resume: IResume = {
    introduction: {
        name: "ohyan",
        avatar: "./images/avatar.png",
        location: "Tokyo, Japan",
        description: "",
        position: "データサイエンティスト @楽天"
    },
    experience: [
        {
            title: 'データサイエンティスト',
            company: '楽天グループ',
            duration: '2021年6月 - 現在',
            location: 'Tokyo, Japan',
            description: "データ活用に基づいたソリューション開発を従事",
            stack: [
                // { name: 'Reactjs', icon: 'https://cdn.svgporn.com/logos/react.svg' },
                // { name: 'Typescript', icon: 'https://cdn.svgporn.com/logos/typescript-icon.svg' },
                // { name: 'Redux', icon: 'https://cdn.svgporn.com/logos/redux.svg' },                
                // { name: 'AWS', icon: 'https://cdn.svgporn.com/logos/aws.svg' },
                // { name: 'Git', icon: 'https://cdn.svgporn.com/logos/git-icon.svg' },                
                // { name: 'Styled Components', icon: './images/styled-components.png' },
            ]
        },
        {
            title: 'データサイエンスエンジニア',
            company: 'VOYAGE GROUP',
            duration: '2019年4月 - 2021年5月',
            location: 'Tokyo, Japan',
            description: "インターネット広告の配信ロジックを中心としたフルサイクル開発を従事",
            stack: [
                // { name: 'Reactjs', icon: 'https://cdn.svgporn.com/logos/react.svg' },
                // { name: 'Typescript', icon: 'https://cdn.svgporn.com/logos/typescript-icon.svg' },
                // { name: 'Mobx State Tree', icon: 'https://cdn.svgporn.com/logos/mobx.svg' },
                // { name: 'Nestjs', icon: 'https://cdn.svgporn.com/logos/nestjs.svg' },
                // { name: 'AWS', icon: 'https://cdn.svgporn.com/logos/aws.svg' },
                // { name: 'Git', icon: 'https://cdn.svgporn.com/logos/git-icon.svg' },
                // { name: 'Flutter', icon: 'https://cdn.svgporn.com/logos/flutter.svg' },
                // { name: 'JSS', icon: './images/jss.png' },
            ]
        },
    ],
    education: [
        { name: '東北大学', title: '工学研究科 通信工学専攻', duration: '2017年4月 - 2019年3月' },
        { name: '北京工業大学', title: '電子工学部 電子工学学科', duration: '2012年9月 - 2016年8月' },
    ],
    skills: [
        { name: 'Python', icon: 'https://cdn.svgporn.com/logos/python.svg' },
        // { name: 'Sass', icon: 'https://cdn.svgporn.com/logos/sass.svg' },
        // { name: 'Stylus', icon: 'https://cdn.svgporn.com/logos/stylus.svg' },
    ],
    awards: [
        // {
        //     title: 'BlackBerry Jam Sessions Latino America Winner!',
        //     logo: './images/blackberry.png',
        //     location: 'CDMX, Mexico',
        //     issuer: 'BlackBerry',
        //     description: 'First place winner at BlackBerry Jam Sessions Latino America #15 on the “Best Design” category and second place on the “Best app” category.',
        //     link: 'http://www.youtube.com/watch?feature=player_embedded&v=QQL9PpvNwRo',
        //     date: 'November 2012'
        // }
    ],
    languages: [
        {
            name: '中国語',
            level: 'ネイティブ',
        },
        {
            name: '日本語',
            level: 'ビジネス',
        },
        {
            name: '英語',
            level: 'ビジネス',
        },
    ],
    contact: [
        { name: 'Github', icon: 'https://cdn.svgporn.com/logos/github-icon.svg', link: 'https://github.com/ohyan' },
        { name: 'Twitter', icon: 'https://cdn.svgporn.com/logos/twitter.svg', link: 'https://twitter.com/ohyan' },
    ],
    publications: [
        { title: '今更聞けないオークション理論とDSP入札ロジック', link: 'https://techlog.voyagegroup.com/entry/2020/07/16/auction_theory_dsp'},
        { title: '検索からの需要データのすごさ：リアルタイムデータは施策効果を読みとれる（執行役員経由）', link: 'https://newspicks.com/topics/data-marketing/posts/2'}
    ],
};

export default Resume;